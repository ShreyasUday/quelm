type Props = {
  params: Promise<{
    id: string;
  }>;
};

const WorkflowDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-3xl border border-border bg-card/50 p-10">
        <h1 className="text-3xl font-semibold tracking-tight">Workflow Details</h1>

        <p className="mt-3 text-sm text-muted-foreground">Workflow ID: {id}</p>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          The workflow detail canvas, execution graph, live orchestration state, and node
          inspector are still under development.
        </p>
      </div>
    </section>
  );
};

export default WorkflowDetailPage;
