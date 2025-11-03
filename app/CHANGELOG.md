# Notes de version 2.15.0 (03/11/2025)

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
- Optimisation des performances grâce au système de cache interne à NextJS.
  - Les pages requêtant des contenus dynamiques via CMS sont désormais ISR à la demande.
  - Le premier utilisateur requêtant la page activera le cache de la page et les suivants requêterons alors le cache mis en place par le 1er appel.
  - L'effet s'applique jusqu'à ce que le cache soit amené à expiration et qu'un nouvel utilisateur requête à nouveau la page.
- Mise à jour de divers balises et comportements SEO, à des fins de référencement organique.

# Divers

- Suppression de la dépendence `axios`, au profit de l'API native `fetch`.
- Redirection de l'ancienne page `/changelog` vers `/about`.
- Préparation de migration des images vers Cloudinary.
  - Storyblok continuera de stocker des images, tels que les svg de chaque fiches.
  - Cloudinary sera chargé de stocker tout le reste au niveau des images.
- Mise à jours de certaines dépendences vers leurs versions de patch.