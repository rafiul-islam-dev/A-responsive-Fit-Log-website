import { Workout } from '@/types/workout';
import WorkoutCard from './WorkoutCard';


interface WorkoutGridProps {
    workouts: Workout[];
}

const WorkoutGrid = ({workouts}: WorkoutGridProps) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                workouts.map((workout) => (
                    <WorkoutCard 
                    key={workout.id}
                    workout={workout}
                    >
                    </WorkoutCard>
                ))
            }
        </div>
    );
};



export default WorkoutGrid;