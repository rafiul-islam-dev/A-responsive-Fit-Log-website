import { Workout } from '@/types/workout';
import { group } from 'console';
import Link from 'next/link';
import React from 'react';

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className='group block overflow-hidden rounded-2xl border border-zinc-800 bg-[#14161b] transition hover:border-zinc-600'
        >
            {/* image */}
            <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className='h-full w-full object-cover transition duration-300 group-hover:scale-105'
                >
                </img>
            </div>

            {/* content */}
            <div className='p-4'>
                {/* Tags */}
                <div className='flex flex-wrap gap-1.5'>
                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-lime-400 px-2 py-1 text-[8px] font-black uppercase text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h2 className='mt-3 text-sm font-black font-oswald uppercase text-white'>
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className='mt-1 text-[10px] text-zinc-500'>
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-3 border-t border-zinc-800 pt-3 text-[9px] text-zinc-500">
                    <span>◷ {workout.duration} min</span>

                    <span>🔥 {workout.caloriesBurned} kcal</span>

                    <span>★ {workout.rating}</span>
                </div>
            </div>
        </Link>
    );
};



export default WorkoutCard;