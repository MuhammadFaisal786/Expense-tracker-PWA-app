import firebase from 'firebase'


const configAppli = {
  apiKey: "AIzaSyC0Qdcv_aAoR1RlMAMuYOiPvMcmrdwaeu4",
  authDomain: "expense-tracker-notification.firebaseapp.com",
  databaseURL: "https://expense-tracker-notification.firebaseio.com",
  projectId: "expense-tracker-notification",
  storageBucket: "expense-tracker-notification.appspot.com",
  messagingSenderId: "1085027126804",
  appId: "1:1085027126804:web:fc3a4e10df4dbf1e3be101"
};

firebase.initializeApp(configAppli);
firebase.messaging();




export function initNotification() {
    
  return Notification.requestPermission();
   
}

    