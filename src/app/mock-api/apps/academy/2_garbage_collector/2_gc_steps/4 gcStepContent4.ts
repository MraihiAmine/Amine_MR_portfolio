export const gcStepContent4 = `
<p class="lead">
    La Young Generation est optimisée pour nettoyer rapidement les objets temporaires et réduire les pauses d’exécution.
</p>

<hr>

<h2>
    Composants de la Young Gen
</h2>

<ul>
    <li><strong>Eden</strong> : lieu de naissance des objets.</li>
    <li><strong>Survivor Spaces</strong> : S0 et S1 stockent temporairement les objets survivants.</li>
</ul>

<h3>
    GC mineur
</h3>

<p>
    Lors d’un GC mineur, les objets survivants sont déplacés, et les autres sont supprimés. Ceux qui survivent plusieurs cycles sont promus dans la Old Generation.
</p>
`;
