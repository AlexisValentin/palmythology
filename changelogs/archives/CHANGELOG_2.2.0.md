# Version 2.2.0 (14/02/2024)

## Panthéons

- Ajout du panthéon mésopotamien dans la section des `Panthéons`.

## Recherche

- Mise à jour de la représentation des résultats de recherche, afin de coller avec direction artistique de la Palmythology.
- Correction d'un bug qui faisait que le changement de filtre ne faisait pas rebasculer l'utilisateur sur la 1ère page des résultats de recherche.
- Correction d'un bug visuel qui faisait que le sous-titre et parfois même le titre étaient légérement tronqués.

## Accessibilité

- Mise à jour du menu principal qui reste désormais en haut de l'écran, peu importe où l'utilisateur se situe dans la page.
- Ajout d'un fond gris en surbrillance des éléments du menu principale pour facilité l'accessibilité du site.
- Correction de l'élément de sous-titre de la page qui faisait que les liseuses ne pouvaient pas assimiler la hiérarchie HTML correctement.
- Correction de couleurs de constraste pour certaines mythologies, annotées comme étant peu lisible pour des utilisateurs malvoyants :

  | Panthéons  | Contraste précédent      | Nouveau contraste        |
  | ---------- | ------------------------ | ------------------------ |
  | Aztèque    | orange-600 / neutral-100 | orange-700 / neutral-100 |
  | Egyptien   | amber-500 / neutral-100  | amber-400 / neutral-900  |
  | Hindou     | amber-600 / emerald-600  | amber-500 / emerald-900  |
  | Japonais   | neutral-300 / red-700    | neutral-300 / red-800    |
  | Scandinave | sky-300 / neutral-100    | sky-500 / neutral-100    |

## Divers

- Changement du sous-titre de la page d'accueil en de "Bienvenue sur le site de la Palmythologie" en "L'encyclopédie mythologique".
- Relocalisation des certains fichiers dans un domaine nommé `search`.
- Mise à jour des dépendances à leurs dernières versions :

  | Librairie                        | Version précédente | Nouvelles versions |
  | -------------------------------- | ------------------ | ------------------ |
  | @commitlint/cli                  | ^18.6.0            | ^18.6.1            |
  | @commitlint/config-conventional  | ^18.6.0            | ^18.6.2            |
  | @typescript-eslint/eslint-plugin | ^6.21.0            | ^7.0.1             |
  | @typescript-eslint/parser        | ^6.21.0            | ^7.0.1             |
  | husky                            | ^9.0.10            | ^9.0.11            |
  | postcss                          | ^8.4.34            | ^8.4.35            |
