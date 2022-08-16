
import { registerWithEmailPassword, singInWithGoogle } from "../../firebase/config"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispach ) => {
        dispach( checkingCredentials() )
        
        
    }
}

export const startGoogleSignIn = () => {
    return async( dispach ) => {
        dispach( checkingCredentials() )
        
        const result = await singInWithGoogle()
        if( !result ) return dispach( logout( result.errorMessage ) )

        dispach( login( result ) )
        
    }
}

export const startCreatinWithEmailPassword = ({ email, password, fullname }) => {
    return async( dispach ) => {
        dispach( checkingCredentials() )
        const resp = await registerWithEmailPassword({ email, password, fullname })
        console.log(resp)
    }
}