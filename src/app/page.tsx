import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:py-10">
        {/* Hero */}
        <Hero></Hero>

        {/* Library */}
        <section
          id="library"
          className="m4-12 scroll-mt-24"
        >
          <div className="mb-5">
            <h2 className="text-xl font-black font-oswald uppercase text-white sm:text-2xl">
              The Library
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <WorkoutGrid workouts={workouts}></WorkoutGrid>

        </section>

      </div>
    </main>

  );
}
