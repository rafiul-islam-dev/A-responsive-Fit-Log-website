import Link from "next/link";

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <section className="mx-auto max-w-7xl px-5 py-10">
                <p className="text-xs text-zinc-500">
                    Workout ID: {id}
                </p>

                <h1 className="mt-3 text-3xl font-black uppercase">
                    Workout Details
                </h1>

                <Link
                    href="/"
                    className="mt-6 inline-block text-sm text-lime-400"
                >
                    ← Back to workouts
                </Link>
            </section>
        </main>
    );
}