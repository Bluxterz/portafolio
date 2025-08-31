import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

// Mock blog posts data
const blogPosts = {
  "1": {
    id: 1,
    title: "Implementando autenticación segura en aplicaciones modernas",
    excerpt: "Una guía completa sobre cómo implementar sistemas de autenticación robustos utilizando JWT, OAuth 2.0 y mejores prácticas de seguridad.",
    content: `
# Implementando autenticación segura en aplicaciones modernas

En el desarrollo de aplicaciones modernas, la seguridad de la autenticación es fundamental para proteger tanto a los usuarios como a los sistemas. En este artículo, exploraremos las mejores prácticas y técnicas avanzadas para implementar sistemas de autenticación robustos.

## ¿Por qué es importante la autenticación segura?

La autenticación es el primer paso en la cadena de seguridad de cualquier aplicación. Una implementación deficiente puede llevar a:

- **Acceso no autorizado** a datos sensibles
- **Suplantación de identidad** de usuarios legítimos
- **Exposición de credenciales** en tránsito o almacenamiento
- **Vulnerabilidades de sesión** que permiten ataques

## Fundamentos de JWT (JSON Web Tokens)

Los JWT son una herramienta poderosa para la autenticación stateless. Permiten:

### Ventajas
- **Descentralización**: No requieren almacenamiento de sesiones en servidor
- **Escalabilidad**: Ideales para arquitecturas distribuidas
- **Interoperabilidad**: Estándar abierto compatible entre diferentes tecnologías

### Estructura de un JWT
Un JWT consta de tres partes separadas por puntos:

\`\`\`
header.payload.signature
\`\`\`

**Header**: Contiene el algoritmo de firma
\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

**Payload**: Contiene las claims (información del usuario)
\`\`\`json
{
  "sub": "user123",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}
\`\`\`

**Signature**: Garantiza la integridad del token

## Implementación práctica con Node.js

### 1. Configuración inicial

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Configuración de seguridad
const JWT_SECRET = crypto.randomBytes(64).toString('hex');
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';
\`\`\`

### 2. Generación de tokens

\`\`\`javascript
function generateTokens(user) {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role
  };

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
    issuer: 'your-app-name',
    audience: 'your-app-users'
  });

  const refreshToken = jwt.sign(
    { id: user.id }, 
    REFRESH_TOKEN_SECRET, 
    { expiresIn: REFRESH_TOKEN_EXPIRATION }
  );

  return { accessToken, refreshToken };
}
\`\`\`

### 3. Middleware de verificación

\`\`\`javascript
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado' });
      }
      return res.status(403).json({ error: 'Token inválido' });
    }
    
    req.user = decoded;
    next();
  });
}
\`\`\`

## OAuth 2.0: Delegación de autenticación

OAuth 2.0 permite a los usuarios autenticarse usando servicios externos como Google, Facebook, o GitHub.

### Flujo de autorización

1. **Autorización**: El usuario es redirigido al proveedor OAuth
2. **Concesión**: El proveedor retorna un código de autorización
3. **Token**: La aplicación intercambia el código por un access token
4. **Acceso**: Se usa el token para acceder a recursos protegidos

### Implementación con Passport.js

\`\`\`javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    
    if (!user) {
      user = new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      });
      await user.save();
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));
\`\`\`

## Mejores prácticas de seguridad

### 1. Almacenamiento seguro de passwords

\`\`\`javascript
// Hash de passwords con salt
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Verificación de passwords
const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
\`\`\`

### 2. Rate limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 intentos por IP
  message: 'Demasiados intentos de login'
});

app.post('/login', authLimiter, loginHandler);
\`\`\`

### 3. Validación de entrada

\`\`\`javascript
const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password debe tener mínimo 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password debe contener mayúscula, minúscula, número y símbolo')
];
\`\`\`

## Consideraciones adicionales

### HTTPS obligatorio
- Nunca transmitir credenciales por HTTP
- Usar TLS 1.2 o superior
- Implementar HSTS headers

### Gestión de sesiones
- Invalidar tokens en logout
- Implementar blacklist para tokens comprometidos
- Rotación automática de refresh tokens

### Monitoreo y alertas
- Log de intentos de autenticación fallidos
- Alertas por patrones sospechosos
- Métricas de uso de tokens

## Conclusión

La implementación de autenticación segura requiere un enfoque integral que combine:

1. **Tecnologías robustas** como JWT y OAuth 2.0
2. **Mejores prácticas** de seguridad
3. **Monitoreo continuo** de amenazas
4. **Actualización constante** de conocimientos

La seguridad no es un destino, sino un proceso continuo de mejora y adaptación a nuevas amenazas.

## Recursos adicionales

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT.io](https://jwt.io/) - Herramientas para JWT
- [OAuth 2.0 RFC](https://datatracker.ietf.org/doc/html/rfc6749)

---

*¿Te gustó este artículo? Compártelo con tu equipo y sígueme para más contenido sobre ciberseguridad y desarrollo.*
    `,
    category: "Ciberseguridad",
    author: "Matías Guzmán",
    date: "2025-01-15",
    readTime: "12 min",
    image: "/img/blog/auth-security.jpg",
    featured: true,
    views: 1250,
    likes: 89,
    comments: 24,
    tags: ["Seguridad", "JWT", "OAuth", "Autenticación", "Node.js"]
  }
  // Add more posts as needed
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts[id as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}