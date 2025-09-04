export const transactionalStepContent4 = `
<p class="lead">
    L’isolation contrôle la visibilité des modifications faites dans une transaction par rapport aux autres transactions.
</p>

<hr>

<h2>
    Niveaux d’isolation courants
</h2>

<ul>
    <li><strong>READ_UNCOMMITTED</strong> : lire les données non validées (dirty reads).</li>
    <li><strong>READ_COMMITTED</strong> : ne lire que les données validées.</li>
    <li><strong>REPEATABLE_READ</strong> : mêmes données lues plusieurs fois.</li>
    <li><strong>SERIALIZABLE</strong> : isolation la plus stricte, exécution séquentielle.</li>
</ul>

<h3>
    Choix du niveau d’isolation
</h3>

<p>
    Un niveau plus strict augmente la cohérence mais peut réduire la performance.
</p>
`;
