import React, { createContext, useEffect, useState } from 'react';
import {signInWithEmailAndPassword,  createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../firebase.init'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user , setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser =(email, password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email ,password);
    }
    const singOutUser =()=>{
        setloading(true);
        return signOut(auth);
    }
   
// last e je login korse tar ovserber 
// useEffect er modde kora lagbe
    // onAuthStateChanged(auth, currentUser=>{
    //     if(currentUser){
    //         console.log('user log in', currentUser);
    //         setuser(currentUser);
    //     }
    //     else{
    //         console.log('no user loged in');
    //         setuser(null)
    //     }
    // })

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setuser(currentUser);
            setloading(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        singInUser,
        user,
        singOutUser,
        loading
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* 
provider er peter vitore ja thakbe take jekono jayga theke access kora jabe
*/}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a default value
 * 
 * [ attention please  !! ]
 * 4. used the authProvider in the main.jsx 
 * 5.access the children inside the authProvider inside the main.jsx 
 * 
 * 6. access auth contxt
*/