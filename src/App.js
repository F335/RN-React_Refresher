import React from "react";

import GoalList from "./components/GoalList";
import "./App.css";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg1", text: "Learn all about the Course Main Topic" },
    { id: "cg1", text: "Help other students in the Course Q&A" },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
