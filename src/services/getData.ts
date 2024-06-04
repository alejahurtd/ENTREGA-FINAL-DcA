const { collection, query, onSnapshot } = require('firebase/firestore');
import { db } from '../firebase/firebaseConfig';
import { postStore } from '../store/postStore';
import { setPosts, setTwets } from '../store/postSlice';

function getPosts() {
	const q = query(collection(db, 'posts'));
	onSnapshot(q, (newData: { docs: any[] }) => {
		const updatedPosts = newData.docs.map((doc: { data: () => any }) => doc.data());
		postStore.dispatch(setPosts(updatedPosts));
	});
}

function getTwets() {
	const q = query(collection(db, 'twets'));
	onSnapshot(q, (newData: { docs: any[] }) => {
		const updatedTwets = newData.docs.map((doc: { data: () => any }) => doc.data());
		postStore.dispatch(setTwets(updatedTwets));
	});
}

export function getData() {
	getPosts();
	getTwets();
}
