import "./App.css";
import Card from "./components/Card";

const members = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 12 },
  { name: "John", age: 18 },
];

function App() {
  return (
    // <div className="App">
    //   {members.map((member) => (
    //     <Card name={member.name} age={member.age} />
    //   ))}
    // </div>


    <div className="App">
      {members
      .filter((member) => member.age >= 18)
      .sort((a, b) => a.age - b.age)
      .map((member) => (
        <Card name={member.name} age={member.age} />
      ))}
    </div>

  );
}

export default App;
