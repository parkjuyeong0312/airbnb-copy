import HomeList from "./components/HomeList/HomeList"
import RecommendFooter from "./components/RecommendFooter/RecommendFooter"
import TapBar from "./components/TapBar/TapBar"
import ViewTop from "./components/ViewTop/ViewTop"

function App() {

  return (
    <div>
      <ViewTop />
      <TapBar />
      <HomeList />
      <RecommendFooter/>
    </div>


  )
}

export default App
