Created this application while going through a JavaBrains tutorial. The purpose is to sharpen and expand my skillset while filling in
any blanks as it relates to spring development from the full stack perspective. What follows is an application that makes use of Java, Spring boot, Spring mvc, web services and react as a front end. Application is deployed on AWS

IPL Dashboard Practice application

Currently Deployed to: http://ipldashboard-env.eba-uyjmmzdb.us-east-1.elasticbeanstalk.com/
Incorporating, Java, Spring boot, JPA, React and AWS

Application uses Cricket data pulled from kaggle
Data is pulled into an in memory database using spring batch with the use of JPA and entity annotations. I.e. CSV file is consumed. Classes are used to map data from the CSV to the in memory database.

Web services to expose some of the data are then created using Spring Boot/Spring MVC
I.e:
/teams: Teams(for a full team list)
/team/Pune Warriors: Matches per team via team name lists all games played by that team including total wins and losses.
/team/Mumbai Indians/matches?year=2020: Matches per year which retrieves all matches played by a team per specified year.
React App/Frontend then built to consume web services and display data
Finally, app is deployed to AWS elasticbeanstalk environment
