import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='p-5'>
            <section className=" m-5 overflow-hidden rounded-4xl border border-zinc-800 bg-[#14161b]">
                <div className="grid items-center md:grid-cols-2">
                    {/* Content */}
                    <div className="px-6 py-10 sm:px-8 md:px-10 md:py-14">
                        <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400'>
                            Workout Library
                        </p>

                        <h1 className=' mt-3 max-w-xl text-4xl font-oswald font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl'>
                            Train with intent. Log every set.
                        </h1>

                        <p className='mt-5 max-w-lg text-sm leading-6 text-zinc-400'>
                            FitLog is a dark, no-nonsense gym companion: pick a lift,
                            lock it into today's plan, and watch the week's work add up.
                        </p>

                        <Link
                            href="#library"
                            className='mt-6 inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300'
                        >
                            Browse Workouts
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="flex items-center justify-end pr-6 md:pr-10">
                        <Image
                            src="/banner.png"
                            alt="FitLog workout banner"
                            width={500}
                            height={350}
                            priority
                            className="h-auto max-h-[320px] w-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;