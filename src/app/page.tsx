import { getWorkouts } from "@/lib/api";
import Image from "next/image";

export default async function HomePage() {
  const workouts = await getWorkouts();
  
  return (
    <main>
      <h1>
        FitLog
      </h1>
      <div>
        {
          workouts.map((workout) => (
            <div key={workout.id} className="">
              <h2>
                {workout.name}
              </h2>
              <p>
                {workout.equipment}
              </p>
              <p>
                {workout.duration} min .{" "}
                {workout.caloriesBurned} kcal .{" "}
                ⭐ {workout.rating}
              </p>
            </div>
          ))
        }
      </div>
    </main>

  );
}
