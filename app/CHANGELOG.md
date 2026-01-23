# Notes de version 2.17.0 (23/01/2026)

## Quoi 2 Neuf

- Ajout d'un texte de teasing pour les prochaines fiches à paraître.

## Landing pages

- Récupération de l'ensemble des contenus relatifs aux pages dédiées des panthéons et des sujets au lieu d'un dataset paramétré via le CMS.
- Intégration de blocs de résumés et d'une section FAQ pour les landings pages dédiées aux panthéons et aux sujets.

## Godle

- Nouvelle section présente dans le site !
  - Chaque jour, une nouvelle entité mythologique est à trouver.
  - Chaque tentative permet de découvrir les indices associées à l'entité du jour.
  - Uniquement les entités liées aux fiches du site sont disponibles.
  - Les résultats affichent les indices liés ou non au résultat attendu.
    - Les cellules sont cliquables et ouvrent un nouvel onglet du site.
  - Un système de partage une fois l'entité trouvée est disponible.
    - Il inclut les statistiques de tentatives, les victoires, le taux de victoire, le nombre de parties jouées...

## Réseaux sociaux

- Threads et Bluesky ne sont plus supportés. Par conséquent, les liens du site sont désactivés.
- Ajout des liens vers Mastodon et Pixelfed.

## SEO

- Correction d'une erreur `avalaibleLanguage` sur la donnée structurée de l'organisation.
- Autorisation du crawl des robots suite à la mise à jour du fichier `robots.txt`.

## Divers

- Remise en place de la popin d'indication de tracking Plausible.
  - Correction d'un bug qui faisait que les boutons n'affichaient plus leur couleur de fond.
- Mise en place des conventions de code dans le dossier dédié à la LLM Claude.
- Mise à jour des dépendances à leurs dernières versions de patch. (X.X.0)
- Mise à jour des dépendances à leurs dernières versions mineures. (X.0.X)
- Mise à jour de TailwindCSS à sa dernière version majeure. (4.0.0)
- Mise à jour des conventions de code.