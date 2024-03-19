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
