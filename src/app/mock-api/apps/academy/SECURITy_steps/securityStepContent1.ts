export const securityStepContent1 = `
<p class="lead">
    La première étape consiste à configurer Spring Security dans votre projet Spring Boot.
</p>

<blockquote>
    <p>
        “Une bonne configuration, c’est la moitié de la sécurité assurée.”
    </p>
</blockquote>

<hr>

<h2>
    Étapes de configuration
</h2>

<ol>
    <li>Créer une classe Java annotée avec <code>@Configuration</code> et <code>@EnableWebSecurity</code>.</li>
    <li>Définir un bean <code>SecurityFilterChain</code>.</li>
    <li>Configurer les règles d’accès aux endpoints avec <code>authorizeHttpRequests()</code>.</li>
</ol>

<h3>
    Exemple de configuration
</h3>

<pre><code class="language-java">
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
        .csrf().disable()
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**").permitAll()
            .anyRequest().authenticated())
        .build();
}
</code></pre>
`;
