import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 28,
    sex: 'Male',
    height: 175,
    weight: 78,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <>
      <Breadcrumb pageName="My Profile" />

      {/* Profile Info Card */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
            {profile.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white">{profile.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{profile.email}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Age</p>
            <p className="text-xl font-bold text-black dark:text-white mt-1">{profile.age}</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Sex</p>
            <p className="text-xl font-bold text-black dark:text-white mt-1">{profile.sex}</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Height</p>
            <p className="text-xl font-bold text-black dark:text-white mt-1">{profile.height} cm</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Weight</p>
            <p className="text-xl font-bold text-black dark:text-white mt-1">{profile.weight} kg</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Edit Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Sex</label>
              <select
                value={profile.sex}
                onChange={(e) => setProfile({ ...profile, sex: e.target.value })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Height (cm)</label>
              <input
                type="number"
                value={profile.height}
                onChange={(e) => setProfile({ ...profile, height: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Weight (kg)</label>
              <input
                type="number"
                value={profile.weight}
                onChange={(e) => setProfile({ ...profile, weight: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
