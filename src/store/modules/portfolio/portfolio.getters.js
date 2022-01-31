const sortByPosition = (a, b) => {
  if (a.position < b.position) return -1;
  if (a.position > b.position) return 1;
  return 0;
};

export default {
  getProject: (state) => (id) => {
    return state.projects[id];
  },
  projectsDelivered(state) {
    const keys = Object.keys(state.projects);
    return keys
      .map((key) => state.projects[key])
      .filter((project) => !project.inProgress)
      .sort(sortByPosition);
  },
  projectsInProgress(state) {
    return Object.keys(state.projects)
      .map((key) => state.projects[key])
      .filter((project) => project.inProgress)
      .sort(sortByPosition);
  },
};
