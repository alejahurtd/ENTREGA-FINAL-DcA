const {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} = require('firebase/auth');
import { auth } from "../firebase/firebaseConfig";
import { set } from "../types/storeScreens";

interface UserData {
  email: string,
  password: string,
}

//Auth
export async function logIn (userData: UserData ){
const { email,password}= userData
const userCreation = signInWithEmailAndPassword(auth, email, password)
if(userCreation){
  set({key:Dashboard, value:})
}
}
export const getUsers = async (email: any, password: any) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password);
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		console.log('se inicio sesion', user);
		return user; // Devuelve el usuario si la autenticación es exitosa
	} catch (error) {
		alert('correo electronico o contraseña invalidos, por favor intentalo de nuevo');
		console.log(`Error al iniciar sesión`, error);
	}
};
//FinAuth
