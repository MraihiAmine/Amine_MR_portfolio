export const securityCourseContent = `
<h2 class="text-2xl sm:text-3xl">Sécurité dans Spring Boot</h2>
<p class="lead">
    La sécurité est un aspect fondamental dans le développement d’applications web. Spring Boot propose un ensemble d’outils puissants pour protéger vos API et vos données, notamment via Spring Security et JWT.
</p>

<blockquote>
    <p>
        “La sécurité n’est pas un produit, mais un processus.” — Bruce Schneier
    </p>
</blockquote>

<hr>

<h2>
    Concepts clés de la sécurité Spring Boot
</h2>

<ol>
    <li>Authentification et autorisation via Spring Security.</li>
    <li>Utilisation des filtres JWT pour sécuriser les endpoints.</li>
    <li>Gestion des CORS pour contrôler l’accès aux ressources.</li>
</ol>

<h3>
    Exemple de configuration de sécurité
</h3>

<pre>
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    // ...configuration des filtres, CORS, endpoints publics/protégés...
}
</pre>

<p>
    Les endpoints comme <code>/api/auth/**</code> ou <code>/h2-console/**</code> sont souvent laissés publics, tandis que les autres nécessitent une authentification.
</p>

<figure>
    <video controls width="640">
        <source src="assets/videos/2_spring_security/1_jwt_filter.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
    <figcaption>
        Illustration du fonctionnement d’un filtre JWT dans Spring Security.
    </figcaption>
</figure>

<ul>
    <li>Configurer les CORS pour autoriser les requêtes du front-end.</li>
    <li>Utiliser <code>BCryptPasswordEncoder</code> pour stocker les mots de passe de façon sécurisée.</li>
    <li>Gérer les exceptions d’accès et d’authentification.</li>
</ul>

<h2>
    Bonnes pratiques
</h2>

<ul>
    <li>Limiter les endpoints publics au strict nécessaire.</li>
    <li>Valider et parser correctement les JWT.</li>
    <li>Ne jamais exposer d’informations sensibles dans les messages d’erreur.</li>
</ul>

<h2>
    Table de synthèse des points de vigilance
</h2>

<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Composant</th>
            <th>Bonne pratique</th>
            <th>Risque évité</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filtres JWT</td>
            <td>Vérifier la validité du token</td>
            <td>Accès non autorisé</td>
        </tr>
        <tr>
            <td>Configuration CORS</td>
            <td>Limiter les origines autorisées</td>
            <td>Attaques Cross-Origin</td>
        </tr>
        <tr>
            <td>Gestion des exceptions</td>
            <td>Messages d’erreur neutres</td>
            <td>Fuite d’informations</td>
        </tr>
    </tbody>
</table>

<h3>
    Pour aller plus loin
</h3>

<p>
    Maîtriser la sécurité dans Spring Boot nécessite de comprendre les concepts de base, mais aussi de rester informé des nouvelles menaces et des bonnes pratiques. Consultez la <a href="https://docs.spring.io/spring-security/reference/">documentation officielle Spring Security</a> pour approfondir vos connaissances.
</p>
`;