import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { store } from '../store/store';
import { setPosts, setTwets } from '../store/postsSlice';
import { Post, Twet } from '../store/postsSlice';

function getPosts() {
	const q = query(collection(db, 'posts'));
	onSnapshot(q, (newData) => {
		const updatedPosts = newData.docs.map((doc) => doc.data());
		store.dispatch(setPosts(updatedPosts));
	});
}

function getTwets() {
	const q = query(collection(db, 'twets'));
	onSnapshot(q, (newData) => {
		const updatedTwets = newData.docs.map((doc) => doc.data());
		store.dispatch(setTwets(updatedTwets));
	});
}

export function getData() {
	getPosts();
	getTwets();
}
