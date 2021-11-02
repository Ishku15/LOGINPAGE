import React, { useEffect, useState } from 'react'
import LoginForm from './loginForm'
import SignupForm from './signupForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'

const backdropVariants = {
    expanded:{
        width: "190%",
        height: "1080px",
        borderRadius: "50%",
        transform : "rotate(60)"
    },
    collapsed:{
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform : "rotate(60)"
    }
}

const expadingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}



export default function AccountBox(props) {

    const [expanded,setExpanded] = useState(false)
    const [active, setActive] = useState("signin")

    const playExpandingAnimation = () =>{
            setExpanded(true)
            setTimeout(()=>{
                setExpanded(false)
            },expadingTransition.duration *1000 -1000)
    }

    const switchToSignup =()=>{
        playExpandingAnimation()
        setTimeout(()=>{
            setActive("signup")
        },400)   
    }
    const switchToSignin =()=>{
        playExpandingAnimation()
        setTimeout(()=>{
            setActive("signin")
        },400)   
    }
    const contextValue ={switchToSignup , switchToSignin}




    return (
        <AccountContext.Provider value={contextValue}>
        <div className="BoxContainer"> 
            <div className="TopContainer">
                <motion.div initial={false} transition={expadingTransition} className="BackDrop" animate={expanded? "expanded" : "collapsed"} variants={backdropVariants}/>
                    {active==='signin' && <div className="HeaderContainer">
                        <h2 className="HeaderText">Welcome</h2>
                        <h2 className="HeaderText">Back</h2>
                        <h5 className="SmallText">Please sign-in to continue</h5>
                    </div>}
                    {active==='signup' && <div className="HeaderContainer">
                        <h2 className="HeaderText">Create</h2>
                        <h2 className="HeaderText">Account</h2>
                        <h5 className="SmallText">Please sign-up to continue</h5>
                    </div>}
            </div>
            <div className="InnerContainer">
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
                
            </div>
        </div>
        </AccountContext.Provider>
    )
}
