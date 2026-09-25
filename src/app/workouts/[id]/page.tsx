import WorkoutDetails from "@/components/WorkoutDetails";
import { getWorkout } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    let workout;

    try {
        workout = await getWorkout(id);
    } catch {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:py-12">
                {/* Back button */}
                <Link
                    href='/#library'
                    className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition hover:text-lime-400"
                >
                    ← Back to library
                </Link>
                <WorkoutDetails workout={workout}>

                </WorkoutDetails>

            </div>
        </main>
    );
}