# Version 1.1.0 (31/05/2023)

## Recherche

- Sauvegarde désormais les critères de recherche de la session si les deux champs ont été sélectionnés (à la fois le panthéon et le sujet). Fermer l'onglet ou quitter le site réinitialisera les choix qui ont été faits par l'utlisateur.

## Divers

- Mise à jour du `README.md` pour appréhender plus facilement le projet côté développeur.
- Ajout de tests unitaires sur l'ensemble des méthodes du projet via `vitest`.
- Migration de la version `2.2.19` de `tailwindcss` à la version `3.3.2`.
- Certains hooks `useState` ont été migrés vers des hooks `useReducer` afin de mieux gérer les changement d'état de l'application, mais aussi pour rendre les tests plus robustes.
- Amélioration très légère de performance avec l'utilisation des hooks `useCallback` afin d'éviter de solliciter des méthodes susceptibles de renvoyer le même résultat régulièrement.
- Mise à jour de toutes les dépendances du projet (patchs, versions mineures et versions majeures).
- Création d'un nouveau fichier de constantes afin d'éviter toute utilisation de `magic numbers`.
