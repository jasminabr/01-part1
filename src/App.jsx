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

const footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/jasminabr/">Jasminabr</a>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const nimi = "Pekka";
  const ika = 10;
  const kaupunki = "Helsinki";

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <hr></hr>

      <section>
        <h1>Greetings</h1>
        <Hello name="Jasmina" age={25 + 3} />
        <footer />
        <Hello name={nimi} city={kaupunki} age={ika} />
      </section>
      <hr></hr>
    </div>
  );
};

export default App;
