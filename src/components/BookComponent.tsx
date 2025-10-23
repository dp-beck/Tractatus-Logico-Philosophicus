import { FC } from "react";
import type { Book } from "../BookInterface";
import PropositionComponent from "./ProponentComponent";

 interface BookComponentProps {
    book: Book
 }

const BookComponent: FC<BookComponentProps> = ({book}) => {

  return (
    <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>

        <h3>Preface</h3>
        <div className="preface">
          {book.preface?.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
          })}
        </div>

        <h3>Propositions</h3>
        <ul>
            {book.Propositions.map((proposition) => {
                return <PropositionComponent proposition={proposition} key={proposition.number} />;
            })}
        </ul>
    </div>
  );
};

export default BookComponent;
