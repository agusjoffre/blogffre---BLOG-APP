import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDfcYaTlpmMbwF2Fb2ezrRiQ90uOtIALQ',
  authDomain: 'blogffre-1.firebaseapp.com',
  projectId: 'blogffre-1',
  storageBucket: 'blogffre-1.appspot.com',
  messagingSenderId: '283345240641',
  appId: '1:283345240641:web:5abd2c8c7398cb6569bcc0'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
