import firebase from '../config/firebase';

const db = firebase.firestore();

// Your Firestore functions here

export function addTelegramUser (){
    db.collection('websiteUsers')
}

export default db;