export default function ({ participantArr }) {
  return (
    <div className="flex max-h-[calc(100vh-65px)] flex-col overflow-y-auto pb-6 pt-4">
      {participantArr.map(({ name, profilePic }) => {
        return (
          <div className="flex gap-4 border-b border-slate-300 py-2">
            <img className="w-12" src={profilePic} alt="" />
            <p className="mt-2 text-lg text-slate-900">{name}</p>
          </div>
        );
      })}
    </div>
  );
}
