import React, { useState } from "react";

export default function AddHabitForm({ handleAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: write code to handle form submission
    handleAddHabit(habitName);
    setHabitName("");
  };

  return (
    //TODO: add a form to add a new habit
    <div>
      <form onSubmit={handleSubmit}>
        <label>Habit: </label>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="New Habit"
        />
        <button>Add Habit</button>
      </form>
    </div>
  )
}
