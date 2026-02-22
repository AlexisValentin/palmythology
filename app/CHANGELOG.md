# Notes de version 2.18.0 (22/02/2026)

## Quoi 2 Neuf

- Ajout des sous-titres sur grands écrans.
- Ajustement de styles CSS.
- Ajout d'une mention "Bientôt disponible" pour les prochaines fiches à paraître.

## Les grandes lignes

- Réduction de la taille du carousel sur grands écrans.
- Correction d'un bug qui faisait que les liens Mastodons remontaient avec l'icône Twitch.

## Recherche

- Ajout d'un champ de recherche similaire à celui présent dans la page Godle.
  -Sélectionner l'une des options charge la page de la carte sélectionnée.
- Ajout du `genre` en tant que nouveau critère de recherche.
- Les critères de recherche sont désormais sauvegardés dans l'url.
  - Cela intègre les champs `pantheon`,`subject` et `genre`.
    - Une recherche sur le panthéon "Grec" sur le sujet "Personnage" générera l'url `/search?subject=person&pantheon=greek`.
  - Permet le retour navigateur tout en conservant les critères de recherches précédents.
  - Permet le partage de l'url du navigateur.
  - Permet un référencement de variantes de la page.
- Ajout d'un bouton permettant de réinitialiser les critères de recherche.

## Godle

- Création d'un webhook qui se déclenche chaque jour à minuit heure locale.
  - Affichage de l'entité de la veille.
  - Alerte sur le fait que le Godle vient de se réinitialiser.
- Ajout d'un nouveau champ de recherche à des fins d'indices.
- Changement de couleur vers le jaune pour une cellule sur desktop lorsque le domaine et les attributs correspondent.
- Changement de couleur vers le jaune lorsqu'au moins 3 critères correspondre à l'entité du jour sur mobile.
- Remplacement des points de couleurs par des icônes sur mobile.
- Suppression de la statistique de streak au profit de la moyenne + record de tentatives.
- Mise à jour du texte descriptif en bas de page.

## Divers

- Ajout de templates pour les erreurs HTTP 403, 404, 500.
- Corrections techniques diverses.
- Migration d'infrastructure.
  - Passage de Vercel à Dokploy.
  - Création d'un fichier Dockerfile.
  - Le projet tourne désormais sur une image Docker.
  - Changement de tracker analytics de Plausible vers Rybbit.
- Mise à jour et ajout de documentations.
- Ajout de fichiers de directives Claude.
  - CLAUDE.md pour les directives gloables.
  - AGENTS.md pour les directives spécifiques par agents LLMs.
- Mise à jour des dépendances vers leurs versions de patch (`X.X.0`).
- Mise à jour des dépendances vers leurs versions mineures (`X.0.X`).
- Mise à jour des dépendances vers leurs versions majeures (`0.X.X`).