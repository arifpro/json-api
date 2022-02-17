import { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/arifpro/json-api/posts`)
      .then((res) => res.json())
      .then((data) => setState((_state) => ({ ..._state, posts: data })))
      .catch((err) => console.log(err));
  }, []);

  console.log(state);

  return (
    <section>
      <h1>JSON-API</h1>
    </section>
  );
};

export default App;
