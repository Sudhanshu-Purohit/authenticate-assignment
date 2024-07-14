import Sidebar from "../components/sidebar";
import TopContainer from "../components/topContainer";

const WatchListPage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="rightContainer">
        <div className="innerContainer">
          <TopContainer title="Watchlists" />
        </div>
      </div>
    </div>
  )
}

export default WatchListPage;
