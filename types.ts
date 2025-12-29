
export interface TaskDetail {
  title: string;
  description: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  icon: string;
  tasks: string[];
  detailedTasks?: TaskDetail[];
  status: 'Ativo' | 'Offline';
}
