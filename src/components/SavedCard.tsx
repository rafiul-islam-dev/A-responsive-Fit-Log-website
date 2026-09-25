"use client";

import Link from "next/link";
import { Workout } from "@/types/workout";
import { useFitlog } from "@/context/FitlogContext";

interface SavedCardProps {
    workout: Workout;
}

const SavedCard = ({ workout }: SavedCardProps) => {
    const { removeSaved, addToPlan, isInPlan, plan } = useFitlog();

    const alreadyInPlan = isInPlan(workout.id);
    const planIsFull = plan.length >= 5 && !alreadyInPlan;

    return (
        <div className="rounded-xl border border-zinc-800 bg-[#14161b] transition hover:border-zinc-700">
            <div className="flex items-center gap-4 p-4 sm:gap-5">
                {/* Workout Image */}
                <div className="h-20 w-36 shrink-0 overflow-hidden rounded-xl">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                    <h2 className="truncate text-sm font-black uppercase text-white">
                        {workout.name}
                    </h2>

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
                        onClick={() => addToPlan(workout)}
                        disabled={planIsFull || alreadyInPlan}
                        className={`rounded-full px-4 py-2 text-[9px] font-bold transition ${planIsFull || alreadyInPlan
                                ? "cursor-not-allowed bg-zinc-800 text-zinc-600"
                                : "bg-lime-400 text-black hover:bg-lime-300"
                            }`}
                    >
                        {alreadyInPlan
                            ? "✓ In Today's Plan"
                            : planIsFull
                                ? "Plan Full"
                                : "Add to Plan"}
                    </button>

                    <button
                        type="button"
                        onClick={() => removeSaved(workout.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:text-red-400"
                        aria-label={`Remove ${workout.name} from saved`}
                    >
                        ×
                    </button>
                </div>

                {/* Mobile Remove Button */}
                <button
                    type="button"
                    onClick={() => removeSaved(workout.id)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:text-red-400 sm:hidden"
                    aria-label={`Remove ${workout.name} from saved`}
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
                    onClick={() => addToPlan(workout)}
                    disabled={planIsFull || alreadyInPlan}
                    className={`flex-1 rounded-full px-3 py-2 text-[9px] font-bold ${planIsFull || alreadyInPlan
                            ? "bg-zinc-800 text-zinc-600"
                            : "bg-lime-400 text-black"
                        }`}
                >
                    {alreadyInPlan
                        ? "✓ In Plan"
                        : planIsFull
                            ? "Plan Full"
                            : "Add to Plan"}
                </button>
            </div>
        </div>
    );
};

export default SavedCard;