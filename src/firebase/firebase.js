import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl8FYIAd1LoWByhZ0JAJoMar26LQl45Ww",
  authDomain: "battersuccessrates.firebaseapp.com",
  projectId: "battersuccessrates",
  storageBucket: "battersuccessrates.firebasestorage.app",
  messagingSenderId: "295535221945",
  appId: "1:295535221945:web:1670b1322d64281cb38f68",
  measurementId: "G-2J9VD6DJSG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };