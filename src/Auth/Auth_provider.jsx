import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext();

const Auth_provider = ({ children }) => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading ,setLoading] = useState(true);
  const createUserWithEmailAndPasswordFunc = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signOutFunc = () =>{
    setLoading(true);
    return signOut(auth);
  }
  const signInWithEmailAndPasswordFunc = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
 const updateProfileFunc =(updateData)=>{
  return updateProfile(auth.currentUser,updateData);
 }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
       setUser(currentUser);
       setLoading(false);
       

       return () =>{
        unSubscribe();
       }
       
    })
  },[auth,user]);
 
  

  const authInfo = {
    user,
    setUser,
    auth,
    createUserWithEmailAndPasswordFunc,
    signOutFunc,
    signInWithEmailAndPasswordFunc,
    loading,
    setLoading,
    updateProfileFunc,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default Auth_provider;
