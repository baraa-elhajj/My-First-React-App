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
  return (
      <>
        <div>
          <h1>My First React App</h1>
          <MyButton title="Click Me!"/>
          <MySecondButton disabled={true} title="Cannot Click Me!"/>
        </div>
      </>
  );
}
