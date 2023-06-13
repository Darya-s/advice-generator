import React, { useState, useEffect } from "react";
import Button from "./Button";
import Advice from "./Advice";

const URL = "https://api.adviceslip.com/advice";

const AdvicesContainer = () => {
  const [advices, setAdvices] = useState({});

  const [error, setError] = useState(null);
  const [isDisabled, setDisabled] = useState(false);

  const getAdvice = async () => {
    try {
      setDisabled(true);
      const response = await fetch(URL);

      if (response) {
        const result = await response.json();

        console.log("slip is: ", JSON.stringify(result.slip, null, 4));
        setError(null);

        setAdvices(result.slip);
        setDisabled(false);
        return result.slip;
      } else {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
    }
  };

  const handleClick = (e) => {
    console.log("Handle click function");
    if (!isDisabled) {
      getAdvice();
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      {error && <p>{`There is a problem with fetching data - ${error}`}</p>}

      <Advice advices={advices} />

      <Button onClick={handleClick} isDisabled={isDisabled} />
    </div>
  );
};

export default AdvicesContainer;
