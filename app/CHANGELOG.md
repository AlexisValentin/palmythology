# Notes de version 2.15.0 (??/10/2025)

# Général

- Mise à jour de Next JS vers la version majeure 16.0.0.
- Mise en place d'un système de cache lors des appels effectués vers le CMS. Les expirations de cache respectent les règles suivantes:
  - Les fiches "Les Grandes Lignes" sont cachées pendant 24 heures.
  - La liste des panthéons est cachée pendant 7 jours.
  - La liste des sujets est cachée pendant 7 jours.
  - Les résultats de la fonctionnalité de recherche sont cachés pendant 24 heures.
  - Les éléments "Quoi 2 Neuf" sont cachés pendant 12 heures.
  - Les urls à destination du sitemap sont cachées pendant 24 heures
- Un système de revalidation de cache est disponible, permettant de vider les données cachées par le serveur afin de les stocker à nouveau.

# Divers

- Suppression de la dépendence `axios`, au profit de l'API native `fetch`.