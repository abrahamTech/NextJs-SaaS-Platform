"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");

    //Data NOT Typesafe (data: any)
    // const apiResponse = await fetch("/api/whatever");
    // const data = await apiResponse.json();

    //Data Typesafe with TRPC (data: string | undefined)
    //The value depends of the type of data declared on "@src/trpc/index.ts" file 
    const { data, isLoading } = trpc.authCallback.useQuery()

    if (data?.success) {
        // El usuario está sincronizado en la base de datos
        router.push(origin ? `/${origin}` : '/dashboard');
    }

    
}

export default Page;