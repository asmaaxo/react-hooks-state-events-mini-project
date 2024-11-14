import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State for controlled inputs
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[1] || ""); // Default to first category after "All"

  // Handle text input change
  const handleTextChange = (event) => setTaskText(event.target.value);

  // Handle category dropdown change
  const handleCategoryChange = (event) => setTaskCategory(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object and pass it to onTaskFormSubmit
    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    onTaskFormSubmit(newTask);

    // Clear the form inputs after submission
    setTaskText("");
    setTaskCategory(categories[1] || ""); // Reset to default category after "All"
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {/* Exclude "All" and render options for each category */}
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;