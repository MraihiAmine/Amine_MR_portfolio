export const gcStepContent8 = `
<p class="lead">
    Bien configurer le GC peut améliorer considérablement les performances de votre application.
</p>

<hr>

<h2>
    Bonnes pratiques
</h2>

<ol>
    <li>Surveillez les logs GC régulièrement.</li>
    <li>Utilisez des outils comme JVisualVM ou Java Mission Control.</li>
    <li>Évitez les objets inutiles à longue durée de vie.</li>
</ol>

<h3>
    Paramètres JVM utiles
</h3>

<ul>
    <li><code>-XX:+UseG1GC</code></li>
    <li><code>-Xms512m -Xmx1024m</code></li>
    <li><code>-XX:+PrintGCDetails</code></li>
</ul>
`;
