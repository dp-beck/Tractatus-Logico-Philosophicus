import type { Book } from "./BookInterface";
import type { Proposition } from "./PropositionInterface";
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
    getAllPropositions(propositions: Proposition[]) {
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