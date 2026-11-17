import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

/* const members = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 12 },
  { name: "John", age: 18 },
]; */

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [members, setMembers] = useState([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 12 },
    { name: "John", age: 18 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // *? first method
    // setMembers([...members, { name, age }]);
    setMembers((previousData) => [...previousData, { name, age }]);
    setName("");
    setAge(0);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit">Submit</button>
      </form>

      {members.map((member) => (
        <Card name={member.name} age={member.age} />
      ))}
    </div>
  );
}

export default App;
