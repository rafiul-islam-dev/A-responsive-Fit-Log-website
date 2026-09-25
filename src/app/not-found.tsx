import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#0b0d10] px-5">
            <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
                    FitLog
                </p>

                <h1 className="mt-4 text-7xl font-black text-white">
                    404
                </h1>

                <h2 className="mt-4 text-xl font-bold uppercase">
                    Workout not found
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                    The page you're looking for doesn't exist.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
                >
                    Back to workouts
                </Link>
            </div>
        </main>
    );
};

export default NotFound;