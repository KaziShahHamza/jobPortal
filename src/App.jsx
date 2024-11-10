import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
  </>;
}

export default App;
