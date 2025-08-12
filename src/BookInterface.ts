import type { Proposition } from "./PropositionInterface";

export interface Book {
  title: string;
  author: string;
  Propositions: Proposition[];
  getAllPropositionsFlat(param1: Proposition[]): string[][];
}