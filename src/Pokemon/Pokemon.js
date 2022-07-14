import React, { useEffect, useState } from "react";
import ShowPokemon from "./ShowPokemon";
import Loading from "../Comman/Loading";

const Pokemon = () => {
  const [number, setNumber] = useState("-1");
  const [num, setNum] = useState(-1);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState();

  let url = `https://pokeapi.co/api/v2/pokemon/?offset=10&limit=${num}`;
  let length;
  const getValue = (e) => {
    length = e.target.value.length;
    if (length === 0) {
      setNumber(Number(-1));
    } else if (e.target.value === "0") {
      setNumber(Number(-1));
    } else {
      setNumber(Number(e.target.value));
    }
  };

  const getNumber = () => {
    // console.log(String(number).length, "click");
    if (number !== -1) {
      setLoading(true);
    }
    // if (number === null) {
    //   setNum(-1);
    // } else {
    setNum(number);

    setNumber(-1);
    setNames([]);
  };

  const apiData = async () => {
    //let url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    const resp = await fetch(url);
    const nameList = await resp.json();

    let data = nameList.results;
    // console.log(data);
    setLoading(false);
    setNames(data);
  };

  useEffect(() => {
    apiData();
  }, [num]);

  return (
    <div>
      <input type="number" onChange={getValue} />
      <button onClick={getNumber}>click</button>

      {loading === false ? (
        names.length >= 0 ? (
          names.map((val, index) => {
            return <ShowPokemon key={val + index} name={val.name} />;
          })
        ) : (
          console.log("error")
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Pokemon;
