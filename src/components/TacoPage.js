import React, { useState } from "react";
import axios from "axios";

export default function TacoPage() {
  const [item, setItem] = useState(null);
  const endpoint =
    "http://taco-randomizer.herokuapp.com/random/?full-taco=true";

  const fetchData = async () => {
    const response = await axios.get(endpoint);
    setItem(response.data);
  };

  return (
    <div className="page">
      <button className="button" onClick={() => fetchData()}>
        <div className="buttonText">Give me Taco!</div>
      </button>
      {item && (
        <div>
          <h1>{item.name}</h1>
          <p>{item.recipe}</p>
          <h2>
            Looks like this is some psuedo markdown. Formatting will come in a
            later update{" "}
            <span role="img" aria-label="upside down face">
              🙃
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}
