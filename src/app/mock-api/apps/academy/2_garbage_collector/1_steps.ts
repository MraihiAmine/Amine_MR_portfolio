import { gcStepContent0 } from "./2_gc_steps/0 gcStepContent0";
import { gcStepContent1 } from "./2_gc_steps/1 gcStepContent1";
import { gcStepContent2 } from "./2_gc_steps/2 gcStepContent2";
import { gcStepContent3 } from "./2_gc_steps/3 gcStepContent3";
import { gcStepContent4 } from "./2_gc_steps/4 gcStepContent4";
import { gcStepContent5 } from "./2_gc_steps/5 gcStepContent5";
import { gcStepContent6 } from "./2_gc_steps/6 gcStepContent6";
import { gcStepContent7 } from "./2_gc_steps/7 gcStepContent7";
import { gcStepContent8 } from "./2_gc_steps/8 gcStepContent8";

export const steps_java_gc_memory_001 = [
    {
        order: 0,
        title: 'Introduction au Garbage Collector',
        subtitle: 'Pourquoi Java a besoin d’un GC et comment il fonctionne en général',
        content: `${gcStepContent0}`,
    },
    {
        order: 1,
        title: 'Structure de la mémoire Java',
        subtitle: 'Découvrir les différentes zones : Young, Old, Metaspace',
        content: `${gcStepContent1}`,
    },
    {
        order: 2,
        title: 'Cycle de vie d’un objet Java',
        subtitle: 'Comprendre la création, la promotion et la suppression des objets',
        content: `${gcStepContent2}`,
    },
    {
        order: 3,
        title: 'Le processus de collecte',
        subtitle: 'Étapes : marquage, balayage et compactage',
        content: `${gcStepContent3}`,
    },
    {
        order: 4,
        title: 'Young Generation et Survivor Spaces',
        subtitle: 'Fonctionnement de l’Eden Space et promotion dans Old Gen',
        content: `${gcStepContent4}`,
    },
    {
        order: 5,
        title: 'Old Generation et Full GC',
        subtitle: 'Quand et comment les objets sont déplacés et nettoyés',
        content: `${gcStepContent5}`,
    },
    {
        order: 6,
        title: 'Metaspace (ex PermGen)',
        subtitle: 'Stockage des métadonnées de classes et évolution depuis Java 8',
        content: `${gcStepContent6}`,
    },
    {
        order: 7,
        title: 'Types de collecteurs Java',
        subtitle: 'Comparer Serial, Parallel, G1, ZGC et Shenandoah',
        content: `${gcStepContent7}`,
    },
    {
        order: 8,
        title: 'Bonnes pratiques et tuning GC',
        subtitle: 'Optimiser les performances mémoire avec les bons paramètres',
        content: `${gcStepContent8}`,
    },
];
