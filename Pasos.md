# Pasos para consumir API de Twitch

## 1. Registrarse en Twitch Developers
[Twitch Developers](https://dev.twitch.tv/console/)

## 2. Crear App en Twitch Developers (Se debe tener la autenticación de doble factor activada en nuestra cuenta de Twitch)
### 2.1 En categoria indicar "ChatBot"

### 2.2 En "Direcciones de redireccionamiento de OAuth" debemos colocar un url de redirección 
- Redirect Url: http://localhost:5500/index.html

### 2.3 Al crear la app obtenemos estas credenciales
- Client ID: 3wrpnq6...


## 3. Enviar credenciales "client_id" y "redirect_url" al siguiente enlace (el redirect_url debe ser el mismo que indicamos al crear la app)
https://id.twitch.tv/oauth2/authorize?client_id={clientid}&redirect_uri={urlredirect}&response_type=token&scope=user:read:email

### Esta será la respuesta que obtendremos en el url de nuestro servidor indicado, dentro se encuentra el access_token que usaremos para consumir la API
http://localhost:5500/index.html#access_token=0wa9h4m9qgp222ys1yiz0zkeqobq8k1n&scope=user%3Aread%3Aemail&token_type=bearer