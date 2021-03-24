import React, { useState, useEffect } from 'react';
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
                      <button type='button' class='btn btn-outline-success'>
                        View Github
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
        {/* <div className='col'>
          <div className='g-card'>
            <div className='card-container'>
              <div className='card-front'>
                <img
                  src={brainflix}
                  className='img-fluid card-image'
                  alt='...'
                />
                <div className='title-div'>
                  <h5 className='card-title'>BRAINFLIX</h5>
                </div>
              </div>
              <div className='card-back'>
                <div className='content'>
                  <h5 className='content-title'>Brainflix</h5>
                  <p className='content-text'>
                    A Youtube clone used to show off some of it's functionality
                    and layout.
                  </p>
                  <button type='button' class='btn btn-outline-info'>
                    View Project
                  </button>
                  <button type='button' class='btn btn-outline-success'>
                    View Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='g-card'>
            <div className='card-container'>
              <div className='card-front'>
                <img src={clear} className='img-fluid card-image' alt='...' />
                <div className='title-div'>
                  <h5 className='card-title'>CLEAR SKIES</h5>
                </div>
              </div>
              <div className='card-back'>
                <div className='content'>
                  <h5 className='content-title'>Clear Skies</h5>
                  <p className='content-text'>
                    A website designed to allow mental health professionals
                    easier access to their patients during the COVID-19
                    pandemic.
                  </p>
                  <button type='button' class='btn btn-outline-info'>
                    View Project
                  </button>

                  <button type='button' class='btn btn-outline-success'>
                    View Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
