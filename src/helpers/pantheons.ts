import { ALL_PANTHEON, PantheonValue } from '../types/cards/pantheons'

export const getPantheonData = (pantheon: PantheonValue) =>
  ALL_PANTHEON.find(({ value }) => pantheon === value)
