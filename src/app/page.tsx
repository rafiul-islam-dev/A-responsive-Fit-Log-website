import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <section className="mx-auto max-w-7xl px-5 py-10">

        <h1 className="text-3xl font-black uppercase">
          FitLog
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Workout Library
        </p>

        <div className="mt-8 space-y-4">
          {
            workouts.map((workout) => (
              <div key={workout.id} className="rounded-lg border border-zinc-800 bg-[#111318] p-4">
                <h2 className="font-bold">
                  {workout.name}
                </h2>
                <p className=" mt-1 text-sm text-zinc-500">
                  {workout.equipment}
                </p>
                <p className="text-lime-400 mt-2 text-xs">
                  {workout.duration} min .{" "}
                  {workout.caloriesBurned} kcal .{" "}
                  ⭐ {workout.rating}
                </p>
              </div>
            ))
          }
        </div>
      </section>
    </main>

  );
}
