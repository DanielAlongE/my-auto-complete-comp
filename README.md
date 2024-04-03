# Getting Started with AsyncAutoCompleteSelect

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Sample

```js
const rainbowOptions = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];

const MyComp = () => <AutoCompleteSelect
        id="single-select"
        label="Single select option"
        placeholder="Pick your favourite Rainbow color"
        options={rainbowOptions}
        onSelect={console.log}
      />
```


<img width="452" alt="image" src="https://github.com/DanielAlongE/my-auto-complete-comp/assets/10385516/7345cf54-a0de-499c-9be4-f0e5da44001f">

<img width="443" alt="image" src="https://github.com/DanielAlongE/my-auto-complete-comp/assets/10385516/19812e58-e959-4a9b-be6f-cde6dee169e7">

<img width="436" alt="image" src="https://github.com/DanielAlongE/my-auto-complete-comp/assets/10385516/8d8a6ffa-418a-48b4-9e50-351615f7f6d5">


