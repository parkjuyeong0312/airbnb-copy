import { useEffect, useState } from "react";
import HomeList from "./components/HomeList/HomeList";
import RecommendFooter from "./components/RecommendFooter/RecommendFooter";
import TapBar from "./components/TapBar/TapBar";
import ViewTop from "./components/ViewTop/ViewTop";

function App() {
  const [homeList, setHomeList] = useState([]);

  const fetchData = async () => {
    const a = await fetch("http://localhost:3000/homeList");
    const data = await a.json();
    setHomeList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   const text = e.target.text.value;
  //   const done = e.target.done.checked;

  //   fetch("http://localhost:3000/api/todo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       text,
  //       done,
  //     }),
  //   });

  //   fetchData();
  // };

  return (
    <div>
      {/* <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form> */}
      <ViewTop />
      <TapBar />
      <HomeList homeList={homeList} />
      <RecommendFooter />
    </div>
  );
}

export default App;
