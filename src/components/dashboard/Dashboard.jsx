import { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import Navbar from "../Navbar";
import "./dashboard.css"

const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in localStorage.");
      return;
    }

    const fetchRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/user/${userId}`);
        const data = await response.json();
        setRepositories(data.repositories);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/all`);
        const data = await response.json();
        setSuggestedRepositories(data);
        console.log(suggestedRepositories);
      //  console.log(data); // log the fresh data
      } catch (error) {
        console.error("Error fetching suggested repositories:", error);
      }
    };

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);
 useEffect(()=>{
    if(searchQuery==""){
        setSearchResult(repositories);
    }else{
        const filteredRepo=repositories.filter((repo)=>repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResult(filteredRepo);
    }
 },
    [searchQuery,repositories]);

  return (
 <> <Navbar/>
  <section id="dashboard">
    <aside>
    <h2>Suggested Repositories</h2>
    {suggestedRepositories.map((repo) => (
  <div key={repo._id || repo.name}>
    <h4>{repo.name}</h4>
    <h4>{repo.description}</h4>
  </div>
))}

    </aside>
    <main>
    <h2>your Repositories</h2>
    <div id="search">
        <input type="text"  value={searchQuery} placeholder="Search..." onChange={(e)=> setSearchQuery(e.target.value)}/>
    </div>
    {suggestedRepositories.map((repo) => {
  return (
    <div key={repo._id || repo.name}>
      <h4>{repo.name}</h4>
      <h4>{repo.description}</h4>
    </div>
  );
})}

    </main>
    <aside>
        <h2>Upcoming Event</h2>
        <ul>
            <li><p>Tech conference -Dec 15</p></li>
            <li><p>Developer Meetup -Dec 25</p></li>
            <li><p>React Summit -jan 5</p></li>
        </ul>
    </aside>
  </section>
  </>
  )
};

export default Dashboard;
