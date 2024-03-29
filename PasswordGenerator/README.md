# React Password Generator

This project is a simple React application that generates random passwords based on user-selected criteria. It provides a user-friendly interface for customizing password length and including various character types.

## Features

- Generate random passwords based on user-selected criteria.
- Customize password length and numbers, and special characters.
- Copy generated passwords to the clipboard with a single click.
- User-friendly interface with options to generate multiple passwords.


# 1. useEffect

- When you provide a dependencies array to useEffect, React will run the effect function after the initial render and after every update if any of the dependencies have changed since the last render.
- If the dependencies array is empty ([]), the effect will only run after the initial render.
- If the dependencies array is not provided, the effect will run after every render.
---

# 2. useRef
- Hook that lets you reference a value that’s not needed for rendering
- useRef returns an object with a single property: current

## example:
``` javascript
function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}
  
function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}
```

# useCallback
-  Hook that lets you cache a function definition between re-renders
- On the initial render, useCallback returns the fn function you have passed.
- During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.
- When the dependencies passed to useCallback change, the useCallback hook will recompute the memoized callback function with the new dependencies, and it will return this new function