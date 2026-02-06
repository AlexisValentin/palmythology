# Notes de version 2.18.0 (15/02/2026)

## Recherche

- Ajout du `genre` en tant que nouveau critère de recherche.
- Les critères de recherche sont désormais sauvegardés dans l'url.
  - Cela intègre les champs `pantheon`,`subject` et `genre`.
    - Une recherche sur le panthéon "Grec" sur le sujet "Personnage" générera l'url `/search?subject=person&pantheon=greek`.
  - Permet le retour navigateur tout en conservant les critères de recherches précédents.
  - Permet le partage de l'url du navigateur.
  - Permet un référencement de variantes de la page.

## Godle

- Création d'un webhook qui se déclenche chaque jour à minuit heure locale.
  - Affichage de l'entité de la veille.
  - Alerte sur le fait que le Godle vient de se réinitialiser.

## Divers

- Mise à jour des dépendances vers leurs versions de patch (`X.X.0`).
- Mise à jour des dépendances vers leurs versions mineures (`X.0.X`).
- Mise à jour des dépendances vers leurs versions majeures (`0.X.X`).