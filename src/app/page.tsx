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
          className="m4-12 scroll-mt-24">

          <WorkoutGrid workouts={workouts}></WorkoutGrid>

        </section>

      </div>
    </main>

  );
}
