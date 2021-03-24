import React, { useState, useEffect } from 'react';
import SkillsDB from './DB/SkillsDB';

const Skills = () => {
  const [skills, getSkills] = useState([]);

  useEffect(() => {
    getSkills(SkillsDB);
  }, []);
  return (
    <div className='skills'>
      <h2 className='skills__title title-section'>Skills</h2>
      {skills.map((skill) => (
        <div className='div'>
          <h4 className='skills-name'>{skill.name}</h4>
          <div className='progress' style={{ height: '30px' }}>
            <div
              className={`progress-bar ${skill.color} ${skill.progress}`}
              role='progressbar'
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Skills;
