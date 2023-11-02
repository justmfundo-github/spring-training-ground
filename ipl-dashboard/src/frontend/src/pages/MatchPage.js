import { React, useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    const fetchMatches = async () => {
      // fetchMatches is our asynchronous function
      const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`); // fetch returns a promise
      const data = await response.json(); // await is used to retrieve information from the fetch promise
      console.log(data);

      setMatches(data); //setting the returned/fetched data to matches by using setMatches
    };
    fetchMatches();
  }, []); // when this value changes then the useEffect re-runs. I.e. when date changes new match details must be retrieved

  return (
    <div className="MatchPage">
      <h1>Match Page</h1>
      {matches.map((match) => (
        <MatchDetailCard teamName={teamName} match={match} />
      ))}
    </div>
  );
};
