import "./styles.css";
import { useState } from "react";

export default function App() {
  const [check, setCheck] = useState("");

  const [Fruits, setFruits] = useState(["Mango", "banana", "apple", "Orange"]);
  const handleChange = (id, item) => {
    setCheck(item);
  };
  const deleteItem = (id) => {
    setFruits(Fruits.filter((fruit) => Fruits.indexOf(fruit) !== id));
  };
  return (
    <div className="App">
      <h1>Fruits List</h1>
      {Fruits.map((item, i) => {
        return (
          <ul>
            <li>
              {item}
              <input
                id={i}
                type="checkbox"
                checked={Fruits[i] === check}
                onChange={(e) => handleChange(i, item)}
              />
              {Fruits[i] === check && (
                <button onClick={(e) => deleteItem(i)}>x</button>
              )}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
