
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTH,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSID,
  appId: REACT_APP_ID
};
const app = initializeApp(firebaseConfig);