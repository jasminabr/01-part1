// ketu behen deklarimet e konstanteve te cilat pastaj i rregjistojme ne App . mund te jen e dhe ne file te ndryshme
import Footer from "./Footer.jsx";
import Button1 from "./Button1.jsx";
import Display from "./Display.jsx";
import { useState } from "react";
//import { setState } from "react";
import History from "./History.jsx";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name} you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};
const Display1 = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
// ketu eshte App i cili eshte konstante me vete , ajo kryesorja dhe ben njohjen e te gjithe komponenteve te tjere qe do na lexohen ne web

const App = (props) => {
  // kjo ishte per renderin qe del ne console
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };
  //setTimeout(() => setCounter(counter + 1), 1000);
  //console.log("rendering", +counter);

  const now = new Date();
  const a = 10;
  const b = 20;

  const nimi = "Pekka";
  const ika = 10;
  const kaupunki = "Helsinki";

  const friends = [
    { name: "Leevi", age: 12 },
    { name: "Venla", age: 10 },
  ];

  const greetingMesaage = arto.greet();

  // arto.growOlder = function () {
  //   this.age += 1;
  // };
  arto.greet();

  //pjesa 1.d
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    console.log("left before", left);
    setLeft(left + 1);
    console.log("left after", left);
    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    console.log("right before", right);
    setRight(right + 1);
    console.log("right before", right);
    setTotal(left + right);
  };

  //Hookien säännöt

  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  // return eshte ajo cka shfaqet ne web dhe cdo komponent i deklaruar ne App duhet te shenohet ne return,,, te gjitha i kemi shkruajtur brenda nje divi

  return (
    <div>
      <div>
        <h2> Page re-rendering</h2>
        <Display counter={counter} />
        <Button1 onClick={increaseByOne} text="plus" />
        <Button1 onClick={setToZero} text="zero" />
        <Button1 onClick={decreaseByOne} text="minus" />
      </div>

      <hr></hr>

      <h2>Hello world</h2>
      <p>Now it is {now.toString()}</p>
      <p>
        {" "}
        {a} plus {b} is {a + b}{" "}
      </p>
      <hr></hr>
      <section>
        <h1>Greetings</h1>
        <Hello name="Jasmina" city="Tirana" age={25 + 3} />
        <Hello name={nimi} city={kaupunki} age={ika} />
      </section>
      <hr></hr>
      <h2>Friends</h2>
      <p>
        {friends[0].name} is {friends[0].age} years old.
      </p>
      <p>
        {friends[1].name} is {friends[1].age} years old.
      </p>
      <hr></hr>

      <div>
        <p>{greetingMesaage}</p>
        <p>Arto is {arto.age} years old.</p>
        <p>Education : {arto.education}</p>
      </div>
      <hr></hr>
      <div>
        <h2>Event handling</h2>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
        <p>total {total}</p>
      </div>

      <hr></hr>

      <div>
        <Display1 value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
