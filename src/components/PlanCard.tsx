"use client";

import Link from "next/link";
import { Workout } from "@/types/workout";
import { useFitlog } from "@/context/FitlogContext";

interface PlanCardProps {
    workout: Workout;
}

const PlanCard = ({ workout }: PlanCardProps) => {
    const { removeFromPlan, markAsDone, done } = useFitlog();

    const isDone = done.includes(workout.id);

    return (
        <div
            className={`rounded-xl border bg-[#14161b] transition ${isDone ? "border-lime-400/30" : "border-zinc-800"
                }`}
        >
            <div className="flex items-center gap-4 p-4 sm:gap-5">
                {/* Workout Image */}
                <div className="h-20 w-36 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-36">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className={`h-full w-full object-cover ${isDone ? "opacity-50" : ""
                            }`}
                    />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h2
                            className={`truncate text-sm font-black uppercase ${isDone
                                    ? "text-zinc-500 line-through"
                                    : "text-white"
                                }`}
                        >
                            {workout.name}
                        </h2>

                        {isDone && (
                            <span className="shrink-0 rounded-full bg-lime-400 px-2 py-1 text-[8px] font-black uppercase text-black">
                                Done
                            </span>
                        )}
                    </div>

                    <p className="mt-1 truncate text-[10px] text-zinc-500">
                        {workout.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-[9px] text-zinc-500">
                        <span>◷ {workout.duration} min</span>
                        <span>🔥 {workout.caloriesBurned} kcal</span>
                        <span>★ {workout.rating}</span>
                    </div>
                </div>

                {/* Right Side Buttons */}
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                    <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-full border border-zinc-700 px-4 py-2 text-[9px] font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                    >
                        View Details
                    </Link>

                    <button
                        type="button"
                        onClick={() => markAsDone(workout.id)}
                        disabled={isDone}
                        className={`rounded-full px-4 py-2 text-[9px] font-bold transition ${isDone
                                ? "cursor-not-allowed bg-zinc-800 text-zinc-600"
                                : "bg-lime-400 text-black hover:bg-lime-300"
                            }`}
                    >
                        ✓ {isDone ? "Completed" : "Mark as Done"}
                    </button>

                    <button
                        type="button"
                        onClick={() => removeFromPlan(workout.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:text-red-400"
                        aria-label={`Remove ${workout.name}`}
                    >
                        ×
                    </button>
                </div>

                {/* Mobile Remove Button */}
                <button
                    type="button"
                    onClick={() => removeFromPlan(workout.id)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:text-red-400 sm:hidden"
                    aria-label={`Remove ${workout.name}`}
                >
                    ×
                </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-2 border-t border-zinc-800 px-4 py-3 sm:hidden">
                <Link
                    href={`/workouts/${workout.id}`}
                    className="flex-1 rounded-full border border-zinc-700 px-3 py-2 text-center text-[9px] font-medium text-zinc-300"
                >
                    View Details
                </Link>

                <button
                    type="button"
                    onClick={() => markAsDone(workout.id)}
                    disabled={isDone}
                    className={`flex-1 rounded-full px-3 py-2 text-[9px] font-bold ${isDone
                            ? "bg-zinc-800 text-zinc-600"
                            : "bg-lime-400 text-black"
                        }`}
                >
                    ✓ {isDone ? "Completed" : "Mark as Done"}
                </button>
            </div>
        </div>
    );
};

export default PlanCard;