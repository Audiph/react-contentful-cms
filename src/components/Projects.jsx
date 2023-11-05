import { useFetchProjects } from '../utils/fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return <h2>Projects</h2>;
};

export default Projects;
