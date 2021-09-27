import { types } from '../types/types'
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { google, facebook } from '../firebase/FirebaseConfig'
import Swal from 'sweetalert2'


export const loginEmailPassword = (email, password) => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    loginSincrono(user.uid, user.displayName)
                )
                Swal.fire({
                    title: 'Bienvenido',
                    showConfirmButton: true,
                    confirmButtonText: 'Continuar'
                }).then((result) => {
                    if (result.isConfirmed) {
                      localStorage.setItem('user', user.uid)
                    }
                  })

            })
            .catch((e) => {
                Swal.fire({
                    title: 'El usuario no existe',
                    timer: 2000,
                    showConfirmButton: false
                })

            })
    }

}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e)
            })
    }
}


export const loginSincrono = (id, displayname) => {

    return {
        type: types.login,
        payload: {
            id,
            displayname,
        }
    }
}