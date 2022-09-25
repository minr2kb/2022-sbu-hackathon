// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	// signOut
	// getRedirectResult,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

const user = new GoogleAuthProvider();
export const signInWithGoogle = () => {
	signInWithPopup(auth, user)
		.then(result => {
			console.log(result);
			// const name = result.user.displayName;
			// const email = result.user.email;
			// const profilePic = result.user.photoURL;
			// const credential = GoogleAuthProvider.credentialFromResult(result);
			// const token = credential.accessToken;

			// localStorage.setItem("name", name);
			// localStorage.setItem("email", email);
			// localStorage.setItem("profilePic", profilePic);
		})
		.catch(err => {
			console.log(err);
		});
};
