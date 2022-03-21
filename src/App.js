
import './App.css';
// import ClsComponent from './components/ClsComponent';
// import FnComponent from './components/FnComponet';
// import {ClickBtn} from './components/ClickBtn';
import {CounterBtns} from './components/CounterBtns';
import { PropsTech } from './components/PropsTech';
import { StateTech } from './StateTech';
function App() {
  return (
    <div>
      {/* <p>Hello World</p>
      <p>Componets</p>
      <FnComponent></FnComponent>
      <ClsComponent></ClsComponent>
      <ClickBtn></ClickBtn> */}
      {/* <CounterBtns></CounterBtns> */}
      {/* <PropsTech name = "A" tech = "React"/>
      <PropsTech name = "B" tech = "JS"/>
      <PropsTech name = "C" tech  = "CSS"/> */}
      <StateTech></StateTech>
    </div>
      
  );
}

export default App;
