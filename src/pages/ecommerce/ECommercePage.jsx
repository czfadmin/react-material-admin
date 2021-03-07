import { Container, withStyles } from "@material-ui/core";

const styles = (theme) => ({});
function ECommercePage(props) {
	const { classes } = props;
	return (
		<Container component="main" maxWidth={false} className="min-h-full">
			<div className="flex">
				{`Introduction#
				Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.

				How to Read This Tutorial#
				This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see the tutorials linked in the "Tutorials Overview" page.

				For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on a typical Create-React-App folder structure where all the application code is in a src, but the patterns can be adapted to whatever project or folder setup you're using.

				The Redux+JS template for Create-React-App comes with this same project setup already configured.

				Usage Summary#
				Install Redux Toolkit and React-Redux#
				Add the Redux Toolkit and React-Redux packages to your project:

				npm install @reduxjs/toolkit react-redux
				Create a Redux Store#
				Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

				app/store.js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

Provide the Redux Store to React#
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
Create a Redux State Slice#
Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.`}
			</div>
		</Container>
	);
}
export default withStyles(styles)(ECommercePage);
