"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { useFitlog } from '@/context/FitlogContext';


const Navbar = () => {
    const pathname = usePathname();
    const {plan, saved} = useFitlog();
    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-zinc-800 bg-[#0b0d10]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">

                {/* Logo */}
                <Link href={"/"} className='flex items-center gap-2'>
                    <span>
                        <Image
                            src="/logo.png"
                            alt='website logo'
                            width={25}
                            height={20}
                        >
                        </Image>
                    </span>
                    <span className="text-2xl font-black font-oswald tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden sm:flex items-center gap-2">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-xs font-medium transition ${isWorkoutActive
                            ? "text-lime-400 bg-[#1a2312]"
                            : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-xs font-medium transition ${isPlanActive
                            ? "text-lime-400 bg-[#1a2312]"
                            : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </nav>

                {/* Status */}
                <div className="flex items-center gap-4 text-xs">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[10px] font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-600 px-1.5 text-[10px] text-zinc-300">
                            {saved.length}
                        </span>
                    </Link>
                </div>
            </div>
        </header >
    );
};

export default Navbar;