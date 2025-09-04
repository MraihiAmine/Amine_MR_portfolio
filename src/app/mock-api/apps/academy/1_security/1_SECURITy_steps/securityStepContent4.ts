export const securityStepContent4 = `
<p class="lead">
    Un token JWT est généré lors de la connexion pour authentifier l’utilisateur.
</p>

<blockquote>
    <p>“Le token, c’est la carte d’identité numérique de l’utilisateur.”</p>
</blockquote>

<hr>

<h2>
    Structure du token JWT
</h2>

<ul>
    <li>Header : type de token + algo (HS256)</li>
    <li>Payload : claims (username, roles, exp...)</li>
    <li>Signature : validation côté serveur</li>
</ul>

<h3>
    Exemple avec JJWT
</h3>

<pre><code class="language-java">
String token = Jwts.builder()
    .setSubject(user.getUsername())
    .claim("role", user.getRole())
    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
    .signWith(secretKey)
    .compact();
</code></pre>
`;
