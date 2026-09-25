"use client";

import { useState } from "react";
import PlanStats from "@/components/PlanStats";
import PlanCard from "@/components/PlanCard";
import SavedCard from "@/components/SavedCard";
import EmptyState from "@/components/EmptyState";
import { useFitlog } from "@/context/FitlogContext";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
    const [activeTab, setActiveTab] =
        useState<Tab>("plan");

    const { plan, saved } = useFitlog();

    const currentItems =
        activeTab === "plan" ? plan : saved;

    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-5 lg:py-12">

                {/* Header */}
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400">
                        FitLog
                    </p>

                    <h1 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-xs text-zinc-500">
                        Cap of five lifts for today. Finish them,
                        then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-8">
                    <PlanStats />
                </div>

                {/* Tabs */}
                <div className="mt-8 flex border-b border-zinc-800">
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

                {/* List */}
                <div className="mt-6 space-y-4">
                    {currentItems.length === 0 ? (
                        <EmptyState />
                    ) : activeTab === "plan" ? (
                        plan.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))
                    ) : (
                        saved.map((workout) => (
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