import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const randomColor = () => {
  let str = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return color;
};

// Child container component
const ChildContainer = () => {
  const bgColor = randomColor(); // Generate a random background color
  const containerStyle = {
    backgroundColor: bgColor,
    maxWidth: "100%", // Set the maximum width of each child container
    margin: "30px", // Center the child container horizontally
    padding: "20px", // Add padding for spacing
    textAlign: "center", // Center text horizontally
    color: "#fff",
    height: "80px ", // Text color
  };

  return <div style={containerStyle}>{bgColor}</div>;
};

// Parent container component
const ParentContainer = ({ numberOfContainers }) => {
  const containers = [];

  for (let i = 0; i < numberOfContainers; i++) {
    containers.push(<ChildContainer key={i} />);
  }
  return <div>{containers}</div>;
};

// App component
const App = () => {
  const numberOfContainers = 5; // Adjust the number of child containers as needed

  return (
    <div className="App">
      <h1>Random Colored Containers</h1>
      <ParentContainer numberOfContainers={numberOfContainers} />
    </div>
  );
};

const root = document.getElementById("root");
// Render the App component using the ReactDOM package
ReactDOM.render(<App />, root);
