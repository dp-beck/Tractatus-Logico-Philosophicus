export interface Proposition {
  number: string;
  text: string;
  subPropositions?: Proposition[];
  immediateParent?: Proposition;
}
