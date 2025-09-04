export const securityStepContent2 = `
<p class="lead">
    Le filtre JWT permet de valider les tokens dans chaque requête entrante.
</p>

<blockquote>
    <p>“Un filtre bien placé vaut mieux qu’une erreur de sécurité.”</p>
</blockquote>

<hr>

<h2>
    Étapes de création du filtre
</h2>

<ol>
    <li>Créer une classe qui hérite de <code>OncePerRequestFilter</code>.</li>
    <li>Lire le header <code>Authorization</code>.</li>
    <li>Valider le token et injecter l’authentification dans le contexte.</li>
</ol>

<h3>
    Exemple simplifié
</h3>

<pre><code class="language-java">
String authHeader = request.getHeader("Authorization");
if (authHeader != null && authHeader.startsWith("Bearer ")) {
    String jwt = authHeader.substring(7);
    // validate and authenticate
}
</code></pre>
`;
