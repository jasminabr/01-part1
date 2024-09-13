// ketu behen deklarimet e konstanteve te cilat pastaj i rregjistojme ne App . mund te jen e dhe ne file te ndryshme
import Footer from "./Footer.jsx";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name},from {props.city} you are {props.age} years old
      </p>
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

// ketu eshte App i cili eshte konstante me vete , ajo kryesorja dhe ben njohjen e te gjithe komponenteve te tjere qe do na lexohen ne web

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b); //nese duam qe te dali ne console , nese fshihet nuk ben diference

  const nimi = "Pekka";
  const ika = 10;
  const kaupunki = "Helsinki";

  const friends = [
    { name: "Leevi", age: 12 },
    { name: "Venla", age: 10 },
  ];

  const greetingMesaage = arto.greet();

  arto.growOlder = function () {
    this.age += 1;
  };
  setTimeout(arto.greet.bind(arto), 1000);

  console.log(arto.age);

  arto.growOlder();
  console.log(arto.age);
  arto.greet();

  // return eshte ajo cka shfaqet ne web dhe cdo komponent i deklaruar ne App duhet te shenohet ne return,,, te gjitha i kemi shkruajtur brenda nje divi

  return (
    <div>
      <h1>Hello world</h1>
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

      <Footer />
    </div>
  );
};

export default App;
