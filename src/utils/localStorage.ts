import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  EnhancedResource,
  Individual,
} from "@/types";

export const setUserInLocalStorage = (
  userType: "individual" | "business" | "charity",
  userData:
    | Individual
    | Partial<EnhancedBusinessContact>
    | Partial<EnhancedCharityContact>
) => {
  console.log(`setting ${userType} user`);
  localStorage.clear();
  localStorage.setItem("user", JSON.stringify(userData));
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getDetailFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * Get all resources from local storage.
 * @returns {EnhancedResource[]} Array of resources.
 */
export const getResourcesFromLocalStorage = (): EnhancedResource[] => {
  return JSON.parse(localStorage.getItem("resources") ?? "[]");
};

/**
 * Save a new resource to local storage.
 * @param {EnhancedResource} newResource - The resource to add.
 */
export const saveResourceToLocalStorage = (
  newResource: EnhancedResource
): void => {
  const existingResources = getResourcesFromLocalStorage();
  const updatedResources = [newResource, ...existingResources];
  localStorage.setItem("resources", JSON.stringify(updatedResources));
};
