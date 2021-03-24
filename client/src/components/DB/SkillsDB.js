import { v4 as uuidv4 } from 'uuid';

const SkillsDB = [
  {
    id: uuidv4(),
    name: 'HTML',
    progress: 'fill-html',
    color: 'bg-info',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    progress: 'fill-css',
    color: 'bg-success',
  },
  {
    id: uuidv4(),
    name: 'Javascript',
    progress: 'fill-javascript',
    color: 'bg-warning',
  },
  {
    id: uuidv4(),
    name: 'React',
    progress: 'fill-react',
    color: 'bg-danger',
  },
  {
    id: uuidv4(),
    name: 'NodeJS',
    progress: 'fill-node',
    color: 'bg-primary',
  },
  {
    id: uuidv4(),
    name: 'ExpressJS',
    progress: 'fill-express',
    color: 'bg-secondary',
  },
  {
    id: uuidv4(),
    name: 'Redux',
    progress: 'fill-redux',
    color: 'bg-light',
  },
  {
    id: uuidv4(),
    name: 'MongoDB',
    progress: 'fill-mongo',
    color: 'bg-dark',
  },
];

export default SkillsDB;
