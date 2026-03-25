import Row from "./Row";

export default function ListView({ tasks, dispatch }: any) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden h-[75vh]">
      <div className="grid grid-cols-3 p-4 bg-gray-100 text-sm font-semibold ">
        <div>Title</div>
        <div>Status</div>
        <div>Assignee</div>
      </div>

      <div className="overflow-auto h-full">
        {tasks.map((t: any) => (
          <Row key={t.id} task={t} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}