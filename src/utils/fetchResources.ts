import { EnhancedResource } from "@/types";

export const fetchResources = async (id?: string) => {
  try {
    const response = await fetch("/mock-data/resources.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: EnhancedResource[] = await response.json();
    // concatenate any resources saved to local storage
    const savedResources = JSON.parse(
      localStorage.getItem("resources") || "[]"
    ) as EnhancedResource[];
    const updatedResources = savedResources.concat(data);
    console.log({savedResources, updatedResources})
    if (id) {
      return updatedResources.filter((data) => data.id === id);
    }
    return updatedResources;
  } catch (error) {
    console.error("Error fetching resources:", error);
  }
};
