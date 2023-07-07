type Level = 'junior' | 'middle' | 'senior';

interface Develop {
  login: string;
  skills: string[];
  level: Level
}

function gradeDeveloper11(user: {level: Level}, newLevel: Level): {level: Level} {
  user.level = newLevel;
  return user;
}

const user11: Develop = {
  login: 'nookat',
  skills: ['js', 'react', 'node', 'mongo'],
  level: 'middle'
};

console.log(gradeDeveloper11(user11, 'senior'));