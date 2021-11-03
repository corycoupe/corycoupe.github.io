import { v4 as uuidv4 } from 'uuid';
import clear from '../../assets/images/Clear-skies.png';
import bandsite from '../../assets/images/bandsite-cover.png';
import brainflix from '../../assets/images/Brainflix.png';
import devfinder from '../../assets/images/devfinder.png';
import alliedvoices from '../../assets/images/Allied-voices.png';
import billionminds from '../../assets/images/8billionminds.png';

const ProjectsDB = [
  {
    id: uuidv4(),
    name: 'ALLIED VOICES',
    description:
      'Website that helps users navigate their racial landscape through geographic data, individual stories, and supportive resources.',
    image: alliedvoices,
    github: 'https://github.com/Allied-Voices',
    demo: 'https://www.alliedvoices.org/',
  },
  {
    id: uuidv4(),
    name: '8BILLIONMINDS',
    description:
      'A free online interactive learning platform where you can learn, teach and chat about almost anything.',
    image: billionminds,
    github: 'https://gitlab.com/8billionminds-group/8billionminds',
    demo: 'https://www.8billionminds.com/',
  },
  {
    id: uuidv4(),
    name: 'CLEAR SKIES',
    description:
      'A website designed to allow mental health professionals easier access to their patients during the COVID-19 pandemic.',
    image: clear,
    github: 'https://github.com/corycoupe/Clear-Skies-Redux',
    demo: 'https://floating-sands-30641.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'DEVFINDER',
    description:
      'A facebook-like app used to connect Devs of different disciplines with forum, profile and user functionality.',
    image: devfinder,
    github: 'https://github.com/corycoupe/MERN-Practice',
    demo: 'https://desolate-refuge-27725.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'BANDSITE',
    description:
      "A website designed to showcase a band's biography as well as their tickets and venues.",
    image: bandsite,
    github: 'https://github.com/corycoupe/Bandsite-Project',
    demo: 'https://bandsite-deploy.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'BRAINFLIX',
    description:
      "A Youtube clone used to show off some of it's functionality and layout.",
    image: brainflix,
    github: 'https://github.com/corycoupe/Brainflix-Project',
    demo: 'https://brainflix-deploy.herokuapp.com/videos',
  },
];
export default ProjectsDB;
