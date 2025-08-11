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

// TO DO: Write a recursive function to get all propositions including subPropositions
/*
1. Got to first item - add to array
2. Check if it has subPropositions
3. If yes, go to first subProposition - add to array
4. Repeat 2-3 until no more subPropositions
5. Go back to parent proposition - check if it has more subPropositions
6. If yes, go to next subProposition - add to array
7. Repeat 2-6 until no more subPropositions
8. Go back to top level - check if it has more propositions
9. If yes, go to next proposition - add to array
10. Repeat 2-9 until no more propositions   

function getAllProps(propositions) {
    const allProps = [];
    if propositions.length === 0 {
        return allProps;
    }
    for (const prop of propositions) {
        allProps.push(prop);
        if (prop.subPropositions && prop.subPropositions.length > 0) {
            allProps.push(...getAllProps(prop.subPropositions));
        }
    }
    return allProps;
*/
export default TLP;