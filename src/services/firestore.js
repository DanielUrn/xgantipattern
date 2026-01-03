import db from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

// Your Firestore functions here

export async function addUserTo(user) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            user: user,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}