export const transactionalStepContent3 = `
<p class="lead">
    Par défaut, Spring rollback sur les exceptions RuntimeException et Error, mais pas sur les checked exceptions.
</p>

<hr>

<h2>
    Configurer les rollback
</h2>

<ul>
    <li><code>rollbackFor</code> : spécifier les exceptions qui déclenchent un rollback.</li>
    <li><code>noRollbackFor</code> : exceptions qui ne déclenchent pas de rollback.</li>
</ul>

<h3>
    Exemple
</h3>

<p>
    <code>@Transactional(rollbackFor = IOException.class)</code> permet de rollbacker sur IOException, même si c’est une checked exception.
</p>
`;
