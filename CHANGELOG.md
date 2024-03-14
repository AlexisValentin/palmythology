# Version 2.3.0 (??/03/2024)

## Général

- Ajout d'un _favicon_ par défaut qui est affiché sur toutes les pages exceptées les fiches détaillées.
- Ajout d'un _favicon_ dédié au symbole de représentation de la fiche consultée. Il peut être vu dans le nom de l'onglet du navigateur, et remonte également directement en libellé de lien des moteurs de recherche.

## Footer

- Ajout d'un filtre de transparence au survol des icônes de réseaux sociaux afin d'avoir un indicateur d'accessibilité.

## Divers

- Suppresion du nom technique `pantheonLandingPage` qui n'est plus utilisé au travers de l'application.
- Mise à jour du `README.md` du projet _Github_.
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

---

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

---

# Version 2.1.0 (06/02/2024)

## Réseaux Sociaux

- Suppression de l'accès au réseau social X (désolidarisation).
- Ajout du logo du réseau social `Threads` en tant que lien personnalisé pour la fiche concernée.
- Ajout du logo du réseau social `Threads` dans le footer du site.

## Sujets

- Création d'une nouvelle page concernant les différents sujets abordés au sein de la Palmythology. A l'image de la page Panthéons, cette section permettra de rechercher les fiches les plus populaires selon les thèmes donnés.

## Divers

- Correction d'un problème d'affichage qui faisait que parfois le sous-titre de la rubrique n'était pas alignée avec le reste du titre.
- Génération d'un fichier `sitemap.xml` dynamique pour faciliter l'interaction avec les crawlers Google.
- Mise à jour des copyrights en bas de page du site pour intégrer l'année 2024.
- Ajout de l'utilisation des couleurs intermédiaires pour les gradiants, notamment pour les composants `PageSection`.
- Mise à jour des dépendances à leurs dernières versions :

  | Librairie                        | Version précédente | Nouvelles versions |
  | -------------------------------- | ------------------ | ------------------ |
  | @commitlint/cli                  | ^18.4.3            | ^18.6.0            |
  | @commitlint/config-conventional  | ^18.4.3            | ^18.6.0            |
  | @storyblok/react                 | ^3.0.0             | ^3.0.8             |
  | @types/jest                      | ^29.5.11           | ^29.5.12           |
  | @types/react                     | ^18.2.45           | ^18.2.48           |
  | @typescript-eslint/eslint-plugin | ^6.15.0            | ^6.21.0            |
  | @typescript-eslint/parser        | ^6.15.0            | ^6.21.0            |
  | @vitest/coverage-v8              | ^1.1.0             | ^1.2.2             |
  | autoprefixer                     | ^10.4.16           | ^10.4.17           |
  | axios                            | ^1.6.2             | ^1.6.7             |
  | husky                            | ^8.0.3             | ^9.0.10            |
  | postcss                          | ^8.4.32            | ^8.4.34            |
  | prettier                         | ^3.1.1             | ^3.2.5             |
  | sass                             | ^1.69.5            | ^1.70.0            |
  | sharp                            | ^0.33.1            | ^0.33.2            |
  | swiper                           | ^11.0.5            | ^11.0.6            |
  | tailwindcss                      | ^3.3.7             | ^3.4.1             |
  | vitest                           | ^1.1.0             | ^1.2.2             |
  | web-vitals                       | ^3.5.0             | ^3.5.2             |

---

# Version 2.0.1 (19/12/2023)

## Divers

- Correction d'un problème d'affichage des icônes en mode mobile sur le menu principal.
- Mise à jour de la version de `NextJS` à la dernière connue (`v14.0.4`).
- Mise à jour des dépendences à leurs dernières versions.
- Mise à jour du `sitemap.xml` du site web.

---

# Version 2.0.0 (06/12/2023)

## Général

- Intégration du framework NextJS.
- Support du rendu côté serveur, ce qui va grandement réduire le temps de chargement lors de l'accès à chaque page, et augmenter le référencement naturel grâce au pré-chargement du HTML et au pre-fecthing des données en amont.
- Suppression de la section `Actualités` qui n'était que très peu maintenue.

## Divers

- Installation de la dépendance `sharp` pour optimiser les performances lors de l'utilisation des images.

---

# Version 1.6.3 (28/11/2023)

## Divers

- Correction d'un problème qui faisait que le nouveau fichier `sitemap.xml` n'était pas consultable depuis le répértoire `public`.

---

# Version 1.6.2 (27/11/2023)

## Divers

- Ajout d'un fichier `sitemap.xml` afin d'orienter les crawlers vers les pages à suivre.
- Mise à jour des dépendances du projet vers leurs dernières versions.
- Mise en place de `commitlint` afin de se conformiser aux nommages des commits.
- Mise en place du hook git `commit-msg` dans le but de lancer les tests unitaires pour valider le code à pousser.

---

# Version 1.6.1 (09/11/2023)

## Divers

- Amélioration du référencement naturel en autorisant l'accès aux navigateurs dépourvus de javascript.
- Mise à jour des dépendances du projet vers leurs dernières versions.

---

# Version 1.6.0 (29/10/2023)

## Général

- Les couleurs et icônes des rubriques de la page d'accueil ont été modifiées afin de mieux harmoniser l'ensemble visuel.
- Création d'une nouvelle rubrique "Panthéons" qui a pour but 1er de faciliter le référencement naturel du site, mais également d'orienter l'utilisateur quant aux différents contenus disponibles concernant certains panthéons bien précis.
- La rubrique "Quoi 2 Neuf ?" est désormais accessible directement depuis la page d'accueil.
- La rubrique "Dossiers" n'est désormais plus accessible.
- Les fiches au formats "Qu'est-ce que ça fiche ?" ne sont désormais plus accessibles sur le site web.

