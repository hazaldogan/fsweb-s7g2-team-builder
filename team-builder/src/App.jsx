import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MemberListing from "./components/MemberListing";
import MemberForm from "./components/MemberForm";

function App() {
  const [memberList, setMemberList] = useState([]);
  const addMember = (member) => {
    const newMemberState = [...memberList, member];
    setMemberList(newMemberState);
  };
  return (
    <>
      <div className="App">
        <div className="App-landing">
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              width="50px"
              className="logo react"
              alt="React logo"
            />
          </a>
          {memberList.length === 0 ? (
            <div>Henüz bir üyemiz yok</div>
          ) : (
            <MemberListing memberList={memberList} />
          )}
          <MemberForm addMemberCallbackProp={addMember} />

          {/*FORM*/}
        </div>
      </div>
    </>
  );
}

export default App;
