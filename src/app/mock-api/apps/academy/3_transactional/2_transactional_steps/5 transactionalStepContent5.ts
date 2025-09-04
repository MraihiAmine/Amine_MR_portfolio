export const transactionalStepContent5 = `
<p class="lead">
    L’annotation @Transactional peut être appliquée au niveau de la classe ou de la méthode.
</p>

<hr>

<h2>
    Différences et recommandations
</h2>

<ul>
    <li>Au niveau classe : toutes les méthodes sont transactionnelles.</li>
    <li>Au niveau méthode : plus fin, permet des règles spécifiques.</li>
    <li>Les annotations méthodes surchargent celles de la classe.</li>
</ul>

<h3>
    Bon usage
</h3>

<p>
    Utilisez @Transactional sur les classes quand la majorité des méthodes partagent la même politique transactionnelle.
</p>
`;
