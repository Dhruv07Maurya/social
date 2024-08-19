import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Formm from "./components/Formm";
import { PostContext } from "./store/Post-context";

function App() {
  const [state, setstate] = useState("Home");
  const [Post, setPost] = useState([
    {
      title: "person data",
      desc: "the card title and make up the bulk of the card's content",
    },
  ]);
  function addPost(titlee,descc){
    setPost(...Post,{titlee:newtitle,descc:newdesc})
  }
  return (
    <>
      <div className="home">
        <Sidebar state={state} setstate={setstate}></Sidebar>
        <div className="main-page">
          <Navbar></Navbar>
          <PostContext.Provider>
            {state == "Home" ? <Card Post={Post}></Card> : <Formm></Formm>}
          </PostContext.Provider>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
