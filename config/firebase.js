const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyD45nzZfFud_iVU8RvGAFaRZcg7dFiSuiQ",
  authDomain: "test-173a0.firebaseapp.com",
  databaseURL: "https://test-173a0-default-rtdb.firebaseio.com",
  projectId: "test-173a0",
  storageBucket: "test-173a0.appspot.com",
  messagingSenderId: "762711955432",
  appId: "1:762711955432:web:c7d536a43a1827fd96765d"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
