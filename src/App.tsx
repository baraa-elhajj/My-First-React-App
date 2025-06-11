function MyButton({title}: {title: string}) {
  return (
    <button>{title}</button>
  );
}

export default function App() {
  return (
      <>
        <div>
          <h1>My First React App</h1>
          <MyButton title="Click Me!"/>
        </div>
      </>
  );
}
