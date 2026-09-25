import Link from "next/link";

const EmptyState = () => {
    return (
        <div className="rounded-lg border border-dashed border-zinc-800 bg-[#111318] px-5 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-lg text-lime-400">
                +
            </div>

            <h2 className="mt-5 text-sm font-black uppercase text-white">
                Nothing Here Yet
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-zinc-500">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-6 inline-flex rounded-md bg-lime-400 px-5 py-3 text-[10px] font-black uppercase text-black transition hover:bg-lime-300"
            >
                Go to workouts
            </Link>
        </div>
    );
};

export default EmptyState;