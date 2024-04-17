import "./App.css";
import React, { useState, useEffect } from "react";

const name = "TEST-USER";

function Messages() {
  const [resp, setResp] = useState([]);
  useEffect(() => {
    myFu().then((data) => {
      setResp(data.messages);
    });
  }, []);

  return resp.map((message) => {
    return <p className="messageStyle">{message}</p>;
  });
}

function App() {
  const [messageInput, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Messages />
      <button
        onClick={async () => {
          await post({ name: name, time: parseTime(), content: messageInput });
        }}
      >
        send
      </button>
      <input type="text" onChange={handleChange}></input>
    </>
  );
}

function parseTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
}

export default App;

async function myFu() {
  let response = await fetch("http://127.0.0.1:3001/api", {
    method: "GET",
  });
  return response.json();
}

async function post(send) {
  let response = await fetch("http://127.0.0.1:3001/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(send),
  });
  let result = await response.json();
  alert(result.message);
}
