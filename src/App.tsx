import { FC } from "react";

interface AppProps {
  title: string;
  author: string;
}

const App: FC<AppProps> = ({ title, author }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </>
  );
};

export default App;
