export const transactionalStepContent1 = `
<p class="lead">
    L’annotation <code>@Transactional</code> est le moyen principal en Spring pour déclarer qu’une méthode ou classe doit être exécutée dans une transaction.
</p>

<hr>

<h2>
    Que fait @Transactional ?
</h2>

<ul>
    <li>Démarre une transaction avant l’exécution de la méthode.</li>
    <li>Valide (commit) la transaction si tout se passe bien.</li>
    <li>Effectue un rollback en cas d’exception non contrôlée.</li>
</ul>

<h3>
    Où l’utiliser ?
</h3>

<p>
    Sur les méthodes de service qui modifient les données ou sur toute la classe si toutes les méthodes doivent être transactionnelles.
</p>
`;