## Les grandes lignes

- La suggestion de fiches en lien avec celle actuellement consultée est à nouveau disponible sur écrans mobiles !
- Le style des blocs de résumé a été modifié pour avoir des bordures rondes et une légère ombre projetée.
- Correction d'un bug qui faisait que le bloc de recommandations de fiches similaires cassait l'aspect responsive sur les pages à au moins 3 recommandations.

---

# Version 1.5.1 (12/10/2023)

## Général

- Ajout d'un lien vers Tipeee pour pouvoir contribuer à la Palmythology en faisant une donation !
- Augmentation globale de la hauteur du footer.
- Ajout du numéro de version du site dans le footer.
- Le footer du site ne s'affiche désormais plus en permanence sur l'écran mais reste toujours au plus bas de la page actuelle.

## Recherche

- La page de recherche affiche désormais le nombre de résultats retournés.

## Divers

- Modification des balises SEO de certaines pages afin d'améliorer le référencement naturel du site.
- Suppression de la librairies de logs d'erreur Sentry.
- Mise à jour des dépendances du projets à leurs dernières versions.

---

# Version 1.5.0 (09/10/2023)

## Général

- Ajout du panthéon Mésopotamien.

## Recherche

- L'état de la recherche précédente n'est désormais plus sauvegardée dans le navigateur, notamment à cause des soucis que cela pouvait engendre si l'un des champs n'avais pas été remplis précédement.
- En contrepartie, consulter une fiche depuis les réultats de recherche ouvre un nouvel onglet afin de pouvoir retrouver rapidement le précédent filtre appliqué.

## Les grandes lignes

- Ajout d'un délai d'affichage d'une erreur HTTP 404 lors du chargement d'une fiche, afin d'éviter un sursaut à l'écran et un message d'erreur erroné.
- Ajout d'une page d'erreur HTTP 403 (Forbidden) se déclenchant lorsque l'utilisateur tente d'accéder à une fiche existante mais qui n'est pas encore accessible (la fiche remonte dans les résultats de recherche mais le lien d'accès ne peut pas être cliqué).

## Divers

- Changement du message d'erreur des requêtes HTTP échouant en 404 de `Oops, on dirait que cette page n'existe pas...` en `On dirait qu'il y a comme un couac !`.
- Ajout d'un sous-titre pour l'entête de page lors des requêtes HTTP échouant en 404 : `La page demandée est introuvable`.
- Suppression de la bordure du logo de la Palmythology dans le menu en haut de page.
- Correction d'erreurs dans la console Chrome.

---

# Version 1.4.0 (26/09/2023)

## Les grandes lignes

- La page revient désormais en position haute lorsqu'elle est chargée depuis un lien d'un bloc de recommendation d'une autre fiche.
- Les recommandations d'autres fiches s'alignent désormais en ligne plutôt qu'en colonne.
- Les recommandations d'autres fiches sont temporairement indisponibles sur mobile en mode portrait.

## Divers

- Changement du logo de Twitter pour celui de X (le lien vers le réseau social reste identique).
- Ajustement de l'ensemble des tailles des images du site à des fins de performances d'affichage.
- Mise à jour de la totalité des dépendances du projets.

---

# Version 1.3.1 (04/08/2023)

## Recherche

- Correction d'un bug qui empêchait de visualiser et consulter l'ensemble de toutes les fiches disponibles.

## Divers

- Mise à jour de la quasi-totalité des dépendances du projets (excepté `typescript`).

---

# Version 1.3.0 (01/08/2023)

## Actualités

- Réduction légère de la taille des icônes à proximité des blocs de texte.

## Quoi 2 Neuf

- La couleur principale du panthéon japonais a été légérement foncée.
- Suppression de la projection ombrée interne aux éléments au profit d'une bordure nette et lisible en accord avec le panthéon.
- Correction d'un bug visuel qui faisait que les éléments se collaient sur les écrans mobiles et tablettes.

## Recherche

- La couleur principale du panthéon japonais a été légérement foncée.

## Les grandes lignes

- Ajout d'une nouvelle section "Dans le même sujet" qui permet d'accèder directement aux autres fiches en lien avec celle actuellement consultée.
- Correction d'un bug visuels qui faisait que la section "Disponible sur" n'était pas centré et laissait apparaître un espace en fin de ligne.

## Divers

- Suppression des annotations `// @ts-ignore` afin de renforcer la robustesse du code.
- Ajout de tests unitaires dans le but de renforcer la robustesse du code.

---

# Version 1.2.0 (30/06/2023)

## Les grandes lignes

- Ajout des liens/icônes vers le ou les réseaux sociaux où la fiche est également disponible.
- Le resumé des fiches "Les grandes lignes" possède désormais une largeur équivalente à celle du carrousel situé en-dessous.
- Le résumé ne s'affiche que les écrans d'une largeur minimale de 1280 pixels.

## Quoi 2 Neuf

- Les fiches "Qu'est-ce que ça fiche ?" sont désormais affichées parmi les autres sujets de la page "Quoi 2 neuf ?" pour le mois en cours.

## Correction de bugs

- Correction d'un bug en production qui déclenchait une erreur lorsque l'utilisateur rafraîchissait une page en dehors de la page d'accueil.

## SEO

- Création d'un module statique afin d'améliorer le référencement du site, notamment en rajoutant des balises `title` et `meta` dans les différentes pages du site web.

## Divers

- Ajout de la license `GNU General Public License v3.0`.
- Migration de certains fichiers `javascript` en `typescript`.
- Mise à jour de dépendences vers des versions plus récentes :
  - Renommage de la dépendance `coverage-c8` en `coverage-v8`.

---

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

---

# Version 1.0.1 (22/05/2023)

## Divers

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
