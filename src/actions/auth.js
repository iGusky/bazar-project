import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispath ) => {
        // dispath( startLoading() );
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispath(
                    login( user.uid, user.displayName )
                )
                // dispath( finishLoading() );
            })
            .catch( err  => {
                Swal.fire('Error', err.message, 'error');
            } )
    }
}

export const startGoogleLogin = () => {
    return ( dispath ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispath (
                    login( user.uid, user.displayName )
                )
            })
    }
}


export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispath ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user })  => {
                await user.updateProfile({ displayName: name });
                dispath(
                    login( user.uid, user.displayName )
                )
            })
            .catch( err => {
                Swal.fire('Error', err.message, 'error');
            } )
    }
}

export const startLogout = () => {
    return async ( dispath ) => {
        await firebase.auth().signOut();

        dispath( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})