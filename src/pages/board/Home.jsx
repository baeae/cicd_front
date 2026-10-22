import React from "react";
import BoardItem from "../../components/BoardItem";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>아무거나</h1>
      <h1>전체게시물 LIST</h1>
      <BoardItem title={"Spring1"} writer={"돈부리"} />
      <BoardItem title={"Spring1"} writer={"카이센동"} />
      <BoardItem title={"Spring1"} writer={"야끼니쿠"} />
      <BoardItem title={"Spring1"} writer={"야끼토리"} />
    </div>
  );
}

export default Home;
