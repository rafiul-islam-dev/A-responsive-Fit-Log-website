const Loading = () => {
    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5">

                <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-700 border-t-lime-400" />

                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                            Loading workouts...
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Loading;