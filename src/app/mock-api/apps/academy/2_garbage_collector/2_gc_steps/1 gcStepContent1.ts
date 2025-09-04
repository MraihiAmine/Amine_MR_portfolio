export const gcStepContent1 = `
<p class="lead">
    La mémoire dans Java est organisée en plusieurs zones pour une gestion plus efficace des objets à durée de vie variable.
</p>

<hr>

<h2>
    Zones principales de la mémoire Java
</h2>

<ul>
    <li><strong>Young Generation</strong> : où les nouveaux objets sont alloués.</li>
    <li><strong>Old Generation</strong> : pour les objets de longue durée.</li>
    <li><strong>Metaspace</strong> : stocke les métadonnées des classes (remplace PermGen).</li>
</ul>

<h3>
    Objectif de cette structure
</h3>

<ol>
    <li>Réduire la fréquence des GC majeurs.</li>
    <li>Favoriser les nettoyages rapides dans la Young Gen.</li>
    <li>Optimiser l’utilisation mémoire globale.</li>
</ol>
`;
