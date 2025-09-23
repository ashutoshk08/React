**Redux is a state management library.**

ContextAPI needs state-lifting because only the children can use the Context not the siblings or parent.

Redux says if you have to create a state variable then don't create inside any component rather create inside a global object called store which is accessible to all the components. It is like a centralized databases which is used by all components.
Since, ContextAPI eliminates the problem of props-drilling only. Redux also solves the problem of state lifting.

We dont want our state variable to be modified by any component directly because it can lead to accidental update.
If every component could directly mutate -

1. You would lose control over who changed what.
2. Debugging becomes impossible (Why did the cart suddenly have 5 items?).
3. Different component could overwrite each other.
4. Async operations (like API responses) could mess things up unpredictably.

👉 So Redux enforces a strict rule:

1. Components can’t directly mutate the store.
2. They must dispatch an action → which goes through a reducer → which produces the new state.

This ensures all changes follow the same predictable path.

---

Reducers are the functions that modifies the state variable.

Store me slice ko reducer ko match karana hota hai bas.

useSelector is a hook which can be named import from react-redux. useSelector global state ko lakar deta hai jiske andar slice aur uske corresponding jitne bhi state variable hai wo store rehte hai.

```javascript
globalState = {
  slice1: {
    count: 1,
  },
  slice2: {
    count: 0,
    name: "Ashutosh",
  },
};
```

Whenever we fetch/access any data from the store is called subscribe.
useSelector is also called subscribing to the event (event ko sunna).
