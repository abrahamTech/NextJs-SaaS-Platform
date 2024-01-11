import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        <span>pd(<span className="text-indigo-600">IA</span>)</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href="/pricing" className={buttonVariants({size: "sm", variant: "ghost",})}>
                                Pricing
                            </Link>
                            
                            <LoginLink className={buttonVariants({size: "sm", variant: "ghost",})}>
                                Sign In
                            </LoginLink>

                            <RegisterLink className={buttonVariants({size: "sm", className: "bg-indigo-500 hover:bg-indigo-500/90"})}>
                                Get Started <ArrowRight className="ml-1 h-5 w-5"/>
                            </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
};

export default Navbar;