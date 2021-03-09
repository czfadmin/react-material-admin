import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/token/tokenSlice";
import userReducer from "../features/user/userSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";
import drawerReducer from "../features/drawer/drawerSlice";
export default configureStore({
	reducer: {
		token: tokenReducer,
		user: userReducer,
		snackbar: snackbarReducer,
		drawer: drawerReducer,
	},
});
