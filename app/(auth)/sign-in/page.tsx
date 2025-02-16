import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CredentialsSignInForm from "./credentials-signin-form";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata:Metadata = {
    title:'Sign In'
}

const SignInPage = async(props:{
    searchParams:Promise<{callbackUrl:string}>
}) => {
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if(session){
        return redirect(callbackUrl || '/');
    }
    return <div className="flex flex-col justify-center items-center min-h-screen">
        <Card className="w-[500px]">
            <CardHeader className="flex flex-col justify-center items-center">
                <Link href="/">
                    <Image
                        src="/images/logo.svg" 
                        width={100}
                        height={100}
                        alt={`${APP_NAME} logo`}
                        priority
                    />
                </Link>
               <CardTitle className="text-center">Sign In</CardTitle> 
               <CardDescription className="text-center">Sign In your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <CredentialsSignInForm/>
            </CardContent>
        </Card>
    </div>
}
 
export default SignInPage;