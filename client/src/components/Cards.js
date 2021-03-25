import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectsDB from './DB/ProjectsDB';

const Cards = (props) => {
  const [projects, getProjects] = useState([]);

  useEffect(() => {
    getProjects(ProjectsDB);
  }, []);

  return (
    <div className='container-lg'>
      <h2 className='projects-title title-section'>Projects</h2>
      <div className='row align-items-start'>
        {projects.map((project) => (
          <div className='col'>
            <div className='g-card'>
              <div className='card-container'>
                <div className='card-front'>
                  <img
                    src={project.image}
                    className='img-fluid card-image'
                    alt='...'
                  />
                  <div className='title-div'>
                    <h5 className='card-title'>{project.name}</h5>
                  </div>
                </div>
                <div className='card-back'>
                  <div className='content'>
                    <h5 className='content-title'>{project.name}</h5>
                    <p className='content-text'>{project.description}</p>
                    <div className='link-div'>
                      <button type='button' class='btn btn-outline-info'>
                        View Project
                      </button>
                      <a href={project.github} rel='noopener noreferrer'>
                        <button type='button' class='btn btn-outline-success'>
                          View Github
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Cards;
