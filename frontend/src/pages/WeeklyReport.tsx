import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const WeeklyReport = () => {
  const weekData = {
    totalWorkouts: 12,
    totalCalories: 3850,
    avgDuration: 42,
    totalMeals: 21,
    weightChange: -1.5,
  };

  const workoutChart: ApexOptions = {
    chart: { type: 'area', toolbar: { show: false } },
    colors: ['#3C50E0'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 } },
  };
  const workoutSeries = [{ name: 'Workouts', data: [1, 2, 1, 3, 2, 1, 2] }];

  const handleDownloadPDF = () => {
    alert('PDF download will be implemented with backend!');
  };

  return (
    <>
      <Breadcrumb pageName="Weekly Report" />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 mb-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{weekData.totalWorkouts}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Total Workouts</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{weekData.totalCalories}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Calories Burned</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{weekData.avgDuration} min</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Avg Duration</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-black dark:text-white mb-2">{weekData.totalMeals}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Meals Logged</span>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
          <h4 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{weekData.weightChange} kg</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">Weight Change</span>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white mb-4">Weekly Activity</h4>
        <ReactApexChart options={workoutChart} series={workoutSeries} type="area" height={300} />
      </div>

      {/* Download Button */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow">
        <h4 className="text-xl font-semibold text-black dark:text-white mb-4">Export Report</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Download your weekly fitness report as PDF</p>
        <button
          onClick={handleDownloadPDF}
          className="rounded-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium transition"
        >
          📄 Download PDF Report
        </button>
      </div>
    </>
  );
};

export default WeeklyReport;
