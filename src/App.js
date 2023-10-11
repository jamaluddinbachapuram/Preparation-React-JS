/* 1. Component Creation and Rendering: 
Write a React functional component called UserCard that takes name and age as props and displays them in a card format. Render this component with the provided props and display it on the page */

import React from 'react'

import UserCard from './components/UserCard'

const App = () => {
  return (
    <div>
      <h1>User Information</h1>
      <UserCard name="Rahul" age="30" />
    </div>
  )
}

export default App

/* 2. State and Event Handling:

Create a React class component called Counter that initializes a state variable count to 0. Implement two buttons: one to increment the count and one to decrement the count. Display the current count and update it accordingly when the buttons are clicked. */

/* 3. Handling Forms and Controlled Components:

Create a form component called LoginForm with input fields for "username" and "password". Implement controlled components for the inputs and display the input values as the user types. On form submission, log the input values to the console. */

/* 4. Lists and Keys:

Create a React component called TodoList that takes an array of todo items as a prop and displays them as an unordered list. Each item should have a unique key. Display the list of todo items using this component.
*/
import TodoList from './TodoList'

const App = () => {
  const todoItems = ['Task 1', 'Task 2', 'Task 3']

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoItems={todoItems} />
    </div>
  )
}

export default App

/* 5. Conditional Rendering:

Create a React component called WeatherDisplay that takes a prop temperature. If the temperature is above 30°C, display a message "It's hot outside!". If it's below 30°C, display a message "It's cool outside!". 
*/
import WeatherDisplay from './WeatherDisplay'

const App = () => {
  const temperature = 25

  return (
    <div>
      <h1>Weather Information</h1>
      <WeatherDisplay temperature={temperature} />
    </div>
  )
}

export default App

/* 6. API Integration and Fetching Data:

Fetch data from a fake API (e.g., JSONPlaceholder) using the fetch API or axios. Display the fetched data in a React component, showing a list of items retrieved from the API. 
*/
import MyComponent from './MyComponent'

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App

/* 7. Routing and Single Page Application:

Create a React application that uses React Router. Define routes for a home page, about page, and contact page. Implement navigation using Link components and ensure that the appropriate component is displayed for each route.
*/
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App

/* 8 State Management with Context API:

Create a ThemeContext using React Context API to manage the theme of your application. Implement a button that toggles between light and dark themes and updates the application's styling accordingly.
*/
import {ThemeProvider} from './ThemeContext'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Content />
      </div>
    </ThemeProvider>
  )
}

const Content = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1 className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        Theme Toggle Example
      </h1>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    </div>
  )
}

export default App
