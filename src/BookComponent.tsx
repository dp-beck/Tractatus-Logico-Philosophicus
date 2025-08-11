import { FC } from "react";
import type { Book } from "./BookInterface";

 interface BookComponentProps {
    book: Book;
 }

const BookComponent: FC<BookComponentProps> = ({book}) => {
  const allProps = book.getAllPropositions(book.Propositions);

  return (
    <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <ul>
            {allProps?.map((proposition) => {
                return (
                    <li key={proposition[0]}>
                        <p><strong>{proposition[0]}. </strong>{proposition[1]}</p>
                    </li>
                );
            })}
        </ul>
    </div>
  );
};

export default BookComponent;
