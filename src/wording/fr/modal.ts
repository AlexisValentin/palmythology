import { ButtonProps } from '../../components/generics/Button'
import { COLOR_TAINTS, COLORS } from '../../types/styles/colors'

type ModalWordingType = {
  title: string
  description: string
  button: ButtonProps
}

export const MODAL_WORDING: Record<string, ModalWordingType> = {
  TRACKING: {
    title: `La Palmythology utilise vos données de navigation`,
    description: `Le site web utilise une solution de tracking, afin de recueillir des données de navigation. Ces données permettent d'améliorer votre expérience de navigation et d'optimiser le contenu de notre site en fonction des besoins et des intérêts de nos visiteurs. La solution de tracking que utilisée ne collecte aucune donnée personnelle vous concernant. Aucune information permettant de vous identifier directement ou indirectement n'est récoltée. Les données collectées sont uniquement liées à votre navigation sur le site de la Palmythology, telles que les pages visitées, la durée de visite, ou le pays depuis lequel vous vous connectez.`,
    button: {
      label: `Accepter et continuer`,
      color: `${COLORS.GREEN}-${COLOR_TAINTS.DARK}`,
    },
  },
}
