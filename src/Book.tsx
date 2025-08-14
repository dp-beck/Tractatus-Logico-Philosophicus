import type { Book } from "./BookInterface";
import type { Proposition } from "./PropositionInterface";
import * as Propositions from "./Propositions";
import Preface from "./Preface";

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

Propositions.Proposition2.subPropositions = [
    Propositions.Proposition2_01,
];

Propositions.Proposition2_01.subPropositions = [
    Propositions.Proposition2_011,
    Propositions.Proposition2_012,
];

Propositions.Proposition2_012.subPropositions = [
    Propositions.Proposition2_0121,
];

const TLP: Book = {
    title: "Tractatus Logico-Philosophicus",
    author: "Ludwig Wittgenstein",
    preface: Preface,
    Propositions: [
        Propositions.Proposition1,
        Propositions.Proposition2,
    ], // Add actual propositions here
    getAllPropositionsFlat(propositions: Proposition[]) {
        const allProps: string[][] = [];

        function recurse(current: Proposition[]) {
            if (current.length === 0) {
                return;
            } else {
                for (const prop of current) {
                    allProps.push([prop.number, prop.text]);
                    if (prop.subPropositions && prop.subPropositions.length > 0) {
                        recurse(prop.subPropositions);
                    }
                }
            }
        }
        recurse(propositions);
        return allProps;
    },
};

export default TLP;