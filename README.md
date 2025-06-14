# My First React App using Vite + TypeScript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup

1. Run `npm create vite@latest app-name -- --template react-ts` to create a React app using Vite.

2. Follow the UI and select React then TypeScript.

3. Navigate to the created directory and run `npm install` to install project dependencies.

4. Now run `npm run dev` to run the project.

## Notes

- React Hooks: React Hooks are special functions in React that allow us to use features like state and side effects in functional components — which we couldn't do before without writing a class.

- Union types can take several data types. Types are separated by a pipe "|".

- useState(): lets you remember things. When data changes, it re-renders the UI.<br>
  **Usage**: `const [state, setState] = useState(initialState);`

- useReducer(): manages complex state logic in a component (based on conditions) — especially when the state has multiple values or depends on previous state. It takes a reducer function that specifies how it should work.<br>
  **Usage**: `const [state, dispatch] = useReducer(reducerFunction, initialState);`

- useContext(): allows a component to access global data/context — like theme, user info, or language etc. — without passing properties down manually at every level. Context components are created using `createContext(MyContext);`<br>
  **Usage**: `const value = useContext(MyContext);`
