# Currency Converter

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

# Custom Hooks
