import BASE_URL from "./api";

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  return response.json();
};
