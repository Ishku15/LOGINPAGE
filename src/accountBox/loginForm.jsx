import React,{useContext} from 'react'
import { AccountContext } from './accountContext'

export default function LoginForm() {
    const {switchToSignup} = useContext(AccountContext)
    return (
        <div className="commonBox">
            <form className="FormContainer">
                <input type="email" className="Input" placeholder="Email" />
                <input type="password" className="Input" placeholder="Password" />
            </form>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Forgot Password</a>
            <div className="Marginer-top" />
            <button className="SubmitButton" type="submit">Sign In</button>
            <div className="Marginer-top" />
            <button className="SubmitButtonG" type="submit">Login With Google</button>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Dont have an account? <a href="#" className="BoldLink" onClick={switchToSignup}>Sign Up</a></a>

        </div>
    )
}
