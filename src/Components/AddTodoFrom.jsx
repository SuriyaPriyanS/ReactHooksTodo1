import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [descripation, setDescripation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !descripation) {
      setError("Please fill in all fields");
      return;
    }

    onAdd({ name, descripation });
    setName("");
    setDescripation("");
    setError("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Description"
            value={descripation}
            onChange={(e) => setDescripation(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </div>
        {error && <p className="error-message danger">{error}</p>}
      </form>
    </div>
  );
};

export default AddTodoForm;
