import React, { useEffect, useState } from 'react';

const achievementList = [
  {
    metrics: 'Projects',
    value: 5, // Change to a number for counting animation
  },
  {
    metrics: 'Projects Completed',
    value: 6, // Change to a number for counting animation
  },
  {
    metrics: 'Users',
    value: 100, // Change to a number for counting animation
  },
  {
    metrics: 'Years',
    value: 4, // Change to a number for counting animation
  },
  {
    metrics: 'Technologies mastered',
    value: 6, // Change to a number for counting animation
  },
];

const Achievement = ({ metrics, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMilSecDur = 600;
    let incrementTime = (totalMilSecDur / end) * 3;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className='flex flex-col items-center justify-center mx-4'>
      <h2 className='text-white text-4xl font-bold'>
        {count}+
      </h2>
      <p className='text-[#ADB7BE]'>{metrics}</p>
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 xl:px-16'>
      <div className='achievement-container flex flex-col md:flex-row items-center justify-between'>
        {achievementList.map((achievement, index) => (
          <Achievement key={index} metrics={achievement.metrics} value={achievement.value} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
