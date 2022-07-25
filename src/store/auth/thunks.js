import { RegisterEmailWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/provider";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));

    }
}

export const startCreatingUsersWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage} = await RegisterEmailWithEmailPassword({email, password, displayName});

        if (!ok) return dispatch(logout({errorMessage}));
       
        return dispatch(login({uid, displayName, email, photoURL}));

    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({email, password});
        console.log(result);

        if (!result.ok) return dispatch(logout(result));
       
        return dispatch(login(result));
      

    }
}

export const startLogout = () => {
    return async (dispatch) =>  {
        await logoutFirebase();

        dispatch(clearNotesLogout());
        dispatch(logout());
    }
}