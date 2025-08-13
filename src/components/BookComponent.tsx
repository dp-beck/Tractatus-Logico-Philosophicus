import { FC } from "react";
import type { Book } from "../BookInterface";
import PropositionComponent from "./ProponentComponent";

 interface BookComponentProps {
    book: Book
 }

const BookComponent: FC<BookComponentProps> = ({book}) => {
  const allPropsFlat = book.getAllPropositionsFlat(book.Propositions);

  return (
    <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>

        <h3>Flat Version</h3>
        <ul>
            {allPropsFlat?.map((proposition) => {
                return (
                    <li key={proposition[0]}>
                        <p><strong>{proposition[0]}. </strong>{proposition[1]}</p>
                    </li>
                );
            })}
        </ul>

        <h3>Nested Version</h3>

        <ul>
            {book.Propositions.map((proposition) => {
                return <PropositionComponent proposition={proposition} key={proposition.number} />;
            })}
        </ul>
    </div>
  );
};

export default BookComponent;
