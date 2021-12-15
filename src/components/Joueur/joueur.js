import { useEffect, useState } from "react";
import "./joueur.css";

export function CallApi() {
  const [score, setdata] = useState(undefined);
  useEffect(() => {
    (async () => {
      const newData = await getData();
      setdata(newData);
    })();
    return () => {};
  }, []);

  const getData = async () => {
    const dataJson = await fetch("https://animalfinderapi.herokuapp.com/score");
    return await dataJson.json();
  };

  if (!score) {
    return <p>Waiting...</p>;
  }
  return (
    <p>
      {score.data.map((user) => (
        <p>
          <img style={{ width: "10rem" }} src={user.avatar} />{" "}
          <p>{user.username}</p> <p>{user.score}</p>{" "}
        </p>
      ))}
    </p>
  );
}

export default CallApi;
