import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId);
export const auth = getAuth(app);

// Test Connection
async function testConnection() {
  try {
    // We use a dummy doc to test connection. If we get a "permission denied" error,
    // it actually means we successfully reached the server!
    await getDocFromServer(doc(db, '_connection_test_', 'ping'));
    console.log("Firebase connection established successfully.");
  } catch (error: any) {
    if (error.code === 'permission-denied') {
      console.log("Firebase connectivity confirmed (Permission denied is expected for test path).");
    } else if (error.message?.includes('the client is offline') || error.code === 'unavailable') {
      console.error("Please check your Firebase configuration or internet connection.");
    } else {
      // Log other errors that might be relevant for debugging
      console.debug("Firebase connection test notice:", error.message);
    }
  }
}

testConnection();
