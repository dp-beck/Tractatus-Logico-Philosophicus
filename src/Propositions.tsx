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

export const Proposition2_01: Proposition ={
    number: "2.01",
    text: "An atomic fact is a combination of objects (entities, things).",
    subPropositions: [],
    immediateParent: Proposition2
};     

export const Proposition2_011: Proposition ={
    number: "2.011",
    text: "It is essential to a thing that it can be a constituent part of an atomic fact.",
    subPropositions: [],
    immediateParent: Proposition2_01
};

export const Proposition2_012: Proposition ={
    number: "2.012",
    text: "In logic nothing is accidental: if a thing can occur in an atomic fact the possibility of that atomic fact must already be prejudged.",
    subPropositions: [],
    immediateParent: Proposition2_01
};

export const Proposition2_0121: Proposition ={
    number: "2.0121",
    text: "It would, so to speak, appear as an accident, when to a thing that could exist alone on its own account," + 
        " subsequently a state of affairs could be made to fit. If things can occur in atomic facts," + 
        " this possibility must already lie in them. (A logical entity cannot be merely possible. Logic treats of" +
        " every possibility, and all possibilities are its facts.) Just as we cannot think of spatial objects at all apart from" +
        " space, or temporal objects apart from time, so we cannot think of any object apart from the possibility of its connexion with" +
        " other things. If I can think of an object in the context of an atomic fact, I cannot think of it apart from the possibility of this context.",
    subPropositions: [],
    immediateParent: Proposition2_012
};

export const Proposition2_0122: Proposition ={
    number: "2.0122",
    text:   `The thing is independent, in so far as it can occur in all possible circumstances, but this form of independence is a form of
            connexion with the atomic fact, a form of dependence. (It is
            impossible for words to occur in two different ways, alone and
            in the proposition.)`,
    subPropositions: [],
    immediateParent: Proposition2_012
};

export const Proposition2_0123: Proposition ={
    number: "2.0123",
    text:   `If I know an object, then I also know all the possibilities of its
            occurrence in atomic facts.
            (Every such possibility must lie in the nature of the object.)
            A new possibility cannot subsequently be found.`,
    subPropositions: [],
    immediateParent: Proposition2_012
};

export const Proposition2_01231: Proposition ={
    number: "2.01231",
    text:   `In order to know an object, I must know not its external but all
            its internal qualities.`,
    subPropositions: [],
    immediateParent: Proposition2_0123
};

export const Proposition2_0124: Proposition ={
    number: "2.0124",
    text:   `If all objects are given, then thereby are all possible atomic facts
            also given.`,
    subPropositions: [],
    immediateParent: Proposition2_012
};

export const Proposition2_013: Proposition ={
    number: "2.013",
    text:   `Every thing is, as it were, in a space of possible atomic facts. I can think of this space as empty, but not of the thing without
    the space.`,
    subPropositions: [],
    immediateParent: Proposition2_01
};
