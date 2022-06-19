import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Seed the database


// Configure Firebase
const config = {}

// Initialize Firebase
const firebase = Firebase.initializeApp(config)


// Export the database for use by the rest of the app
export { firebase }