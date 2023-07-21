import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FirebaseCreds = {
    "type": process.env.REACT_APP_TYPE,
    "project_id": process.env.REACT_APP_PROJECT_ID,
    "projectId": process.env.REACT_APP_PROJECTID,
    "private_key_id": process.env.REACT_APP_PRIVATE_KEY_ID,
    "private_key": process.env.REACT_APP_PRIVATE_KEY,
    "client_email": process.env.REACT_APP_CLIENT_EMAIL,
    "client_id": process.env.REACT_APP_CLIENT_ID,
    "auth_uri": process.env.REACT_APP_AUTH_URI,
    "token_uri": process.env.REACT_APP_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.REACT_APP_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.REACT_APP_CLIENT_X509_CERT_URL,
    "universe_domain": process.env.REACT_APP_UNIVERSE_DOMAIN,
}
const app = initializeApp(FirebaseCreds);
const db = getFirestore(app);

export default db;