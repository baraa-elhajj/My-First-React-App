import { MonitorCog, Moon, Sun } from "lucide-react";
import { createContext, useContext, useReducer, useState } from "react";

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

// useReducer() example
interface State {
  count: number
};

type CounterAction = { type: "reset" } | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0};

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      // We used the spread operator to copy and preserve all of the state properties (in this case we only have one) 
      // then update the one we want. If duplicated keys exist, the last one takes over.
      return { ...state, count: action.value }; // → { count: oldValue, count: action.value } → { count: action.value }
    default:
      throw new Error("Unknown action");
  }
}

// useContext() example
type Theme = "light" | "dark" | "system"
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default function App() {
  // useState() hook
  const [count, setCount] = useState(0);

  // useReducer() hook
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const add = () => dispatch({ type: "setCount", value: state.count + 1 });
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const substract = () => dispatch({ type: "setCount", value: state.count - 1 });
  const substractFive = () => dispatch({ type: "setCount", value: state.count - 5 });
  const reset = () => dispatch({type: "reset"});

  // useContext() example
  const [theme, setTheme] = useState<Theme>('light');

  return (
      <>
        <div>
          <h1>My First React App</h1>
          <h2>Custom Button Components</h2>
          <MyButton title="Click Me!"/>
          <MySecondButton disabled={true} title="Cannot Click Me!"/>
        </div>

        <div>
          <h2>Normal Counter</h2>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <h3>Count is {count}</h3>
        </div>

        <div>
          <h2>Advanced Counter</h2>
          <button onClick={add}>+</button>
          <button onClick={addFive}>+5</button>
          <button onClick={substract}>-</button>
          <button onClick={substractFive}>-5</button>
          <button onClick={reset}>Reset</button>
          <h3>Count is {state.count}</h3>
        </div>

        <div>
          <h2>Display Current Theme</h2>
          <h4>Without &lt;ThemeContext&gt;:</h4>
          <MyComponent />
          <h4>Wrapped by &lt;ThemeContext&gt;:</h4>
          <ThemeContext value={theme}>
            <MyComponent />
          </ThemeContext>
          <button onClick={() => setTheme('light')}><Sun size={24}/></button>
          <button onClick={() => setTheme('dark')}><Moon size={24}/></button>
          <button onClick={() => setTheme('system')}><MonitorCog size={24}/></button>
        </div>
      </>
  );
}
