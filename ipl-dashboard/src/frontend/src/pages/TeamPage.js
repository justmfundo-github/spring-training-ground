import { React, useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  // declaring a state called team and a function called setTeam to populate that state
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    const fetchMatches = async () => {
      // fetchMatches is our asynchronous function
      const response = await fetch(`http://localhost:8080/team/${teamName}`); // fetch returns a promise
      const data = await response.json(); // await is used to retrieve information from the fetch promise
      console.log(data);

      setTeam(data); //setting the returned/fetched data to team by using setTeam
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found!</h1>;
  }

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}
    </div>
  );
};
