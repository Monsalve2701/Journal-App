import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDOSaMBNL4XH9G6iT6QpLjkWwBIDhSxWKM",
  authDomain: "react-curso-cd6f9.firebaseapp.com",
  projectId: "react-curso-cd6f9",
  storageBucket: "react-curso-cd6f9.appspot.com",
  messagingSenderId: "130663683752",
  appId: "1:130663683752:web:212c189c4c2624eaadd49d"
};

// Initialize Firebase 
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

const googleProvider = new GoogleAuthProvider() 

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email,  photoURL , uid } = result.user
        
        return {
            ok: true,
            displayName , email, photoURL, uid
        }
        

    } catch (error) {

        return {
            ok: false,
        }

    }
}

export const registerWithEmailPassword = async ({ fullname, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        const { uid, photoURL } = resp.user
        console.log(resp)

        updateProfile( FirebaseAuth.currentUser, {
            displayName: fullname,
        } )

        return {
            ok: true, 
            uid, photoURL , email , fullname
        }
        
    } catch (error) {

        return{ ok: false , errorMessage: error.message }

    }
}

export const signInUserPass = async( email , password ) => {
    const resp = await signInWithEmailAndPassword( FirebaseAuth, email , password )
    console.log(resp)
}

