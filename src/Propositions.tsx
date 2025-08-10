import { Proposition } from "./PropositionInterface";

export const Proposition1: Proposition = {
    number: "1",
    text: "The world is all that is the case.",
    subPropositions: [],
    immediateParent: undefined
};

export const Proposition1_1: Proposition ={
    number: "1.1",
    text: "The world is the totality of facts, not of things.",
    subPropositions: [],
    immediateParent: Proposition1
};

export const Proposition1_11: Proposition ={
    number: "1.11",
    text: "The world is determined by the facts, and by these being all the facts.",
    subPropositions: [],
    immediateParent: Proposition1_1
};

export const Proposition1_2: Proposition ={
    number: "1.2",
    text: "The world divides into facts.",
    subPropositions: [],
    immediateParent: Proposition1
};
    