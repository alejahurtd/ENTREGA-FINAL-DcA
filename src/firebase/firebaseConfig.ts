// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: 'AIzaSyCU42uuS55TFRUWS2KJZzoQKjhTJT1Jciw',
	authDomain: 'proyecto-final-c5690.firebaseapp.com',
	projectId: 'proyecto-final-c5690',
	storageBucket: 'proyecto-final-c5690.appspot.com',
	messagingSenderId: '183150005663',
	appId: '1:183150005663:web:791e23ff92190ffddf41aa',
	measurementId: 'G-YKJ4DK3G23',
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// KEY DE GERALDINE _________________________________
