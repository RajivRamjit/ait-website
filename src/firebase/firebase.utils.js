import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';






const config = {
    apiKey: "AIzaSyDvNk1bAhtoos8aJSQsCqRUqLKPfSSxclM",
    authDomain: "ait-database-cdba4.firebaseapp.com",
    projectId: "ait-database-cdba4",
    storageBucket: "ait-database-cdba4.appspot.com",
    messagingSenderId: "954059744074",
    appId: "1:954059744074:web:82066b8ea7ece12e9717b3",
    measurementId: "G-8F2K9TPS2F"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`Users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

// export const createNewJobRequest = async (userAuth, additionalData) => {
//     if (!userAuth) return;

//     const userRef = firestore.doc(`Users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

//     if (!snapShot.exists) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             })
//         } catch (error) {
//             console.log('error creating user', error.message);
//         }
//     }

//     return userRef;
// }

//firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;