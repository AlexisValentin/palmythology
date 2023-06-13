# Version 1.2.0 (??/??/2023)

## Quoi 2 Neuf

- Les fiches "Qu'est-ce que ça fiche ?" sont désormais affichées parmi les autres sujets de la page "Quoi 2 neuf ?" pour le mois en cours.

## Sécurité

- Ajout de la license `GNU General Public License v3.0`.

## Tech

- Migration de certains fichiers `javascript` en `typescript`.
- Mise à jour de dépendences vers leurs dernières versions disponibles.

---

# Version 1.1.0 (31/05/2023)

## Recherche

- Sauvegarde désormais les critères de recherche de la session si les deux champs ont été sélectionnés (à la fois le panthéon et le sujet). Fermer l'onglet ou quitter le site réinitialisera les choix qui ont été faits par l'utlisateur.

## Tech

- Mise à jour du `README.md` pour appréhender plus facilement le projet côté développeur.
- Ajout de tests unitaires sur l'ensemble des méthodes du projet via `vitest`.
- Migration de la version `2.2.19` de `tailwindcss` à la version `3.3.2`.
- Certains hooks `useState` ont été migrés vers des hooks `useReducer` afin de mieux gérer les changement d'état de l'application, mais aussi pour rendre les tests plus robustes.
- Amélioration très légère de performance avec l'utilisation des hooks `useCallback` afin d'éviter de solliciter des méthodes susceptibles de renvoyer le même résultat régulièrement.
- Mise à jour de toutes les dépendances du projet (patchs, versions mineures et versions majeures).
- Création d'un nouveau fichier de constantes afin d'éviter toute utilisation de `magic numbers`.

---

# Version 1.0.1 (22/05/2023)

## Rendu visuel

- Correction d'un bug qui faisait que le menu s'affichait en une seule colonne au lieu de ne s'afficher qu'en une seule ligne.
- Correction d'un bug qui faisait que les couleurs prédéfinies de `tailwindcss` ne s'affichaient plus.

---

# Version 1.0.0 (22/05/2023)

Le site web officiel de la Palmythology est enfin disponible ! Retrouvez les notes de versions et les changements importants dans ce fichier, pour vous tenir au courant des nouvelles fonctionnalités mais également des corrections de bugs, des changements techniques et différentes informations.

## Page d'accueil

- Les différentes sections sont désormais accessibles via 4 blocs de liens donnant un accès direct aux différentes rubriques du site (Actualités, Dossiers, Recherche, A propos).

## Menu

- Le menu est sitcky en haut de la page et est présent sur toutes les pages du site.
- Les différentes sections sont désormais accessibles via 4 blocs de liens donnant un accès direct aux différentes rubriques du site (Actualités, Dossiers, Recherche, A propos).
- Les blocs de liens s'adaptent correctement à l'affichage sur écran mobile, privilégiant des simples icônes en relation avec les rubriques plutôt que du contenu textuel.

## Footer

- Le footer est sitcky et est présent sur toutes les pages du site.
- Les copyrights propres à la Palmythology sont précisés dans l'encart à gauche.
- Les liens d'icônes des réseaux sociaux sur lesquels la Palmythology sont disponibles dans l'encart à droite.

## Actualités

- Les différentes actualités de la Palmythology sont désormais disponibles dans la rubrique `Actualités`.
- Les différents contenus de cette rubrique sont pour le moment exclusifs au site web.

## Dossiers

- La rubrique `Dossiers` regroupe à la fois les futures fiches disponibles dans le bloc `Quoi 2 Neuf` et les différentes fiches `Qu'est-ce que ça fiche ?` qui sont différenciées des différentes fiches classiques.
- La rubrique `Quoi 2 Neuf` ne regroupe pour l'instant que les formats classiques et non les formats `Qu'est-ce que ça fiche ?`.

## Recherche

- Les fiches au format classique peuvent désormais être filtrées à la fois par panthéons mais aussi par sujets.
- Les fiches au format `Qu'est-ce que ça fiche ?` ne sont pas disponibles à la recherche pour le moment.
- Le contenu des résultats de recherche sera progressivement enrichi au cours des prochaines semaines.
- Les fiches sont accessibles via l'icône sur la droite de la ligne.
- Les fiches peuvent parfois devenir temporairement indisponibles, remplaçant l'icône sur la droite par une croix.

## A propos

- Le contenu de la rubrique `A propos` résume les informations diverses concernant la Pammythology, son site et son créateur.
- Le contenu peut être mis à jour indépendamment de nouvelles versions du site.
