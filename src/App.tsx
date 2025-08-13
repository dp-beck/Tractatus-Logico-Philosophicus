import { FC } from "react";
import BookComponent from "./components/BookComponent";
import TLP from "./Book";

const App: FC = () => {
  return (
    <>
      <BookComponent book= {TLP} />
    </>
  );
};

export default App;
