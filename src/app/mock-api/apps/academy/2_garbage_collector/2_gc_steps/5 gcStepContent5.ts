export const gcStepContent5 = `
<p class="lead">
    Les objets promus dans l’Old Generation sont supposés vivre plus longtemps, et leur nettoyage nécessite un GC complet (Full GC).
</p>

<hr>

<h2>
    Full GC
</h2>

<ul>
    <li>Impact plus important sur la performance.</li>
    <li>Nettoie l’Old Gen et parfois le Metaspace.</li>
    <li>Souvent déclenché lorsque la mémoire est presque pleine.</li>
</ul>

<h3>
    Optimisation
</h3>

<p>
    Il est crucial d’éviter les Full GC trop fréquents via un tuning efficace et en limitant les objets à longue durée de vie non nécessaires.
</p>
`;
