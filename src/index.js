import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import {
	FirebaseAuthProvider,
	FirebaseAuthConsumer,
	IfFirebaseAuthed,
	IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

import { config } from "./firebase.config";
import store from "./app/store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
	const { mockXHR } = require("./mock");
	mockXHR();
}

ReactDOM.render(
	<FirebaseAuthProvider firebase={firebase} {...config}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</FirebaseAuthProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
