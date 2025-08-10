import { FC } from "react";
import type { Book } from "./BookInterface";

 interface BookComponentProps {
    book: Book;
 }

const BookComponent: FC<BookComponentProps> = ({book}) => {
  return (
    <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <ul>
            {book.Propositions.map((proposition) => {
                return (
                    <li key={proposition.number}>
                        <p><strong>{proposition.number}. </strong>{proposition.text}</p>
                    </li>
                );
            })}
        </ul>
    </div>
  );
};

export default BookComponent;
