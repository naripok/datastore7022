import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useHydrated from './useHydrated'
import {DataStore} from '@aws-amplify/datastore';
import {Component, ChildComponent} from './models'

DataStore.configure({
  errorHandler: error => {
    console.log ('datastore', error)
  },
})

function App() {

  useHydrated ()

  useEffect(() => {
    const saveData = async () => {
      try {
        const parent = await DataStore.save(
          new Component({
            name: "Test"
          })
        )
        console.log("Parent saved successfully!", parent);

        const child = await DataStore.save(
          new Component({
            name: "Test"
          })
        )
        console.log("Child saved successfully!", parent);

        DataStore.save(
          new ChildComponent({
            child,
            parent
          })
        )
        console.log("Link saved successfully!", parent);

      } catch (e) {
        console.log("oh well...");
      }

    }
    let i = 100
    while (i) {
      saveData ()
      i = i - 1
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
