import type { Proposition } from "./PropositionInterface";

export interface Book {
  title: string;
  author: string;
  preface?: string[];
  Propositions: Proposition[];
  getAllPropositionsFlat(param1: Proposition[]): string[][];
}