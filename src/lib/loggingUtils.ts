import { db, auth } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './firestoreUtils';

export async function recordAuditLog(action: string, details: string, status: 'success' | 'failure' = 'success') {
  try {
    const user = auth.currentUser;
    await addDoc(collection(db, 'auditLogs'), {
      action,
      details,
      status,
      timestamp: serverTimestamp(),
      userId: user?.uid || 'anonymous',
      userEmail: user?.email || 'anonymous',
      ip: 'tracked', // In a real app we'd get this from the request if on server
      device: window.navigator.userAgent
    });
  } catch (err) {
    // If we can't record an audit log, we still want the app to function,
    // but we log the error.
    console.error('Failed to record audit log:', err);
  }
}
