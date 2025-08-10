import type { Book } from "./BookInterface";
import * as Propositions from "./Propositions";

// Map subPropositions
Propositions.Proposition1.subPropositions = [
    Propositions.Proposition1_1,
    Propositions.Proposition1_2,
];

Propositions.Proposition1_1.subPropositions = [
    Propositions.Proposition1_11,
    Propositions.Proposition1_12,
    Propositions.Proposition1_13,
];

Propositions.Proposition1_2.subPropositions = [
    Propositions.Proposition1_21,   
];

Propositions.Proposition2.subPropositions = [];

const TLP: Book = {
    title: "Tractatus Logico-Philosophicus",
    author: "Ludwig Wittgenstein",
    Propositions: [
        Propositions.Proposition1,
        Propositions.Proposition2,
    ], // Add actual propositions here
};

export default TLP;