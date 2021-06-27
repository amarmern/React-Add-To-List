import React from "react";
import { v4 as uuidv4 } from "uuid";
const initialList = [
  {
    id: "",
    name: ""
  }
];

export default function App() {
  const [list, setList] = React.useState(initialList);

  const [name, setName] = React.useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const newName = list.concat({ name, id: uuidv4() });
    setList(newName);
    setName("");
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button onClick={handleClick}> Add</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
