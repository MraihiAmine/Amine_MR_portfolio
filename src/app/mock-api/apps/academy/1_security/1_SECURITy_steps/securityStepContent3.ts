export const securityStepContent3 = `
<p class="lead">
    Le positionnement du filtre JWT dans la chaîne Spring Security est essentiel.
</p>

<hr>

<h2>
    Intégration dans la chaîne
</h2>

<ol>
    <li>Insérer le filtre JWT avant <code>UsernamePasswordAuthenticationFilter</code>.</li>
    <li>Configurer les règles de traitement des requêtes non authentifiées.</li>
</ol>

<pre><code class="language-java">
http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
</code></pre>

<p>Le filtre agit sur toutes les requêtes sauf celles explicitement exclues.</p>
`;
