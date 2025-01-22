"use client"

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return <div className="flex flex-col justify-center items-center min-h-screen">
        <Image className="mb-4" src="/images/logo.svg" height={48} width={48} alt={`${APP_NAME} logo`} priority></Image>
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
            <h1 className=" text-3xl font-bold mb-4">Not Found</h1> 
            <p className=" text-destructive mb-4">could not find page</p>
            <Button variant='outline' className=" mb-4 ml-2" onClick={()=>window.location.href='/'}>Back To Home</Button>
        </div>
    </div>;
}
 
export default NotFoundPage;