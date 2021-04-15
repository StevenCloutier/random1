
import  React, {useStae} from'react';
import './App.scss';

function App() {
 
  let quote= " A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."
  let author= " Bob Dylan"
  return (
    <div id="quote-box">
    <div className="App">
      <header className="App-header">
        <p>
        "{quote}"</p>
        <p> -{author}</p>
        <button></button>
      <a  id="tweet-quote"  href="button"></a>  
      
      </header>
    </div> 
    </div>
  );
}

export default App;
