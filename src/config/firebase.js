import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseJson from '../xgantipatternFirebase.json'

const app = initializeApp(firebaseJson);
const db = getFirestore(app);

export default db;