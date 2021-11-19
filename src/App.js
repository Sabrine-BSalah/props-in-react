import './App.css';
import ChildComponent from './Components/ChildComponent';

function App() {

  const getName = name => alert(`Hello, i am ${name}`)

  const callBackFn = data => alert(data)

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <ChildComponent
        name="John"
        age={20}
        isStudent={true}
        skills={["html", "css", "js"]}
        lang={{ english: "excellent", french: "good" }}
        getName={getName}
        callBackFn={callBackFn}
      >
        <img src="https://anovatn.com/wp-content/uploads/2016/06/avatarTransparent.png" alt="props" width="300px" />
      </ChildComponent>
    </div>
  );
}

export default App;
