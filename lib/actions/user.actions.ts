"use server";

import { signInFormSchema } from '../validator';
import { signIn,signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

// sign user in 
export async function signInWithCredentials(prevState:unknown,formData:FormData) {
   try{
    const user = signInFormSchema.parse({
        email:formData.get('email'),
        password:formData.get('password')
    })
    await signIn('credentials',user);
    return {
        success:true,
        message:'Signed in successfully'
    }
   }catch(err){
    if(isRedirectError(err)){
        throw err;
    }
    return {
        success:false,
        message:'Invalid email or password'
    }
   } 
}
// sign user out 
export async function signOutUser() {
    await signOut();
}