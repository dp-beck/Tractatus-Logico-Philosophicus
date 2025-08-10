import type { Proposition } from "./PropositionInterface";

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

export const Proposition1_12: Proposition ={
    number: "1.12",
    text: "For the totality of facts determines both what is the case, and also all that is not the case.",
    subPropositions: [],
    immediateParent: Proposition1_1
};

export const Proposition1_13: Proposition ={
    number: "1.13",
    text: "The facts in logical space are the world.",
    subPropositions: [],
    immediateParent: Proposition1_1
};

export const Proposition1_2: Proposition ={
    number: "1.2",
    text: "The world divides into facts.",
    subPropositions: [],
    immediateParent: Proposition1
};

export const Proposition1_21: Proposition ={
    number: "1.21",
    text: "Anyone can either be the case or not the case, and everything else remains the same.",
    subPropositions: [],
    immediateParent: Proposition1_2
};

export const Proposition2: Proposition ={
    number: "2",
    text: "What is the case—a fact—is the existence of atomic facts.",
    subPropositions: [],
    immediateParent: undefined
};
    