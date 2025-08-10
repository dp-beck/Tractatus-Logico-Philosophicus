import { Book } from "./BookInterface";
import * as Propositions from "./Propositions";

// Map subPropositions
Propositions.Proposition1.subPropositions = [
  Propositions.Proposition1_1,
  Propositions.Proposition1_2,
];

Propositions.Proposition1_1.subPropositions = [
  Propositions.Proposition1_11,
];

const TLP: Book = {
  title: "Tractatus Logico-Philosophicus",
  author: "Ludwig Wittgenstein",
  Propositions: [
    Propositions.Proposition1,
  ], // Add actual propositions here
};

export default TLP;