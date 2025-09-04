export const gcStepContent2 = `
<p class="lead">
    Chaque objet Java suit un cycle de vie bien défini depuis sa création jusqu'à sa collecte par le GC.
</p>

<hr>

<h2>
    Étapes du cycle de vie d’un objet
</h2>

<ol>
    <li>Création dans l’Eden Space.</li>
    <li>Promotion dans les Survivor Spaces après un premier GC.</li>
    <li>Transfert vers la Old Generation s’il survit assez longtemps.</li>
    <li>Suppression s’il n’est plus référencé.</li>
</ol>

<h3>
    Astuce
</h3>

<p>
    Les objets à courte durée de vie sont rapidement nettoyés, ce qui rend les GC mineurs très efficaces.
</p>
`;
