export const transactionalStepContent6 = `
<p class="lead">
    Quelques pièges peuvent causer des comportements inattendus avec @Transactional.
</p>

<hr>

<h2>
    Pièges courants
</h2>

<ul>
    <li><strong>Self-invocation</strong> : appel d’une méthode transactionnelle dans la même classe ne déclenche pas la transaction.</li>
    <li>Exceptions attrapées et non propagées ne déclenchent pas de rollback.</li>
    <li>Les checked exceptions ne déclenchent pas de rollback par défaut.</li>
</ul>

<h3>
    Solutions
</h3>

<p>
    Utiliser la propagation correcte, ne pas attraper les exceptions sans les relancer, et configurer rollbackFor si besoin.
</p>
`;
