# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a powerful UI library. It's used to build equally powerful applications via the virtual DOM. Because the user interfaces of today have so much changing data, ReactJS solves that problem. Users now have smooth experiences - both developers and users alike!

2. What does it mean to think in react?

To break the project down into smaller components. The project is put together as a static project before state is added, giving it functionality.

3. Describe state.

State is mutable data that can be held and passed into components.

4. Describe props.

Props are immutable data that are passed around for users to interact with. These are passed around through functional components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affects the something outside of the scope of the executed function. To sync side effects to state or prop changes, pass a dependency array as the second argument to the effect hook. To have the effect fire when it mounts, leave the dependency array blank.
