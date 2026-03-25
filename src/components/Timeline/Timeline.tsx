export default function Timeline({ tasks }: any) {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);

  const todayOffset =
    ((Date.now() - startOfMonth.getTime()) / 86400000) * 40;

  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
      <div className="relative w-[2000px] h-[800px]">
        {tasks.slice(0, 50).map((t: any, i: number) => {
          const start = t.startDate || t.dueDate;
          const left =
            ((start - startOfMonth.getTime()) / 86400000) * 40;

          const width =
            ((t.dueDate - start) / 86400000) * 40 || 6;

          return (
            <div
              key={t.id}
              className="absolute h-6 rounded bg-blue-500"
              style={{ top: i * 30, left, width }}
            />
          );
        })}

        <div
          className="absolute top-0 bottom-0 w-[2px] bg-red-500"
          style={{ left: todayOffset }}
        />
      </div>
    </div>
  );
}