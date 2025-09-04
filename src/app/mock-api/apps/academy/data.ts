import { demoCourseContentCollegue } from './demoCourseContent';
import { demoCourseContentIntegrationCollegue } from './demoCourseContentIntegrationCollegue';
import { demoCourseContentManquementCollegue } from './demoCourseContentManquementCollegue';
import { securityStepContent0 } from './1_security/1_SECURITy_steps/0 securityStepContent0';
import { securityStepContent1 } from './1_security/1_SECURITy_steps/1 securityStepContent1';
import { securityStepContent2 } from './1_security/1_SECURITy_steps/securityStepContent2';
import { securityStepContent3 } from './1_security/1_SECURITy_steps/securityStepContent3';
import { securityStepContent4 } from './1_security/1_SECURITy_steps/securityStepContent4';
import { securityStepContent5 } from './1_security/1_SECURITy_steps/securityStepContent5';
import { securityStepContent6 } from './1_security/1_SECURITy_steps/securityStepContent6';
import { securityStepContent7 } from './1_security/1_SECURITy_steps/securityStepContent7';
import { securityCourseContent } from './securityCourseContent';

/* eslint-disable */
export const categories = [
    {
        id: '9a67dff7-3c38-4052-a335-0cef93438ff6',
        title: 'Web',
        slug: 'web',
    },
    {
        id: 'a89672f5-e00d-4be4-9194-cb9d29f82165',
        title: 'Firebase',
        slug: 'firebase',
    },
    {
        id: '02f42092-bb23-4552-9ddb-cfdcc235d48f',
        title: 'Cloud',
        slug: 'cloud',
    },
    {
        id: '5648a630-979f-4403-8c41-fc9790dea8cd',
        title: 'Android',
        slug: 'android',
    },
    {
        id: '5648a630-979f-4403-8c41-fc9790dea8cd',
        title: 'Spring Boot',
        slug: 'Spring-Boot',
    },
];
export const courses = [
    {
        id: 'security_boot_security_001',
        title: 'Sécurité avec Spring Boot',
        slug: 'securite-spring-boot',
        description:
            'Ce module couvre les fondamentaux de la sécurité dans les applications Spring Boot : authentification, autorisation, sécurité des endpoints REST, configuration de Spring Security, gestion des rôles et des utilisateurs.',
        category: 'Spring Boot',
        duration: 60,
        totalSteps: 8,
        updatedAt: 'Jul 2, 2025',
        featured: true,
        progress: {
            currentStep: 1,
            completed: 0,
        },
    },
    {
        id: 'GC_001',
        title: 'Gestion de la mémoire et Garbage Collector en Java',
        slug: 'garbage-collector-java',
        description:
            'Ce module explore en détail le fonctionnement du Garbage Collector en Java. Il couvre la structure de la mémoire (Young Generation, Old Generation, Metaspace), les étapes du GC (marquage, balayage, compactage), ainsi que les différents types de collecteurs (Serial, Parallel, G1, Shenandoah).',
        category: 'Java',
        duration: 75,
        totalSteps: 9,
        updatedAt: 'Jul 12, 2025',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'java_spring_transactional_001',
        title: 'Gestion des Transactions avec @Transactional en Spring',
        slug: 'transactional-spring-java',
        description:
            'Ce module présente l’annotation @Transactional dans Spring, son fonctionnement, ses types de propagation, gestion des rollback, isolation, et bonnes pratiques pour assurer la cohérence des données.',
        category: 'Spring / Java',
        duration: 70,
        totalSteps: 8,
        updatedAt: 'Jul 14, 2025',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
        title: 'Compétences comportementales',
        slug: 'soft-skills-au-travail',
        description:
            'Ce module présente les compétences clés pour bien réagir aux situations professionnelles : gestion des conflits, adaptation, communication constructive.',
        category: 'developpement-personnel',
        duration: 45,
        totalSteps: 6,
        updatedAt: 'Jun 28, 2025',
        featured: true,
        progress: {
            currentStep: 1,
            completed: 0,
        },
    },
    {
        id: 'f924007a-2ee9-470b-a316-8d21ed78277f',
        title: 'Basics of TypeScript',
        slug: 'basics-of-typeScript',
        description: 'Beginner course for Typescript and its basics',
        category: 'web',
        duration: 60,
        totalSteps: 11,
        updatedAt: 'Nov 01, 2021',
        featured: true,
        progress: {
            currentStep: 5,
            completed: 3,
        },
    },
    {
        id: '0c06e980-abb5-4ba7-ab65-99a228cab36b',
        title: 'Android N: Quick Settings',
        slug: 'android-n-quick-settings',
        description: 'Step by step guide for Android N: Quick Settings',
        category: 'android',
        duration: 120,
        totalSteps: 11,
        updatedAt: 'May 08, 2021',
        featured: false,
        progress: {
            currentStep: 10,
            completed: 1,
        },
    },
    {
        id: '1b9a9acc-9a36-403e-a1e7-b11780179e38',
        title: 'Build an App for the Google Assistant with Firebase',
        slug: 'build-an-app-for-the-google-assistant-with-firebase',
        description: 'Dive deep into Google Assistant apps using Firebase',
        category: 'firebase',
        duration: 30,
        totalSteps: 11,
        updatedAt: 'Jan 09, 2021',
        featured: false,
        progress: {
            currentStep: 4,
            completed: 3,
        },
    },
    {
        id: '55eb415f-3f4e-4853-a22b-f0ae91331169',
        title: 'Keep Sensitive Data Safe and Private',
        slug: 'keep-sensitive-data-safe-and-private',
        description: 'Learn how to keep your important data safe and private',
        category: 'android',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'Jan 14, 2021',
        featured: false,
        progress: {
            currentStep: 6,
            completed: 0,
        },
    },
    {
        id: 'fad2ab23-1011-4028-9a54-e52179ac4a50',
        title: "Manage Your Pivotal Cloud Foundry App's Using Apigee Edge",
        slug: 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
        description: 'Introductory course for Pivotal Cloud Foundry App',
        category: 'cloud',
        duration: 90,
        totalSteps: 11,
        updatedAt: 'Jun 24, 2021',
        featured: false,
        progress: {
            currentStep: 6,
            completed: 0,
        },
    },
    {
        id: 'c4bc107b-edc4-47a7-a7a8-4fb09732e794',
        title: 'Build a PWA Using Workbox',
        slug: 'build-a-pwa-using-workbox',
        description: 'Step by step guide for building a PWA using Workbox',
        category: 'web',
        duration: 120,
        totalSteps: 11,
        updatedAt: 'Nov 19, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '1449f945-d032-460d-98e3-406565a22293',
        title: 'Cloud Functions for Firebase',
        slug: 'cloud-functions-for-firebase',
        description: 'Beginners guide of Firebase Cloud Functions',
        category: 'firebase',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'Jul 11, 2021',
        featured: false,
        progress: {
            currentStep: 3,
            completed: 1,
        },
    },
    {
        id: 'f05e08ab-f3e3-4597-a032-6a4b69816f24',
        title: 'Building a gRPC Service with Java',
        slug: 'building-a-grpc-service-with-java',
        description: 'Learn more about building a gRPC Service with Java',
        category: 'cloud',
        duration: 30,
        totalSteps: 11,
        updatedAt: 'Mar 13, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 1,
        },
    },
    {
        id: '181728f4-87c8-45c5-b9cc-92265bcd2f4d',
        title: 'Looking at Campaign Finance with BigQuery',
        slug: 'looking-at-campaign-finance-with-bigquery',
        description: 'Dive deep into BigQuery: Campaign Finance',
        category: 'cloud',
        duration: 60,
        totalSteps: 11,
        updatedAt: 'Nov 01, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'fcbfedbf-6187-4b3b-89d3-1a7cb4e11616',
        title: 'Personalize Your iOS App with Firebase User Management',
        slug: 'personalize-your-ios-app-with-firebase-user-management',
        description:
            'Dive deep into User Management on iOS apps using Firebase',
        category: 'firebase',
        duration: 90,
        totalSteps: 11,
        updatedAt: 'Aug 08, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '5213f6a1-1dd7-4b1d-b6e9-ffb7af534f28',
        title: 'Customize Network Topology with Subnetworks',
        slug: 'customize-network-topology-with-subnetworks',
        description: 'Dive deep into Network Topology with Subnetworks',
        category: 'web',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'May 12, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '02992ac9-d1a3-4167-b70e-8a1d5b5ba253',
        title: 'Building Beautiful UIs with Flutter',
        slug: 'building-beautiful-uis-with-flutter',
        description:
            "Dive deep into Flutter's hidden secrets for creating beautiful UIs",
        category: 'web',
        duration: 90,
        totalSteps: 11,
        updatedAt: 'Sep 18, 2021',
        featured: false,
        progress: {
            currentStep: 8,
            completed: 2,
        },
    },
    {
        id: '2139512f-41fb-4a4a-841a-0b4ac034f9b4',
        title: 'Firebase Android',
        slug: 'firebase-android',
        description: 'Beginners guide of Firebase for Android',
        category: 'android',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'Apr 24, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '65e0a0e0-d8c0-4117-a3cb-eb74f8e28809',
        title: 'Simulating a Thread Network Using OpenThread',
        slug: 'simulating-a-thread-network-using-openthread',
        description:
            'Introductory course for OpenThread and Simulating a Thread Network',
        category: 'web',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'Jun 05, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'c202ebc9-9be3-433a-9d38-7003b3ed7b7a',
        title: 'Your First Progressive Web App',
        slug: 'your-first-progressive-web-app',
        description: 'Step by step guide for creating a PWA from scratch',
        category: 'web',
        duration: 30,
        totalSteps: 11,
        updatedAt: 'Oct 14, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: '980ae7da-9f77-4e30-aa98-1b1ea594e775',
        title: 'Launch Cloud Datalab',
        slug: 'launch-cloud-datalab',
        description: 'From start to finish: Launch Cloud Datalab',
        category: 'cloud',
        duration: 60,
        totalSteps: 11,
        updatedAt: 'Dec 16, 2021',
        featured: false,
        progress: {
            currentStep: 0,
            completed: 0,
        },
    },
    {
        id: 'c9748ea9-4117-492c-bdb2-55085b515978',
        title: 'Cloud Firestore',
        slug: 'cloud-firestore',
        description: 'Step by step guide for setting up Cloud Firestore',
        category: 'firebase',
        duration: 90,
        totalSteps: 11,
        updatedAt: 'Apr 04, 2021',
        featured: false,
        progress: {
            currentStep: 2,
            completed: 0,
        },
    },
];
export const securityStepsContent = `
<p class="lead">
    Les compétences comportementales, ou soft skills, sont essentielles dans le monde professionnel. Elles permettent de mieux gérer les situations complexes, de favoriser une bonne entente au sein des équipes, et d’évoluer sereinement dans son environnement de travail.
</p>

<blockquote>
    <p>
        “Les compétences techniques vous font obtenir le poste, mais ce sont les compétences comportementales qui vous permettent de le garder.” — Anonyme
    </p>
</blockquote>

<hr>

<h2>
    Gérer les situations difficiles avec calme
</h2>

<ol>
    <li>Analyser objectivement le problème avant d’agir.</li>
    <li>Identifier les personnes concernées et dialoguer calmement.</li>
    <li>Proposer des solutions et les mettre en œuvre.</li>
</ol>

<h3>
    Privilégier la communication bienveillante
</h3>

<blockquote>
    <p>Une bonne communication permet souvent d’éviter les conflits. Écouter avant de juger, poser des questions, chercher des solutions communes sont des réflexes à adopter.</p>
</blockquote>

<p>
    Voici quelques réflexes à adopter face à une difficulté :
</p>

<figure>
    <video controls width="640">
        <source src="assets/videos/1_competences_relationnelles/1_conlit_avec_collegue.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
    </video>

    <figcaption>
        L’écoute active et l’empathie : deux piliers de la communication professionnelle.
    </figcaption>
</figure>

<ul>
    <li>Faire preuve d’écoute et de compréhension.</li>
    <li>Éviter les jugements hâtifs.</li>
    <li>Rechercher une solution mutuellement bénéfique.</li>
</ul>

<h2>
    Favoriser l’intégration de nouveaux collègues
</h2>

<h3>
    Accueillir, accompagner, rassurer
</h3>

<p>
    L’intégration ne se résume pas à une visite rapide des locaux. Elle implique un accompagnement humain et professionnel sur plusieurs jours, voire semaines.
</p>

<ul>
    <li>
        <p><strong>Créer du lien dès le premier jour.</strong></p>
    </li>
    <li>
        <p><strong>Présenter les outils, méthodes de travail et rituels d’équipe.</strong></p>
    </li>
    <li>
        <p><strong>Faire des points réguliers pour ajuster si nécessaire.</strong></p>
    </li>
</ul>

<p>
    Un onboarding réussi favorise la motivation et la productivité.
</p>

<h2>
    Réagir face à l’inconnu
</h2>

<p>
    Ne pas savoir faire une tâche n’est pas un échec. C’est une opportunité d’apprentissage. Il est important de :
</p>

<ol>
    <li>Clarifier la tâche demandée.</li>
    <li>Rechercher des ressources : documentation, tutoriels, collègues.</li>
    <li>Demander de l’aide en cas de blocage.</li>
</ol>

<h2>
    Table de synthèse des comportements clés
</h2>

<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Situation</th>
            <th>Comportement attendu</th>
            <th>Impact positif</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Problème ou conflit</td>
            <td>Garder son calme, dialoguer</td>
            <td>Réduction des tensions</td>
        </tr>
        <tr>
            <td>Nouveau collègue</td>
            <td>Accueillir, guider</td>
            <td>Intégration rapide</td>
        </tr>
        <tr>
            <td>Tâche inconnue</td>
            <td>Être curieux, demander de l’aide</td>
            <td>Montée en compétences</td>
        </tr>
    </tbody>
</table>

<h3>
    Pour aller plus loin
</h3>

<p>
    Développer ses soft skills demande du temps et de la pratique. La régularité, l’ouverture d’esprit et les retours constructifs sont vos meilleurs alliés dans ce cheminement professionnel.
</p>
`;
