import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  { id: 'first-visit', name: 'Welcome Explorer', description: 'You found your way here!', completed: false },
  { id: 'head-flip', name: 'Topsy-Turvy', description: 'Things are looking different...', completed: false },
  // Add more achievements here
];

const AchievementsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userAchievements, setUserAchievements] = useState(achievements);

  useEffect(() => {
    // Check for first visit
    const isFirstVisit = !localStorage.getItem('hasVisited');
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      completeAchievement('first-visit');
    }

    // Load saved achievements
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
      setUserAchievements(JSON.parse(savedAchievements));
    }
  }, []);

  const completeAchievement = (id) => {
    setUserAchievements(prevAchievements => {
      const updatedAchievements = prevAchievements.map(achievement =>
        achievement.id === id ? { ...achievement, completed: true } : achievement
      );
      localStorage.setItem('achievements', JSON.stringify(updatedAchievements));
      return updatedAchievements;
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 p-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
      >
        <Trophy size={24} className="text-white" />
      </button>
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-white rounded-lg shadow-xl p-4 w-64 max-h-80 overflow-y-auto transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
          <h2 className="text-lg font-bold mb-2">Achievements</h2>
          <ul>
            {userAchievements.map(achievement => (
              <li key={achievement.id} className="mb-2">
                <span className={`font-medium ${achievement.completed ? 'text-green-600' : 'text-gray-600'}`}>
                  {achievement.name}
                </span>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AchievementsComponent;