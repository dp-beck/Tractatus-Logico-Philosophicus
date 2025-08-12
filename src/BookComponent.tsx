import { FC } from "react";
import type { Book } from "./BookInterface";

 interface BookComponentProps {
    book: Book;
 }

const BookComponent: FC<BookComponentProps> = ({book}) => {
  const allPropsFlat = book.getAllPropositionsFlat(book.Propositions);
  const propositions = [{name: "I. Proposition 1", propositions: [
                        {name: "I.1. Proposition 1.1", propositions: [
                            {name: "I.1.1. Proposition 1.1.1"},
                            {name: "I.1.2. Proposition 1.1.2", propositions: [{name: "ANOTHER NESTED PROPOSITION"}]},]}, 
                        {name: "I.2. Proposition 1.2"}
                        ]}, 
                        {name: "II. Proposition 2", propositions: [
                        {name: "II.1. Proposition 2.1"},
                        ]}, 
                        {name: "III. Propositions 3"}]; // Placeholder array

  return (
    <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <ul>
            {allPropsFlat?.map((proposition) => {
                return (
                    <li key={proposition[0]}>
                        <p><strong>{proposition[0]}. </strong>{proposition[1]}</p>
                    </li>
                );
            })}
        </ul>

        <ul>
            {propositions.map((proposition) => {
                return <Proposition proposition={proposition} key={proposition.name} />;
            })}
        </ul>
    </div>
  );
};

function Proposition( {proposition} ) {
    return (
        <li key={proposition.name}>{proposition.name}
        <ul>    
            {proposition.propositions?.map((subprop) => {
                return <Proposition proposition={subprop} key={subprop.name} />;
            })}
        </ul>
        </li>
    )

}
export default BookComponent;
