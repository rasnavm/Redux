import logo from './logo.svg';
import './App.css';
import CounterComp from './counter';
import myReducer from './store/reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterFun from './counterFun';
const store=createStore(myReducer);

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Provider store={store}>
      {/* <CounterComp></CounterComp> */}
      <CounterFun></CounterFun>
      </Provider>
      
    </div>
  );
}

export default App;
