import { ALL_PANTHEON, PantheonValue } from './cards/pantheons.constants'

export const getPantheonData = (pantheon: PantheonValue) =>
  ALL_PANTHEON.find(({ value }) => pantheon === value)
