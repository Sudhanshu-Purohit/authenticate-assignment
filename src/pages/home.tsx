import Sidebar from "../components/sidebar";
import TopContainer from "../components/topContainer";
import './home.css';

const HomePage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="rightContainer">
        <div className="innerContainer">
          <TopContainer title="Home Page" />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
