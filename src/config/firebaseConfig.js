import config from './config.json'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(config)
const firebaseDatabase = firebaseApp.database()
export default firebaseDatabase
