# Notes de version 2.5.0 (06/08/2024)

## Général

- Mise en place de Plausible.io, dans le but de traquer des informations de navigation sur le site web. Uniquement dans un cadre d'anonymat, Plausible ne traque par les informations personnelles des utilisateur mais uniquement leur `user-agent` (quel navigateur unique est utilisé) et les comportements de navigation (quelles sont les pages les plus utilisées...).
- Nouvelle popup s'affichant afin d'informer l'utilisateur de la nouvelle politique de récolte des données.
- Création d'un breadcrumb sur tous les bas de page sauf l'accueil. Les liens sont tous cliquables sauf la page sur laquelle l'utilisateur est actuellement situé.

## Les grandes lignes

- Mise en place d'une redirection vers la page du panthéon dans l'adresse web (`/cards/pantheon`) dans le cas où l'url ne contiendrait pas le nom de la fiche.
- Mise en place d'une page intermédiaire `/cards` explicative sur l'utilisation et la compréhense des fiches "Les grandes lignes".
- Ajout du sujet "Evenements" avec son icône et sa propre page dédiée.

## A propos

- Mise à jour des informations concernant la récolte des données de manière anonyme suite à l'intégration de Plausible.

## Divers

- Mise à jour des librairies suivantes à leur dernières versions :

  | Librairie                        | Version précédente | Nouvelle version |
  | -------------------------------- | ------------------ | ---------------- |
  | @typescript-eslint/eslint-plugin | ^7.14.1            | ^7.15.1          |
  | @typescript-eslint/parser        | ^7.14.1            | ^7.15.1          |
  | postcss                          | ^8.4.38            | ^8.4.39          |
  | typescript                       | ^5.5.2             | ^5.5.3           |
  | web-vitals                       | ^4.2.0             | ^4.2.1           |
