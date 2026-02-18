import BASE_URL from "./api";

export const getSkills = async () => {
  const response = await fetch(`${BASE_URL}/skills`);
  return response.json();
};
