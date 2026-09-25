"use client"
import { useFitlog } from "@/context/FitlogContext";

const PlanStats = () => {
    const { plan } = useFitlog();
    const exercises = plan.length;
    const minutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );
    const calories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const stats = [
        {
            label: "Exercises",
            value: exercises,
        },
        {
            label: "Minutes",
            value: minutes,
        },
        {
            label: "Calories",
            value: calories,
        }
    ]

    return (
        <div className="grid grid-cols-3 gap-3">
            {
                stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-lg border border-zinc-800 bg-[#14161b] p-4 "
                    >
                        <p className="text-[9px] font-bold font-oswald uppercase tracking-widest text-zinc-500">
                            {stat.label}
                        </p>

                        <p className="mt-2 text-2xl font-black text-white">
                            {stat.value}
                        </p>
                    </div>
                ))
            }

        </div>
    );
};

export default PlanStats;