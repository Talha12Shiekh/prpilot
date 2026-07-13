import { users } from "./TargetUsers.data";
import { TargetUserCard } from "./TargetUserCard";

export function TargetUsers() {
  return (
    <section className="py-24 px-6 text-center flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#ff8c37] mb-3 block">Who it's for</span>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Built for every team size
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {users.map((u, i) => (
            <TargetUserCard
              key={i}
              user={u}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
