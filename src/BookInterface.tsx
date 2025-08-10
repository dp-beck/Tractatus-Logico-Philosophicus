import { Proposition } from "./PropositionInterface";

interface Book {
  title: string;
  author: string;
  Propositions: Proposition[];
}

export type { Book };