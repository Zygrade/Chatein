import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

require('firebase/firestore');

var config = {
  apiKey: "AIzaSyA2s_tdN0a_iiNB3BL5ppgPyDCxjUGvwuI",
  authDomain: "chatein.firebaseapp.com",
  databaseURL: "https://chatein.firebaseio.com",
  projectId: "chatein",
  storageBucket: "chatein.appspot.com",
  messagingSenderId: "196077641864"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

window.db = db;

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

