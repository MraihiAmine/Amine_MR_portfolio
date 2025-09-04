export const securityStepContent5 = `
<p class="lead">
    Chaque requête authentifiée doit être validée avec un token JWT valide.
</p>

<hr>

<h2>
    Étapes de validation
</h2>

<ol>
    <li>Lire le token dans l’en-tête.</li>
    <li>Vérifier sa signature avec la clé secrète.</li>
    <li>Contrôler la date d’expiration.</li>
    <li>Extraire les données d’authentification.</li>
</ol>

<h3>
    Exemple
</h3>

<pre><code class="language-java">
Claims claims = Jwts.parser()
    .setSigningKey(secretKey)
    .parseClaimsJws(token)
    .getBody();
</code></pre>

<p>En cas de token expiré ou falsifié, renvoyer une erreur 401.</p>
`;
