import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect , useState } from 'react'
import { auth, db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

export default function AuthDetails() {
    const  [authUser, setAuthUser] = useState(null);
    const  [userDetails, setUserDetails] = useState(null);
    const [authUserUid, setAuthUserUid] = useState(null);

    // const docRef = doc(db, 'users', 'AI8wQEBb9RZfx4PgXu8BweBSfGi1')

    // getDoc(docRef).then((doc) => {
    //     setUserDetails({ ...doc.data(), id: doc.id })
    // })

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setAuthUserUid(user.uid)

                const docRef = doc(db, 'users', `${authUserUid}`)
        
                getDoc(docRef).then(async (doc) => {
                    setUserDetails({ ...doc.data(), id: doc.id })
                })
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, [authUserUid])

    // useEffect(() => {
    //     const docRef = doc(db, 'users', `${authUserUid}`)
        
    //     getDoc(docRef).then((doc) => {
    //         setUserDetails({ ...doc.data(), id: doc.id })
    //     })
    // }, [authUserUid])


  return (
    <div>
    {
        authUser ? <p>{`Signed In as ${authUser.email}`}</p> :
        <p>Signed Out</p>
        
    }
    {
        userDetails ? <p>{`Signed In as ${userDetails.firstName}`}</p> :
        <p>Can not access user details</p>
        
    }
    </div>
  )
}
