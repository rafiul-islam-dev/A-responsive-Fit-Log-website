"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { toast } from "react-toastify";
import { Workout } from "@/types/workout";

interface FitlogContextType {
    plan: Workout[];
    saved: Workout[];
    done: number[];
    hydrated: boolean;

    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;

    saveWorkout: (workout: Workout) => void;
    removeSaved: (id: number) => void;

    markAsDone: (id: number) => void;

    isInPlan: (id: number) => boolean;
    isSaved: (id: number) => boolean;
}

const FitlogContext = createContext<FitlogContextType | undefined>(
    undefined
);

interface FitlogProviderProps {
    children: ReactNode;
}

export const FitlogProvider = ({
    children,
}: FitlogProviderProps) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const [done, setDone] = useState<number[]>([]);

    // Used to know when localStorage data has been loaded
    const [hydrated, setHydrated] = useState(false);

    /*
     * Load data from localStorage
     */
    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");
        const storedDone = localStorage.getItem("fitlog-done");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        if (storedDone) {
            setDone(JSON.parse(storedDone));
        }

        setHydrated(true);
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */

    /*
     * Save plan to localStorage
     */
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(plan)
        );
    }, [plan, hydrated]);

    /*
     * Save saved workouts to localStorage
     */
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(saved)
        );
    }, [saved, hydrated]);

    /*
     * Save completed workouts to localStorage
     */
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem(
            "fitlog-done",
            JSON.stringify(done)
        );
    }, [done, hydrated]);

    /*
     * Add workout to today's plan
     */
    const addToPlan = (workout: Workout) => {
        // Already exists
        if (plan.some((item) => item.id === workout.id)) {
            toast.info("Already in today's plan");
            return;
        }

        // Maximum 5 workouts
        if (plan.length >= 5) {
            toast.info("Today's plan is limited to 5 lifts");
            return;
        }

        setPlan((current) => [...current, workout]);

        toast.success("Added to today's plan");
    };

    /*
     * Remove workout from today's plan
     */
    const removeFromPlan = (id: number) => {
        // Remove from today's plan
        setPlan((current) =>
            current.filter((workout) => workout.id !== id)
        );

        // Also reset its completed status
        setDone((current) =>
            current.filter((workoutId) => workoutId !== id)
        );

        toast.success("Removed from today's plan");
    };

    /*
     * Save workout for later
     */
    const saveWorkout = (workout: Workout) => {
        // Already saved
        if (saved.some((item) => item.id === workout.id)) {
            toast.info("Already saved");
            return;
        }

        setSaved((current) => [...current, workout]);

        toast.success("Saved for later");
    };

    /*
     * Remove workout from saved
     */
    const removeSaved = (id: number) => {
        setSaved((current) =>
            current.filter((workout) => workout.id !== id)
        );

        toast.success("Removed from saved");
    };

    /*
     * Mark workout as completed
     */
    const markAsDone = (id: number) => {
        if (done.includes(id)) {
            toast.info("Workout already completed");
            return;
        }

        setDone((current) => [...current, id]);

        toast.success("Workout marked as done");
    };

    /*
     * Check if workout is already in today's plan
     */
    const isInPlan = (id: number) => {
        return plan.some((workout) => workout.id === id);
    };

    /*
     * Check if workout is already saved
     */
    const isSaved = (id: number) => {
        return saved.some((workout) => workout.id === id);
    };

    return (
        <FitlogContext.Provider
            value={{
                plan,
                saved,
                done,
                hydrated,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeSaved,
                markAsDone,
                isInPlan,
                isSaved,
            }}
        >
            {children}
        </FitlogContext.Provider>
    );
};

/*
 * Custom hook
 */
export const useFitlog = () => {
    const context = useContext(FitlogContext);

    if (!context) {
        throw new Error(
            "useFitlog must be used inside FitlogProvider"
        );
    }

    return context;
};