type SeoWordingType = { title: string; description: string }

export const SEO_WORDING: Record<string, SeoWordingType> = {
  HOME: {
    title: `Palmythology, l'encyclopédie mythologique`,
    description: `Découvrez les mythologies du monde en plongeant dans l'histoire et la culture divine à travers des fiches simple, intuitives et pédagogiques.`,
  },
  FOLDERS: {
    title: 'Dossiers',
    description: `Que ce soit pour découvrir le planning du mois en cours grâce à la rubrique "Quoi 2 Neuf" ou pour plonger dans les dossiers mythologiques "Qu'est-ce que ça fiche ?" pour obtenir de plus amples informations, la Palmythology vous propose différents formats pour vous orienter naturellement et intuitivement vers les rubriques du site web que vous recherchez..`,
  },
  SEARCH: {
    title: 'Recherche de contenu',
    description: `Vous êtes à la recherche d'informations mythologiques ? La Palmythology vous propose un moteur de recherche spécial pour trouver la fiche qu'il vous faut. Peaufiner votre recherche avec les 10 panthéons disponibles (Aztèque, Celtique, Chinois, Égyptien, Grec, Hindou, Japonais, MAya, Scandinave, Romain) et les 6 différents sujets (Créature, Divinité; Personnage, Lieu, Peuple, Écrits).`,
  },
  CARD_DETAILS: {
    title: 'Les grandes lignes',
    description: `C'est ici que vous retrouverez toutes les informations sur la fiche de la Palmythology de vos rêves : que ce soit les divinités grecques, les créatures égyptiennes ou encore les batailles légendaire scandinaves, retrouvez avec détails toutes les informations sur le sujet de votre choix, avec des fiches agrémentées d'illustrations attrayantes et d'explications passionantes.`,
  },
  Q2N: {
    title: 'Quoi 2 Neuf, planning du mois | Palmythology',
    description: `C'est dans la section "Quoi 2 Neuf" que vous pouvez consulter le planning du mois en cours, ainsi que les fiches prévues qui sont déjà disponible sur le site web de la Palmythology et les réseaux sociaux ! Chaque fiche prévue est inscrite avec son illustration, son nom et son sous-titre tel qu'il paraîtra dans le mois courant.`,
  },
  QQCF: {
    title: `Qu'est-ce que ça fiche ?`,
    description: `C'est dans la section "Qu'est-ce que ça fiche ?" que les fiches détaillées sont accessibles plus en profondeur par rapport aux fiches classiques de la Palmythology. Suivez la section pour connaître les derniers sujets "Qu'est-ce que ça fiche ?" de la Palmtyhology et ainsi améliorer vos connaisances en la matière !`,
  },
  ABOUT: {
    title: 'À propos',
    description:
      'Tout ce que vous avez toujours voulu savoir sur les secrets de la Palmythology. Retrouvez les informations bonus sur le créateur du site web et du concept de la Palmythology, les détails techniques concernant le développement du site web, mais aussi les informations de contact afin de pouvoir à la fois, proposer des idées, suggérer du contenu, poser des questions et éventuellement participer au développement de la Palmythology de manière générale.',
  },
  PANTHEONS: {
    title: 'Liste des panthéons | Palmythology',
    description:
      'Sélectionnez un panthéon mythologique parmi 11 différents : grec, égyptien, scandinave, celtique, japonais, chinois, maya, aztèque, hindou, romain.',
  },
}
