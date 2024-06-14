import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';

export const firebaseUpdatePasswordService = async (currentPassword: string, newPassword: string): Promise<void> => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if(!user || !user.email) throw new Error('No authenticated user found.')
    
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
  
    await reauthenticateWithCredential(user, credential);
  
    return await updatePassword(user, newPassword);
};