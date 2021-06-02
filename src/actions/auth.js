import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { clienteAxios } from '../config/axios'
import Swal from "sweetalert2";

export const startLoginWithEmailPassword= (email, password) => {
  return (dispath) => {
    // dispath( startLoading() );
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispath(login(user.uid, user.displayName));
        // dispath( finishLoading() );
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startLoginWithEmailPasswordMongo = (email, password) => {
  return async (dispatch) => {
        const usuario = {
          email,
          password
        }
        // AUtenticar ususario
        try {


          const respuesta = await clienteAxios.post('/iniciar-sesion', usuario);
          const { token, user } = respuesta.data;
          console.log(respuesta);
          dispatch(login(user.uid, user.displayName));
          localStorage.setItem('token', token);
         
          Swal.fire(
            'Login correcto',
            'Has iniciado sesión',
            'success'
          )
        } catch (error) {
          if( error.response ){
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error 1',
              text : error.response.data.mensaje
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error 2',
              text : error
            })
          }
          
        }
  }
}

export const startGoogleLogin = () => {
  return (dispath) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispath(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispath) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispath(login(user.uid, user.displayName));
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startLogout = () => {
  return async (dispath) => {
    await firebase.auth().signOut();

    dispath(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
