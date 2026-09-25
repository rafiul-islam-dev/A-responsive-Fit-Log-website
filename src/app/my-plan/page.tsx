import React from 'react';

const MyPlanPage = () => {
    return (
        <main className='min-h-screen bg-[#0b0d10]'>
            <section className='mx-auto max-w-7xl px-5 py-10'>
                <h1 className='text-3xl font-black font-oswald uppercase'>
                    My Plan
                </h1>

                <p className='mt-2 text-sm text-zinc-500'>
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </section>
        </main>
    );
};

export default MyPlanPage;
