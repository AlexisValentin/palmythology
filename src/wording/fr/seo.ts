type SeoWordingType = { title: string; description: string }

export const SEO_WORDING: Record<string, SeoWordingType> = {
  HOME: {
    title: `Palmythology, l'encyclopédie mythologique`,
    description: `Découvrez les mythologies du monde en plongeant dans l'histoire et la culture divine à travers des fiches simple, intuitives et pédagogiques.`,
  },
  SEARCH: {
    title: 'Recherche de contenu | Palmythology',
    description: `Vous êtes à la recherche d'informations mythologiques ? La Palmythology vous propose un moteur de recherche spécial pour trouver la fiche qu'il vous faut. Peaufiner votre recherche avec les 10 panthéons disponibles (Aztèque, Celtique, Chinois, Égyptien, Grec, Hindou, Japonais, MAya, Scandinave, Romain) et les 6 différents sujets (Créature, Divinité; Personnage, Lieu, Peuple, Écrits).`,
  },
  CARD: {
    title: 'Les grandes lignes | Palmythology',
    description: `C'est ici que vous retrouverez toutes les informations sur la fiche de la Palmythology de vos rêves : que ce soit les divinités grecques, les créatures égyptiennes ou encore les batailles légendaire scandinaves, retrouvez avec détails toutes les informations sur le sujet de votre choix, avec des fiches agrémentées d'illustrations attrayantes et d'explications passionantes.`,
  },
  Q2N: {
    title: 'Quoi 2 Neuf, planning du mois | Palmythology',
    description: `C'est dans la section "Quoi 2 Neuf" que vous pouvez consulter le planning du mois en cours, ainsi que les fiches prévues qui sont déjà disponible sur le site web de la Palmythology et les réseaux sociaux ! Chaque fiche prévue est inscrite avec son illustration, son nom et son sous-titre tel qu'il paraîtra dans le mois courant.`,
  },
  ABOUT: {
    title: 'À propos | Palmythology',
    description:
      'Tout ce que vous avez toujours voulu savoir sur les secrets de la Palmythology. Retrouvez les informations bonus sur le créateur du site web et du concept de la Palmythology, les détails techniques concernant le développement du site web, mais aussi les informations de contact afin de pouvoir à la fois, proposer des idées, suggérer du contenu, poser des questions et éventuellement participer au développement de la Palmythology de manière générale.',
  },
  PANTHEON: {
    title: 'Panthéon spécifique | Palmythology',
    description: `Retrouvez la fiche qu'il vous faut à travers la page dédiée aux panthéons spécifiques présentés par la Palmythology.`,
  },
  PANTHEONS: {
    title: 'Liste des panthéons | Palmythology',
    description:
      'Sélectionnez un panthéon mythologique parmi 11 différents : grec, égyptien, scandinave, celtique, japonais, chinois, maya, aztèque, hindou, romain.',
  },
  SUBJECT: {
    title: 'Sujet spécifique | Palmythology',
    description: `Retrouvez la fiche qu'il vous faut à travers la page dédiée aux thématiques dédiées présentées par la Palmythology.`,
  },
  SUBJECTS: {
    title: 'Liste des sujets | Palmythology',
    description:
      'Découvrez les fiches les plus populaires classées par thèmatiques : personnages, divinités, monstres, peuples, écrits et lieux.',
  },
}
