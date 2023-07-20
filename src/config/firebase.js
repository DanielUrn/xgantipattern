import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'firebase-cred.json');
const jsonDataString = fs.readFileSync(filePath, 'utf-8');
const jsonData = JSON.parse(jsonDataString);
const app = initializeApp(jsonData);
const db = getFirestore(app);

export default db;