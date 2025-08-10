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
    </div>
  );
};

export default BookComponent;
