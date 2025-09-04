export const securityStepContent7 = `
<p class="lead">
    Tester manuellement ou automatiquement l’ensemble du flux JWT est crucial.
</p>

<hr>

<h2>
    Étapes de test avec Postman
</h2>

<ol>
    <li>Appeler <code>/api/auth/login</code> pour obtenir un token.</li>
    <li>Ajouter l’en-tête <code>Authorization: Bearer {token}</code> dans les requêtes suivantes.</li>
    <li>Tester les accès aux endpoints protégés et non protégés.</li>
</ol>

<h3>
    Exemple de header
</h3>

<pre><code>
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
</code></pre>

<p>Utilisez également des tests d’intégration avec MockMvc ou RestAssured dans vos suites JUnit.</p>
`;
