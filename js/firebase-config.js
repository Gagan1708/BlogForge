const firebaseConfig = {

apiKey: "AIzaSyAZkQaZyKjNogT3JO4OFulE9FFr0re7mis",
authDomain: "blog-websid.firebaseapp.com",
projectId: "blog-websid",
storageBucket: "blog-websid.firebasestorage.app",
messagingSenderId: "1044845546532",
appId: "1:1044845546532:web:ee142e1861ec538ebb5cb1",
measurementId: "G-VE0Z07B5C4"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();