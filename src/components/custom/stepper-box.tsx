export default function StepperBox({
  total = 10,
  current = 0,
  setCurrent,
}: {
  total: number;
  current: number;
  setCurrent: (v: number) => void;
}) {
  return (
    <>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: Number(total) }).map((_, i) => (
          <span
            key={i}
            
            className={`w-1 h-1 p-1 rounded-full ${
              current === i ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </>
  );
}
