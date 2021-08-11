### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front-end framework designed to help create the front-end of web applications quickly and efficiently. It is very flexible to use.

- What is Babel?
  Babel is a Javascript compiler that converts newer javascript code such as JSX into a backwards compatible version of javascript that can be used by most browsers.

- What is JSX?
  JSX is an HTML-like syntax that allows the user to insert HTML through javascript.

- How is a Component created in React?
  A component in React is created by creating a function which returns a snippet of HTML.

- What are some difference between state and props?
  Props are "stateless" variables that are passed down to a component from its parent that the component then uses. State, on the other hand, are "stateful" variables that are managed directly by the component and can persist even through re-renders of the application.

- What does "downward data flow" refer to in React?
  Downward data flow in React refers to the passing down of data from parent components to its children. This includes state and prop variables.

- What is a controlled component?
  A controlled component is a component that takes its values from props and affects changes through callbacks. The parent component controls is by handling the callback and its own state.

- What is an uncontrolled component?
  An uncontrolled component is a component that stores its own state internally and interacts with the DOM using a ref.

- What is the purpose of the `key` prop when rendering a list of components?
  Key props are used in component lists to help React identify when and which component has changed and manage them accordingly.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Using an array index is a poor choice because it can lead to unstable behavior from the component, for instance if the array is altered by reordering it or adding/removing from it, it can impact the desired performance of the component.

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a React hook that allows the user to run "side effects" such as calling an API, starting a timer, or manually changing the DOM.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  Does a change to a ref value cause a rerender of a component? useRef creates a mutable reference object whose value is set to whatever is passed to it. The object persists throughout the life of the parent component and does not cause a rerender of the component if the ref value is changed

- When would you use a ref? When wouldn't you use one?
  You would want to use a ref when making changes directly to a DOM element without causing a rerender, such as managing focus. You would not want to use refs when using class-based components.

- What is a custom hook in React? When would you want to write one?
  A custom hook is a user-defined hook similar to useState or useEffect that can be used across multiple components. You would write one any time you have shared functionality across components that can be broken out into its own hook and then called later by the various components.
