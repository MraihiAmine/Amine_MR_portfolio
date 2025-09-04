export const transactionalStepContent2 = `
<p class="lead">
    La propagation détermine le comportement d’une transaction lorsqu’une méthode transactionnelle en appelle une autre.
</p>

<hr>

<h2>
    Types courants de propagation
</h2>

<ul>
    <li><strong>REQUIRED</strong> : utilise la transaction existante ou en crée une nouvelle.</li>
    <li><strong>REQUIRES_NEW</strong> : suspend la transaction en cours et démarre une nouvelle.</li>
    <li><strong>SUPPORTS</strong> : exécute dans la transaction existante si elle existe, sinon sans transaction.</li>
</ul>

<h3>
    Impact sur les performances et la cohérence
</h3>

<p>
    Choisir la bonne propagation évite les conflits et optimise la gestion des ressources.
</p>
`;
