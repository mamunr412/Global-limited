import firebaseInit from "../FireBase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInit();
const UseFirebase = () => {
    const [isloading, setIsloading] = useState(true)
    const [user, setuser] = useState({})
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();


    // create user with gmai and password 
    const newUserCreate = (email, password, name, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // saved user name 
                const newUser = { email, displayName: name }
                setuser(newUser)
                // saved to user database 
                savedUser(email, name)
                // send name to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
            .finally(() => setIsloading(false));
    }

    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)
            } else {
                setuser({})
            }
            setIsloading(false);
        });
        return () => unsubscribe;

    }, []);

    // admin check 
    useEffect(() => {
        fetch(`https://lit-fjord-60113.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const login = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const Redirect_url = location.state?.from || '/home';
                history.push(Redirect_url)
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
            .finally(() => setIsloading(false));
    }

    // saved database 
    const savedUser = (email, displayName) => {
        const user = { email, displayName }
        fetch(' https://lit-fjord-60113.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .finally(() => setIsloading(false));
    }

    return {
        user,
        newUserCreate,
        login,
        logOut,
        admin,
        isloading
    }
}
export default UseFirebase;