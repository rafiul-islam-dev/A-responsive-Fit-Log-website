"use client";

import { useState } from "react";

import PlanStats from "@/components/PlanStats";
import PlanCard from "@/components/PlanCard";
import SavedCard from "@/components/SavedCard";
import EmptyState from "@/components/EmptyState";
import SortDropdown from "@/components/SortDropdown";

import { useFitlog } from "@/context/FitlogContext";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("plan");

    const [sortBy, setSortBy] = useState("duration");

    const {
        plan,
        saved,
        hydrated,
    } = useFitlog();

    /*
     * Loading state
     */
    if (!hydrated) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0b0d10]">
                <div className="text-center">
                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-lime-400" />

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        Loading workouts...
                    </p>
                </div>
            </main>
        );
    }

    /*
     * Select current tab data
     */
    const currentItems =
        activeTab === "plan"
            ? plan
            : saved;

    /*
     * Sort current tab data
     */
    const sortedItems = [...currentItems].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return (
                    b.caloriesBurned -
                    a.caloriesBurned
                );
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        }
    );

    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-5 lg:py-12">

                {/* ================= HEADER ================= */}
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400">
                        FitLog
                    </p>

                    <h1 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-xs text-zinc-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* ================= STATS ================= */}
                <div className="mt-8">
                    <PlanStats />
                </div>

                {/* ================= TABS ================= */}
                <div className="mt-8 flex border-b border-zinc-800">

                    {/* Today's Plan */}
                    <button
                        type="button"
                        onClick={() => setActiveTab("plan")}
                        className={`relative px-4 py-3 text-[10px] font-black uppercase transition ${activeTab === "plan"
                                ? "text-lime-400"
                                : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        Today's Plan

                        {plan.length > 0 && (
                            <span className="ml-2 rounded-full bg-lime-400 px-1.5 py-0.5 text-[8px] text-black">
                                {plan.length}
                            </span>
                        )}

                        {activeTab === "plan" && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-lime-400" />
                        )}
                    </button>

                    {/* Saved */}
                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`relative px-4 py-3 text-[10px] font-black uppercase transition ${activeTab === "saved"
                                ? "text-lime-400"
                                : "text-zinc-500 hover:text-white"
                            }`}
                    >
                        Saved

                        {saved.length > 0 && (
                            <span className="ml-2 rounded-full border border-zinc-600 px-1.5 py-0.5 text-[8px] text-zinc-300">
                                {saved.length}
                            </span>
                        )}

                        {activeTab === "saved" && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-lime-400" />
                        )}
                    </button>
                </div>

                {/* ================= SORT ================= */}
                <div className="mt-5 flex items-center justify-end">
                    <SortDropdown
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>

                {/* ================= WORKOUT LIST ================= */}
                <div className="mt-5 space-y-4">

                    {sortedItems.length === 0 ? (
                        <EmptyState />
                    ) : activeTab === "plan" ? (
                        sortedItems.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))
                    ) : (
                        sortedItems.map((workout) => (
                            <SavedCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))
                    )}

                </div>
            </div>
        </main>
    );
};

export default MyPlanPage;