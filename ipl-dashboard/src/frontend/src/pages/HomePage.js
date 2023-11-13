import "./HomePage.scss";
import { React, useEffect, useState } from "react";
import { useParams, userParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";

export const HomePage = () => {
  // declaring a state called team and a function called setTeam to populate that state
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //useEffect cannot be asynchronous so we create another function within the useEffect function that is asynchronous
    // fetching teams from the api endpoint
    const fetchTeams = async () => {
      const response = await fetch(`http://localhost:8080/teams`);
      const data = await response.json();
      console.log(data);

      setTeams(data);
    };
    fetchTeams();
  });

  return <div className="HomePage">The life and times of Sean Carter</div>;
};
