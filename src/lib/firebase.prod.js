import * as Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import { seedDatabase } from '../seed'


// Configure Firebase
const config = {
    apiKey: 'AIzaSyCatg_LS7q5OFdXDjhYYdBSjzs6RVH2Cck',
	authDomain: 'netflix-clone-f2579.firebaseapp.com',
	projectId: 'netflix-clone-f2579',
	storageBucket: 'netflix-clone-f2579.appspot.com',
	messagingSenderId: '585476757133',
	appId: '1:585476757133:web:a43f12e7f03295946474c4',
}

// Initialize Firebase
const firebase = Firebase.initializeApp(config)

// Seed the database once to avoid duplicate data
// seedDatabase(firebase)


// Export the database for use by the rest of the app
export default firebase 
