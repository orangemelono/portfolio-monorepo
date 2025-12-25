import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types";

const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch('/api/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
};

const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await fetch(`/api/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProjectById(id),
    enabled: !!id,
  });
};