# Analytics — Rybbit Custom Events

## Setup

### Script
Rybbit est chargé en **production uniquement** via un script dans [app/layout.tsx](../app/layout.tsx) :
- **URL** : `https://analytics.lepalmypede.eu/api/script.js`
- **Site ID** : `7822bb4f36a9`
- **Chargement** : `defer` (non-bloquant)

### CSP
Les headers Content Security Policy dans [next.config.js](../next.config.js) autorisent le domaine `analytics.lepalmypede.eu` pour `script-src` et `connect-src`.

### Typage TypeScript
L'API JavaScript de Rybbit est typée dans [src/types/rybbit.d.ts](../src/types/rybbit.d.ts) via une extension de l'interface `Window`.

---

## Convention de nommage

Pattern : **`{domaine}_{action}`** en snake_case

| Domaine | Périmètre |
|---------|-----------|
| `nav` | Menu de navigation principal |
| `card` | Clics sur les fiches (PageSquare) |
| `pantheon` | Clics sur les panthéons (PageSquare) |
| `subject` | Clics sur les sujets (PageSquare) |
| `godle` | Jeu quotidien Godle |
| `search` | Recherche et filtres |
| `social` | Réseaux sociaux et popin |

---

## Approches de tracking

### 1. Data-attributes (approche principale)
Aucun code JavaScript nécessaire. Le script Rybbit détecte automatiquement les clics sur les éléments avec ces attributs :

```html
<button data-rybbit-event="nom_event">Texte</button>
<button data-rybbit-event="nom_event" data-rybbit-prop-key="value">Texte</button>
```

**Limitations** : fonctionne uniquement sur les éléments cliquables (liens, boutons). Ne se déclenche pas sur les `<select>` (`onChange`).

### 2. API JavaScript (exception pour les `<select>`)
Utilisée uniquement pour les filtres de recherche :

```ts
window.rybbit?.event("search_filter", { type: "pantheon", value: "greek" });
```

L'optional chaining `?.` garantit qu'aucune erreur ne se produit en développement (script non chargé).

---

## Catalogue des événements

### Navigation

| Événement | Fichier | Élément | Propriétés |
|-----------|---------|---------|------------|
| `nav_click` | [MainMenu.tsx](../src/components/domains/navigation/MainMenu.tsx) | `<Link>` du menu | `section` : nom de la section |

### PageSquare (automatique par contentType)

| Événement | contentType | Propriétés |
|-----------|-------------|------------|
| `card_click` | `CARD` | `title` : nom de la fiche |
| `pantheon_click` | `PANTHEON` | `title` : nom du panthéon |
| `subject_click` | `SUBJECT` | `title` : nom du sujet |

Le tracking est automatique dans [PageSquare.tsx](../src/components/generics/PageSquare.tsx) via le mapping `RYBBIT_EVENTS`. Les `PageSquare` de type `ROUTE` ne sont pas trackés.

### Godle

| Événement | Fichier | Élément |
|-----------|---------|---------|
| `godle_yesterday_click` | [GodleGame.tsx](../src/components/domains/godle/GodleGame.tsx) | Lien vers l'entité d'hier |
| `godle_view_results` | [GodleGame.tsx](../src/components/domains/godle/GodleGame.tsx) | Bouton "Voir les résultats" |
| `godle_card_click` | [GodleResultModal.tsx](../src/components/domains/godle/GodleResultModal.tsx) | Lien "En savoir plus sur..." |
| `godle_share` | [GodleResultModal.tsx](../src/components/domains/godle/GodleResultModal.tsx) | Bouton "Partager le résultat" |

### Recherche

| Événement | Approche | Fichier | Propriétés |
|-----------|----------|---------|------------|
| `search_filter` | JS | [Filter.tsx](../src/components/domains/search/Filter.tsx) | `type` : pantheon/subject/genre, `value` : valeur sélectionnée |
| `search_reset` | Data-attr | [Filter.tsx](../src/components/domains/search/Filter.tsx) | — |

### Réseaux sociaux

| Événement | Fichier | Propriétés |
|-----------|---------|------------|
| `social_click` | [SocialNetworks.tsx](../src/components/generics/SocialNetworks.tsx) | `network` : nom du réseau, `context` : footer/popin/card |
| `social_popin_toggle` | [SocialsIncentivePopin.tsx](../src/components/domains/social/SocialsIncentivePopin.tsx) | — |
| `social_popin_close` | [SocialsIncentivePopin.tsx](../src/components/domains/social/SocialsIncentivePopin.tsx) | — |

---

## Ajouter un nouvel événement

### Via data-attribute (recommandé)
Ajouter directement sur un élément cliquable existant :
```tsx
<button data-rybbit-event="domaine_action">Texte</button>
```

Avec propriétés :
```tsx
<Link
  href="/path"
  data-rybbit-event="domaine_action"
  data-rybbit-prop-key="value"
>
```

### Via JavaScript (si data-attribute impossible)
Pour les événements programmatiques ou les éléments non-cliquables :
```tsx
window.rybbit?.event("domaine_action", { key: "value" });
```

Le type `window.rybbit` est déclaré dans `src/types/rybbit.d.ts`.

---

## Contraintes

- **Noms d'événements** : max 255 caractères
- **Propriétés** : strings et numbers uniquement, total max 2 KB
- **Production uniquement** : le script Rybbit n'est pas chargé en développement
- **Pas de cookies** : tracking respectueux de la vie privée
