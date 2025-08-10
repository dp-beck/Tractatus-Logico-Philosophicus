import { FC } from "react";
import BookComponent from "./BookComponent";
import TLP from "./Book";

const App: FC = () => {
  return (
    <>
      <BookComponent book= {TLP} />
    </>
  );
};

export default App;
