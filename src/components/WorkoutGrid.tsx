"use client";

import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
    workouts: Workout[];
}

const WorkoutGrid = ({
    workouts,
}: WorkoutGridProps) => {
    return (
        <div>
            {/* Library Header */}
            <div className="mb-5">
                <h2 className="text-xl font-black uppercase text-white sm:text-2xl">
                    The Library
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutGrid;