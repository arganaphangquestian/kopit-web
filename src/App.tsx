import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const App: React.FC = () => {
  const { data, error, isLoading } = useQuery("getdata", async () => {
    const { data } = await axios.get(
      "https://incomparable-salmiakki-a4d922.netlify.app/.netlify/functions/main"
    );
    return data;
  });

  if (isLoading) {
    return <p>Loading . . .</p>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default App;
