export type RecentRun = {
  id: string;
  workflowName: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
  startedAt: string;
  completedAt: string | null;
  taskCount: number;
  duration: number | null;
};

export type Workflow = {
  id: string;
  name: string;
  description: string | null;
  definition: { nodes: unknown[]; edges: unknown[] };
  createdAt: string;
  updatedAt: string;
};
