import { v4 as uuidv4 } from 'uuid';
import clear from '../../assets/images/Clear-skies.png';
import bandsite from '../../assets/images/bandsite-cover.png';
import brainflix from '../../assets/images/Brainflix.png';
import devfinder from '../../assets/images/devfinder.png';

const ProjectsDB = [
  {
    id: uuidv4(),
    name: 'CLEAR SKIES',
    description:
      'A website designed to allow mental health professionals easier access to their patients during the COVID-19 pandemic.',
    image: clear,
    github: 'https://github.com/corycoupe/Clear-Skies',
    demo: '',
  },
  {
    id: uuidv4(),
    name: 'DEVFINDER',
    description:
      'A facebook-like app used to connect Devs of different disciplines with forum, profile and user functionality.',
    image: devfinder,
    github: 'https://github.com/corycoupe/MERN-Practice',
    demo: '',
  },
  {
    id: uuidv4(),
    name: 'BANDSITE',
    description:
      "A website designed to showcase a band's biography as well as their tickets and venues.",
    image: bandsite,
    github: 'https://github.com/corycoupe/Bandsite-Project',
    demo: '',
  },
  {
    id: uuidv4(),
    name: 'BRAINFLIX',
    description:
      "A Youtube clone used to show off some of it's functionality and layout.",
    image: brainflix,
    github: 'https://github.com/corycoupe/Brainflix-Project',
    demo: '',
  },
];
export default ProjectsDB;
