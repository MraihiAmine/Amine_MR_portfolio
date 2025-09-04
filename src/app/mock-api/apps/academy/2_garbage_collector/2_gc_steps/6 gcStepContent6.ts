export const gcStepContent6 = `
<p class="lead">
    Le Metaspace, introduit avec Java 8, remplace PermGen pour stocker les métadonnées de classes.
</p>

<hr>

<h2>
    Fonction du Metaspace
</h2>

<ul>
    <li>Stocke les informations sur les classes, méthodes, et chargements.</li>
    <li>Utilise la mémoire native (hors heap).</li>
    <li>Évite les limites strictes de l’ancienne PermGen.</li>
</ul>

<h3>
    Pourquoi c’est mieux ?
</h3>

<p>
    Metaspace permet une gestion plus souple et efficace, réduisant les erreurs comme <code>OutOfMemoryError: PermGen space</code>.
</p>
`;
