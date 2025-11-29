import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const FitnessDashboard = () => {
  const [waterIntake, setWaterIntake] = useState(2.5);
  const waterGoal = 3.0;

  const addWater = () => {
    if (waterIntake < waterGoal) {
      setWaterIntake(waterIntake + 0.25);
    }
  };

  // Weekly Workouts Chart
  const workoutOptions: ApexOptions = {
    chart: { type: 'line', toolbar: { show: false } },
    colors: ['#3C50E0'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    stroke: { curve: 'smooth', width: 3 },
  };
  const workoutSeries = [{ name: 'Workouts', data: [1, 2, 1, 3, 2, 1, 2] }];

  // Daily Calories Chart
  const calorieOptions: ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    colors: ['#10B981'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  };
  const calorieSeries = [{ name: 'Calories', data: [450, 620, 380, 710, 550, 420, 680] }];

  // Weight Progress Chart (30 days)
  const weightOptions: ApexOptions = {
    chart: { type: 'line', toolbar: { show: false } },
    colors: ['#8B5CF6'],
    xaxis: { 
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 5 },
  };
  const weightSeries = [
    { name: 'Current Weight', data: [80, 79.5, 79, 78] },
    { name: 'Target', data: [75, 75, 75, 75] },
  ];

  // Macros Breakdown Chart
  const macrosOptions: ApexOptions = {
    chart: { type: 'donut' },
    colors: ['#EF4444', '#3B82F6', '#FBBF24'],
    labels: ['Protein', 'Carbs', 'Fat'],
    legend: { position: 'bottom' },
  };
  const macrosSeries = [30, 50, 20]; // Protein, Carbs, Fat percentages

  // Weekly Activity Summary
  const activityOptions: ApexOptions = {
    chart: { type: 'area', toolbar: { show: false } },
    colors: ['#06B6D4'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    stroke: { curve: 'smooth', width: 2 },
    fill: { 
      type: 'gradient', 
      gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.1 } 
    },
  };
  const activitySeries = [{ name: 'Activity Minutes', data: [30, 45, 25, 60, 40, 35, 50] }];

  return (
    <>
      <Breadcrumb pageName="Fitness Dashboard" />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">2,450</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Calories Today</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">12</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Workouts This Week</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">78 kg</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Current Weight</span>
        </div>
        
        {/* Water Intake Card */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{waterIntake.toFixed(1)} L</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-3 block">Water Today</span>
          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 mb-2">
            <div 
              className="h-2 rounded-full bg-blue-600" 
              style={{ width: `${(waterIntake / waterGoal) * 100}%` }}
            ></div>
          </div>
          <button
            onClick={addWater}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            + Add 250ml
          </button>
        </div>
      </div>

      {/* Top Row - 2 Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Weekly Workouts</h3>
          <ReactApexChart options={workoutOptions} series={workoutSeries} type="line" height={280} />
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Daily Calories Burned</h3>
          <ReactApexChart options={calorieOptions} series={calorieSeries} type="bar" height={280} />
        </div>
      </div>

      {/* Middle Row - 1 Large Chart */}
      <div className="mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Weight Progress (Last 4 Weeks)</h3>
          <ReactApexChart options={weightOptions} series={weightSeries} type="line" height={300} />
        </div>
      </div>

      {/* Bottom Row - 2 Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Macros Breakdown</h3>
          <ReactApexChart options={macrosOptions} series={macrosSeries} type="donut" height={280} />
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Weekly Activity Minutes</h3>
          <ReactApexChart options={activityOptions} series={activitySeries} type="area" height={280} />
        </div>
      </div>
    </>
  );
};

export default FitnessDashboard;
