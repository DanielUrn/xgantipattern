import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseJson from '../../xgantipatternFirebase.json'
const firebaseConfig = firebaseJson

firebase.initializeApp(firebaseConfig);

export default firebase;