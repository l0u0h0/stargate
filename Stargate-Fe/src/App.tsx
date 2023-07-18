/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterActions } from './store/store'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => { return state });
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = (num: number) => {
    dispatch(counterActions.increase(num));
  }
  
  console.log(count);

  return (
    <>
      <div className='flex justify-evenly'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <h4>count : {count?.counter.counter}</h4>
        <button onClick={incrementHandler}>
          increment
        </button>
        <button onClick={decrementHandler}>
        decrement
        </button>
        <button onClick={() => increaseHandler(5)}>
        increaseHandler
        </button>
        <p>
          Edit <code className="logo">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
