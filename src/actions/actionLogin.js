import { types } from '../types/types'
import { getAuth, signInWithPopup } from "firebase/auth"
import { google, facebook } from '../firebase/FirebaseConfig'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid,user.displayName))
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
                dispatch(loginSincrono(user.uid,user.displayName))
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