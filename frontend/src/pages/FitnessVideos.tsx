import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const FitnessVideos = () => {
  const videos = [
    {
      id: 1,
      title: 'Shoulder Workout - 6 Minutes',
      url: 'https://www.youtube.com/embed/yN6Q1UI_xkE',
      description: 'Quick shoulder strengthening routine',
    },
    {
      id: 2,
      title: 'Core & Abs - 5 Minutes',
      url: 'https://www.youtube.com/embed/DHD1-2P94DI',
      description: '5-min core strengthening routine',
    },
    {
      id: 3,
      title: 'Leg Workout - 6 Minutes',
      url: 'https://www.youtube.com/embed/m0GcZ24pK6k',
      description: '6-min lower body workout',
    },
    {
      id: 4,
      title: 'Upper Back - 5 Min',
      url: 'https://www.youtube.com/embed/aclHkVaku9U',
      description: 'Strengthen upper back muscles',
    },
    {
      id: 5,
      title: 'Full Body Cardio - 5 Minutes',
      url: 'https://www.youtube.com/embed/ml6cT4AZdqI',
      description: '5-min fat burning cardio routine',
    },
    {
      id: 6,
      title: 'Morning Stretch - 5 Minutes',
      url: 'https://www.youtube.com/embed/g_tea8ZNk5A',
      description: 'Wake up your body with stretches',
    },
    {
      id: 7,
      title: 'Push-Up Tutorial',
      url: 'https://www.youtube.com/embed/IODxDxX7oi4',
      description: 'Perfect push-up form technique',
    },
    {
      id: 8,
      title: 'Plank Variations',
      url: 'https://www.youtube.com/embed/pSHjTRCQxIw',
      description: 'Different plank exercises for core',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Fitness Videos" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20 p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          💡 <strong>Tip:</strong> Follow along with these quick videos for proper form and maximum results!
        </p>
      </div>
    </>
  );
};

export default FitnessVideos;
