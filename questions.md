### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

- PureComponent only re-renders based on a shallow comparison of its state and props while Component will re-render when the parent re-renders.
- PureComponent will not re-render issues when mutable props are passed to it.

### 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

This is because state changes in Context will trigger ShouldComponentUpdate life-cycle method which will cause unnecessary re-renders.

### 3. Describe 3 ways to pass information from a component to its PARENT.

- By using a callback/setter function it received from its parent.
- By using a global state such as redux
- By leveraging the Context API

### 4. Give 2 ways to prevent components from re-rendering.

- By wrapping a component with React.memo
- By placing the state where it is consumed e.g a parent component does not need to hold the state of a child component it does not consume.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment helps us to solve the limitation of having only a root element in a component. Wrapping elements with a fragment instead of a div node might cause styling issues.

### 6. Give 3 examples of the HOC pattern.

- Wrapping a functional component with React.memo
- Sharing logic with composition e.g connect in redux

### 7. What's the difference in handling exceptions in promises, callbacks and async…await?

- In Promises exceptions can be handled by using the .catch() method.
- In callbacks, the error is usually passed as an argument.
- In async functions, the await state should be wrapped in a try..catch block to gracefully handle the exception

### 8. How many arguments does setState take and why is it async.

The this.setState method takes 2 arguments; the first is the state and the second is a callback function that gets called after the state is updated

### 9. List the steps needed to migrate a Class to Function Component.

- Convert the class to a function
- Remove the constructor
- define the class methods as an embedded functions
- Handle life-cycle changes using useEffect
- Refactor the state to use useState hook
- Remove the render method and return the react nodes directly

### 10. List a few ways styles can be used with components.

- Import css file containing the needed styles
- Define style properties directly passing style as prop

### 11. How to render an HTML string coming from the server.

We can render html strings using by passing them to dangerouslySetInnerHTML prop on a html element
