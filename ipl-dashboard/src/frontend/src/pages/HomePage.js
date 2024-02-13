import "./HomePage.scss";
import { React, useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";

export const HomePage = () => {
  // declaring a state called team and a function called setTeam to populate that state
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    // fetching teams from the api endpoint
    const fetchAllTeams = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
      const data = await response.json();
      console.log(data);

      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL DashBoard Curtesy of JavaBrains Tutorial</h1>
      </div>

      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};
