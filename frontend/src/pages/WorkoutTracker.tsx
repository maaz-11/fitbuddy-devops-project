import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

interface Workout {
  id: number;
  exercise: string;
  duration: number;
  calories: number;
  date: string;
}

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    { id: 1, exercise: 'Running', duration: 30, calories: 300, date: '2024-11-26' },
    { id: 2, exercise: 'Weight Training', duration: 45, calories: 250, date: '2024-11-26' },
  ]);

  const [formData, setFormData] = useState({
    exercise: '',
    duration: '',
    calories: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout: Workout = {
      id: workouts.length + 1,
      exercise: formData.exercise,
      duration: Number(formData.duration),
      calories: Number(formData.calories),
      date: new Date().toISOString().split('T')[0],
    };
    setWorkouts([...workouts, newWorkout]);
    setFormData({ exercise: '', duration: '', calories: '' });
  };

  const totalWorkouts = workouts.length;
  const totalDuration = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);

  return (
    <>
      <Breadcrumb pageName="Workout Tracker" />

      {/* Stats Summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalWorkouts}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Total Workouts</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalDuration} min</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Total Duration</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalCalories}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Calories Burned</span>
        </div>
      </div>

      {/* AI Suggestion Button */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 shadow mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Need Workout Ideas?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get AI-powered workout recommendations based on your fitness level</p>
          </div>
          <button
            onClick={() => alert('AI Workout Suggestion will be implemented with backend API!')}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 px-6 text-white font-medium transition whitespace-nowrap"
          >
            🤖 Get AI Suggestion
          </button>
        </div>
      </div>

      {/* Add Workout Form */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow mb-6 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Log New Workout</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-4">
            <input
              type="text"
              placeholder="Exercise name"
              value={formData.exercise}
              onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Duration (minutes)"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Calories burned"
              value={formData.calories}
              onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium transition"
          >
            Add Workout
          </button>
        </form>
      </div>

      {/* Workouts Table */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow">
        <div className="py-6 px-6 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-black dark:text-white">Workout History</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Exercise</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Duration (min)</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Calories</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {workouts.map((workout) => (
                <tr key={workout.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{workout.date}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{workout.exercise}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{workout.duration}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{workout.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WorkoutTracker;
