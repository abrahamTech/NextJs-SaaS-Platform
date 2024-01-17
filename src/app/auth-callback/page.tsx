"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  console.log(origin)

  //Data NOT Typesafe (data: any)
  // const apiResponse = await fetch("/api/whatever");
  // const data = await apiResponse.json();

  //Data Typesafe with TRPC (data: string | undefined)
  //The value depends of the type of data declared on "@src/trpc/index.ts" file 
  const { data, isLoading, isSuccess, isError, error } = trpc.authCallback.useQuery(undefined)
  
  /*useEffect(() => {
    if (!isLoading && data) {
      // User synced
      router.push(origin ? `/${origin}` : "/dashboard");
    }
  }, [data, isLoading, origin, router]);*/

  if (isSuccess) {
      // El usuario está sincronizado en la base de datos
      router.push(origin ? `/${origin}` : '/dashboard');
  }

  if(isError) {
    // if(error.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in")
    // }
  }

  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
  
}

export default Page;