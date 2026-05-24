"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, GitBranch } from "lucide-react";

type WorkflowCardProps = {
  id: string;
  name: string;
  description: string | null;
  nodeCount: number;
  createdAt: string;
};

const WorkflowCard = ({
  id,
  name,
  description,
  nodeCount,
  createdAt,
}: WorkflowCardProps) => {
  return (
    <Link
      href={`/workflows/${id}`}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card"
    >
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/3 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-full flex-col justify-between gap-6">
        {/* Top */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
                {name}
              </h3>

              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {description !== null ? description : "No workflow description provided."}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground transition-colors group-hover:bg-accent">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GitBranch className="h-4 w-4" />
            <span>
              {nodeCount} node{nodeCount !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkflowCard;
