import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

interface Meal {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
}

const MealTracker = () => {
  const [meals, setMeals] = useState<Meal[]>([
    { id: 1, name: 'Oatmeal with Banana', calories: 350, protein: 12, carbs: 65, fat: 8, time: '08:00 AM' },
    { id: 2, name: 'Grilled Chicken Salad', calories: 420, protein: 35, carbs: 25, fat: 18, time: '01:00 PM' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeal: Meal = {
      id: meals.length + 1,
      name: formData.name,
      calories: Number(formData.calories),
      protein: Number(formData.protein),
      carbs: Number(formData.carbs),
      fat: Number(formData.fat),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    setMeals([...meals, newMeal]);
    setFormData({ name: '', calories: '', protein: '', carbs: '', fat: '' });
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0);

  return (
    <>
      <Breadcrumb pageName="Meal Tracker" />

      {/* Daily Summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalCalories}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Total Calories</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalProtein}g</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Protein</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalCarbs}g</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Carbs</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{totalFat}g</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Fat</span>
        </div>
      </div>

      {/* AI Suggestion Button */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 shadow mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Need Meal Ideas?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get AI-powered meal suggestions for your fitness goals</p>
          </div>
          <button
            onClick={() => alert('AI Meal Suggestion will be implemented with backend API!')}
            className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-3 px-6 text-white font-medium transition whitespace-nowrap"
          >
            🤖 Get AI Suggestion
          </button>
        </div>
      </div>

      {/* Add Meal Form */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow mb-6 p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Log New Meal</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 mb-4">
            <input
              type="text"
              placeholder="Meal name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Calories"
              value={formData.calories}
              onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Protein (g)"
              value={formData.protein}
              onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              value={formData.carbs}
              onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Fat (g)"
              value={formData.fat}
              onChange={(e) => setFormData({ ...formData, fat: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium transition"
          >
            Add Meal
          </button>
        </form>
      </div>

      {/* Meals Table */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow">
        <div className="py-6 px-6 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-black dark:text-white">Today's Meals</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Time</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Meal</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Calories</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Protein</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Carbs</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Fat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {meals.map((meal) => (
                <tr key={meal.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.time}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.calories}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.protein}g</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.carbs}g</td>
                  <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-300">{meal.fat}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MealTracker;
