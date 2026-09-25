"use client";

import { useFitlog } from "@/context/FitlogContext";
import { Workout } from "@/types/workout";

interface WorkoutDetailsProps {
    workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {

    const {
        addToPlan,
        saveWorkout,
        isInPlan,
        isSaved,
    } = useFitlog();

    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left - Image */}
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#14161b]">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full min-h-[350px] w-full object-cover sm:min-h-[500px]"
                />
            </div>

            {/* Right - Details */}
            <div className="flex flex-col">
                {/* Title */}
                <div>
                    <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                        {workout.name}
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-zinc-400">
                        {workout.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-lime-400 px-3 py-1.5 text-[9px] font-black uppercase text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                {/* Specs */}
                <div className="mt-6 overflow-hidden rounded-lg border border-zinc-800 bg-[#14161b]">
                    <div className="border-b border-zinc-800 px-4 py-3">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                            Workout Specs
                        </p>
                    </div>

                    <div className="divide-y divide-zinc-800">
                        <SpecRow
                            label="Equipment"
                            value={workout.equipment}
                        />

                        <SpecRow
                            label="Difficulty"
                            value={workout.difficulty}
                        />

                        <SpecRow
                            label="Sets"
                            value={String(workout.sets)}
                        />

                        <SpecRow
                            label="Reps"
                            value={workout.reps}
                        />

                        <SpecRow
                            label="Duration"
                            value={`${workout.duration} min`}
                        />

                        <SpecRow
                            label="Calories"
                            value={`${workout.caloriesBurned} kcal`}
                        />

                        <SpecRow
                            label="Rating"
                            value={`⭐ ${workout.rating}`}
                        />
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-7">
                    <h2 className="text-xs font-black uppercase tracking-widest text-white">
                        Instructions
                    </h2>

                    <ol className="mt-4 space-y-3">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-sm leading-6 text-zinc-400"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-[10px] font-bold text-lime-400">
                                    {index + 1}
                                </span>

                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => addToPlan(workout)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
                    >
                        <span>＋</span>
                        {isInPlan(workout.id)
                            ? "Already in today's plan"
                            : "Add to today's plan"}
                    </button>

                    <button
                        type="button"
                        onClick={() => saveWorkout(workout)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-5 py-3 text-xs font-bold uppercase text-white transition hover:border-zinc-500"
                    >
                        <span>{isSaved(workout.id) ? "♥" : "♡"}</span>
                        {isSaved(workout.id)
                            ? "Saved"
                            : "Save for later"}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface SpecRowProps {
    label: string;
    value: string;
}

const SpecRow = ({ label, value }: SpecRowProps) => {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                {label}
            </span>

            <span className="text-xs font-medium text-zinc-300">
                {value}
            </span>
        </div>
    );
};

export default WorkoutDetails;