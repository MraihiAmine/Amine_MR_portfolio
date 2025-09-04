import { securityStepContent0 } from "./1_SECURITy_steps/0 securityStepContent0";
import { securityStepContent1 } from "./1_SECURITy_steps/1 securityStepContent1";
import { securityStepContent2 } from "./1_SECURITy_steps/securityStepContent2";
import { securityStepContent3 } from "./1_SECURITy_steps/securityStepContent3";
import { securityStepContent4 } from "./1_SECURITy_steps/securityStepContent4";
import { securityStepContent5 } from "./1_SECURITy_steps/securityStepContent5";
import { securityStepContent6 } from "./1_SECURITy_steps/securityStepContent6";
import { securityStepContent7 } from "./1_SECURITy_steps/securityStepContent7";

export const steps_security_boot_security_001 = [
    {
        order: 0,
        title: 'Introduction à la sécurité Spring Boot',
        subtitle:
            'Comprendre les enjeux de la sécurité dans une application web',
        content: `${securityStepContent0}`,
    },
    {
        order: 1,
        title: 'Configurer Spring Security',
        subtitle:
            'Mettre en place la configuration de base avec SecurityFilterChain',
        content: `${securityStepContent1}`,
    },
    {
        order: 2,
        title: 'Créer un filtre JWT personnalisé',
        subtitle: 'Intercepter et valider les tokens dans les requêtes HTTP',
        content: `${securityStepContent2}`,
    },
    {
        order: 3,
        title: 'Configurer la chaîne de filtres',
        subtitle: 'Positionner le filtre JWT dans la chaîne Spring Security',
        content: `${securityStepContent3}`,
    },
    {
        order: 4,
        title: 'Générer un token JWT',
        subtitle: 'Créer un service pour signer les tokens à la connexion',
        content: `${securityStepContent4}`,
    },
    {
        order: 5,
        title: 'Valider un token JWT',
        subtitle: 'Lire, décoder et vérifier la validité du token',
        content: `${securityStepContent5}`,
    },
    {
        order: 6,
        title: 'Protéger les endpoints REST',
        subtitle: 'Appliquer les règles d’accès selon les rôles',
        content: `${securityStepContent6}`,
    },
    {
        order: 7,
        title: 'Tester l’authentification JWT',
        subtitle: 'Vérifier le bon fonctionnement avec Postman ou curl',
        content: `${securityStepContent7}`,
    },
];
