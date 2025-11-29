import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Goals = () => {
  const [goals, setGoals] = useState({
    targetWeight: 75,
    currentWeight: 78,
    dailyCalories: 2000,
    weeklyWorkouts: 5,
    dailyWater: 3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Goals updated successfully!');
  };

  const weightProgress = ((goals.currentWeight - goals.targetWeight) / goals.currentWeight * 100).toFixed(1);

  return (
    <>
      <Breadcrumb pageName="My Goals" />

      {/* Progress Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{goals.targetWeight} kg</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Target Weight</span>
          <p className="text-xs mt-2 text-green-600 dark:text-green-400">{weightProgress}% to goal</p>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{goals.dailyCalories}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Daily Calorie Target</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{goals.weeklyWorkouts}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Weekly Workout Goal</span>
        </div>
      </div>

      {/* AI Goal Suggestion */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 p-6 shadow mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Need Help Setting Goals?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get AI-powered goal recommendations based on your profile and fitness level</p>
          </div>
          <button
            onClick={() => alert('AI Goal Suggestion will be implemented with backend API!')}
            className="rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 py-3 px-6 text-white font-medium transition whitespace-nowrap"
          >
            🤖 Get AI Goal Suggestion
          </button>
        </div>
      </div>

      {/* Set Goals Form */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Update Your Goals</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Target Weight (kg)</label>
            <input
              type="number"
              value={goals.targetWeight}
              onChange={(e) => setGoals({ ...goals, targetWeight: Number(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Current Weight (kg)</label>
            <input
              type="number"
              value={goals.currentWeight}
              onChange={(e) => setGoals({ ...goals, currentWeight: Number(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Daily Calorie Target</label>
            <input
              type="number"
              value={goals.dailyCalories}
              onChange={(e) => setGoals({ ...goals, dailyCalories: Number(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Weekly Workout Target</label>
            <input
              type="number"
              value={goals.weeklyWorkouts}
              onChange={(e) => setGoals({ ...goals, weeklyWorkouts: Number(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Daily Water Target (Liters)</label>
            <input
              type="number"
              step="0.1"
              value={goals.dailyWater}
              onChange={(e) => setGoals({ ...goals, dailyWater: Number(e.target.value) })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium transition"
          >
            Update Goals
          </button>
        </form>
      </div>
    </>
  );
};

export default Goals;
