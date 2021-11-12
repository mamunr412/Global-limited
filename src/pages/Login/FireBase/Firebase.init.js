
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";
const firebaseInit = () => {
    initializeApp(firebaseConfig);

}
export default firebaseInit;