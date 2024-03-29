
# React Currency Converter

This project is a simple React application that allows users to convert between different currencies. It utilizes an external API to fetch real-time exchange rates and provides a user-friendly interface for currency conversion.

## Features

- Convert between different currencies using real-time exchange rates.
- Select base and target currencies from a dropdown menu.
- Display conversion results instantly.




### Api Used
[Api](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json) : `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

# useId
- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
- useId should not be used to generate keys in a list
- Example:
``` javascript
import { useId } from 'react';

export default function Form() {
  const myId = useId();
  return (
    <form>
      <label htmlFor={MyId}>First Name:</label>
      <input id={MyId} type="text" />
      <hr />
    </form>
  );
}
```
