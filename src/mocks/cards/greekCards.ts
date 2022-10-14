/* Types */
import { Card } from "../../types/cards/card";
import { GreekNames } from "../../types/cards/names/greek";

export const ZeusCard: Card = {
  details: {
    name: GreekNames.ZEUS,
    pantheon: "Grec",
    subject: "Divinité",
  },
};

export const availableGreekCards = [ZeusCard];
