import React , {useContext} from 'react'
import { AccountContext } from './accountContext'

export default function SignUp() {
    const {switchToSignin} = useContext(AccountContext)
    return (
        <div className="commonBox">
            <form className="FormContainer">
                <input type="text" className="Input" placeholder="Full Name" />
                <input type="email" className="Input" placeholder="Email" />
                <input type="password" className="Input" placeholder="Password" />
                <input type="password" className="Input" placeholder="Confirm Password" />
            </form>
            <div className="Marginer-top" />
            <div className="Marginer-top" />
            <button className="SubmitButton" type="submit">Sign Up</button>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Aldready have an account <a href="#" className="BoldLink" onClick={switchToSignin}>Sign In</a></a>
            <div className="Marginer-top" />

        </div>
    )
}
