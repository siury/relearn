import React, { useState } from "react";

export default function AboutPage() {
  const [notes, setNotes] = useState([]);
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    console.log(event);
    setNotes([...notes, feedback]);
    setFeedback("");
    event.preventDefault();
  }

  return (
    <div className="page">
      <h1>About The Guy who Made this Page</h1>
      <h2>Very Very, Incredibly Boring</h2>
      <ul>
        <li>But at least he knows how to cook a mean taco</li>
        {notes.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
      <p className="formFooter">
        Gimme some feedback?
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </p>
    </div>
  );
}
