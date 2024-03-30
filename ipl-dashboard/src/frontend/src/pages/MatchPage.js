import "./MatchPage.scss";

import { React, useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";
import Header from "./Header";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    const fetchMatches = async () => {
      // fetchMatches is our asynchronous function
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`); // fetch returns a promise
      const data = await response.json(); // await is used to retrieve information from the fetch promise
      console.log(data);

      setMatches(data); //setting the returned/fetched data to matches by using setMatches
    };
    fetchMatches();
  }, [teamName, year]); // when this value changes then the useEffect re-runs. I.e. when date changes new match details must be retrieved

  return (
    <div>
      <Header />
      <div className="MatchPage">
        <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName={teamName} />
        </div>
        <div>
          <h1 className="page-heading">
            {teamName} matches in {year}
          </h1>
          {matches.map((match) => (
            <MatchDetailCard key={match.id} teamName={teamName} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};
