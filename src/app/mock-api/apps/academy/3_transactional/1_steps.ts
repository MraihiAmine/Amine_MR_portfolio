import { transactionalStepContent0 } from "./2_transactional_steps/0 transactionalStepContent0";
import { transactionalStepContent1 } from "./2_transactional_steps/1 transactionalStepContent1";
import { transactionalStepContent2 } from "./2_transactional_steps/2 transactionalStepContent2";
import { transactionalStepContent3 } from "./2_transactional_steps/3 transactionalStepContent3";
import { transactionalStepContent4 } from "./2_transactional_steps/4 transactionalStepContent4";
import { transactionalStepContent5 } from "./2_transactional_steps/5 transactionalStepContent5";
import { transactionalStepContent6 } from "./2_transactional_steps/6 transactionalStepContent6";
import { transactionalStepContent7 } from "./2_transactional_steps/7 transactionalStepContent7";

export const steps_java_spring_transactional_001 = [
    {
        order: 0,
        title: 'Introduction à la gestion des transactions',
        subtitle: 'Pourquoi gérer les transactions dans une application ?',
        content: `${transactionalStepContent0}`,
    },
    {
        order: 1,
        title: 'Annotation @Transactional : concept et usage',
        subtitle: 'Comprendre ce que fait @Transactional et où l’appliquer',
        content: `${transactionalStepContent1}`,
    },
    {
        order: 2,
        title: 'Propagation des transactions',
        subtitle: 'Les différents types : REQUIRED, REQUIRES_NEW, SUPPORTS, etc.',
        content: `${transactionalStepContent2}`,
    },
    {
        order: 3,
        title: 'Gestion des rollback',
        subtitle: 'Configurer rollbackFor, noRollbackFor et leurs impacts',
        content: `${transactionalStepContent3}`,
    },
    {
        order: 4,
        title: 'Isolation des transactions',
        subtitle: 'Comprendre les niveaux d’isolation et leurs conséquences',
        content: `${transactionalStepContent4}`,
    },
    {
        order: 5,
        title: 'Transactions sur les classes vs méthodes',
        subtitle: 'Quand et pourquoi appliquer @Transactional au niveau de la classe ou méthode',
        content: `${transactionalStepContent5}`,
    },
    {
        order: 6,
        title: 'Limites et pièges courants',
        subtitle: 'Problèmes liés au self-invocation, exceptions non détectées, etc.',
        content: `${transactionalStepContent6}`,
    },
    {
        order: 7,
        title: 'Bonnes pratiques et optimisation',
        subtitle: 'Conseils pour une gestion transactionnelle efficace et sécurisée',
        content: `${transactionalStepContent7}`,
    },
];
