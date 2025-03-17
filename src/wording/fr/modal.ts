import { ButtonProps } from '../../components/generics/Button'
import { COLOR_TAINTS, COLORS } from '../../utils/styles/colors.constants'

type ModalWordingType = {
  title: string
  description: string
  button: Omit<ButtonProps, 'onClick'>
}

export const MODAL_WORDING: Record<string, ModalWordingType> = {
  TRACKING: {
    title: `La Palmythology utilise vos données de navigation`,
    description: `Dans le but d'optimiser et améliorer l'expérience utilisateur, le site web utilise une solution de collecte de données respectueuse de la vie privée. Cette solution permet de collecter des informations anonymes sur la manière dont chaque utilisateurs interagissent avec le site web. Les données recueillies sont agrégées et ne permettent en aucun d'identifier les utilisateurs personnellement. Elles aident à comprendre quelles pages sont les plus populaires, à identifier les points de friction et à prendre des décisions éclairées pour améliorer continuellement le contenu et les fonctionnalités. La Palmythology s'engage à traiter vos données avec le plus grand soin, sans aucune atteinte à votre vie privée.`,
    button: {
      label: `Accepter et continuer`,
      color: `${COLORS.GREEN}-${COLOR_TAINTS.DARK}`,
    },
  },
}
