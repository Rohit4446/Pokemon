import React, { useEffect, useState } from "react";
import ShowPokemon from "./ShowPokemon";
function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result.results.map((value) => {
            items.push(value.name);
            //console.log(value.name);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.length > 0
          ? items.map((val, index) => {
              return <ShowPokemon key={index} name={val} />;
            })
          : console.log("error")}
      </div>
    );
  }
}

export default MyComponent;
