# Notes de version 2.3.0 (20/03/2024)

## Général

- Ajout d'un _favicon_ par défaut qui est affiché sur toutes les pages exceptées les fiches détaillées.
- Ajout d'un _favicon_ dédié au symbole de représentation de la fiche consultée. Il peut être vu dans le nom de l'onglet du navigateur, et remonte également directement en libellé de lien des moteurs de recherche.

## Bas de page

- Ajout d'un filtre de transparence au survol des icônes de réseaux sociaux afin d'avoir un indicateur d'accessibilité.
- Ajout d'un lien sur le numéro de version du site, permettant d'accéder au changelog.
- Suppression des liens d'accès à la page Facebook suite à un problème d'upload multiple depuis Instagram.

## A propos

- Le changelog est maintenant disponible publiquement dans la rubrique _A propos_ !
- Suppression d'informations génériques présentes dans la rubrique depuis la création du site.

## Divers

- Correction d'un bug qui faisait que certaines données d'accès au CMS étaient accessibles depuis le navigateur.
- Suppresion du nom technique `pantheonLandingPage` qui n'est plus utilisé au travers de l'application.
- Mise à jour du `README.md` du projet _Github_.
- Migration et séparation du contenu du `CHANGELOG.md`.
- Mise à jour des librairies suivantes à leur dernières versions :

| Librairie                        | Version précédente | Nouvelles versions |
| -------------------------------- | ------------------ | ------------------ |
| @commitlint/cli                  | ^18.6.1            | ^19.1.0            |
| @commitlint/config-conventional  | ^18.6.0            | ^19.1.0            |
| @storyblok/react                 | ^3.0.8             | ^3.0.9             |
| @types/lodash                    | ^4.14.202          | ^4.17.0            |
| @types/react                     | ^18.2.55           | ^18.2.65           |
| @typescript-eslint/eslint-plugin | ^7.0.1             | ^7.2.0             |
| @typescript-eslint/parser        | ^7.0.1             | ^7.2.0             |
| @vitest/coverage-v8              | ^1.2.2             | ^1.3.1             |
| autoprefixer                     | ^10.4.17           | ^10.4.18           |
| next                             | ^14.1.0            | ^14.1.3            |
| sass                             | ^1.70.0            | ^1.71.1            |
| storyblok-generate-ts            | ^2.0.1             | ^2.0.2             |
| swiper                           | ^11.0.6            | ^11.0.7            |
| typescript                       | ^5.3.3             | ^5.4.2             |
| vitest                           | ^1.2.2             | ^1.3.1             |
