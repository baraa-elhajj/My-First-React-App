import { useState } from "react";

interface MyButtonProperties {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

function MyButton({title}: {title: string}) {
  return (
    <button>{title}</button>
  );
}

function MySecondButton(props: MyButtonProperties) {
  return (
    <button disabled={props.disabled}>{props.title}</button>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
      <>
        <div>
          <h1>My First React App</h1>
          <MyButton title="Click Me!"/>
          <MySecondButton disabled={true} title="Cannot Click Me!"/>
          <button onClick={ () => setCount(count + 1)}>Counter</button>
          <button onClick={ () => setCount(0)}>Clear</button>
          <h3>Count is {count}</h3>
        </div>
      </>
  );
}
