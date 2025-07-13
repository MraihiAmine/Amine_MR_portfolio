export const securityStepContent6 = `
<p class="lead">
    L'autorisation des accès est définie selon les rôles utilisateurs.
</p>

<hr>

<h2>
    Exemple d'autorisation conditionnelle
</h2>

<pre><code class="language-java">
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/api/admin/**").hasRole("ADMIN")
    .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated());
</code></pre>

<h3>
    Astuce
</h3>

<p>Utiliser l’annotation <code>@PreAuthorize</code> sur les méthodes côté contrôleur pour un contrôle fin :</p>

<pre><code class="language-java">
@PreAuthorize("hasRole('ADMIN')")
public ResponseEntity<?> getAllUsers() { ... }
</code></pre>
`;
