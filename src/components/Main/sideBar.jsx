import UnicBtn from "./UnicBtn";
export default function SideBar({ onStartAdd, state, onSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <UnicBtn onClick={onStartAdd}>+Add project</UnicBtn>
      </div>
      <ul className="mt-8">
        {Object.values(state.projects).map((item) => {
          return (
            <button
              id={item.id}
              key={item.id}
              onClick={(el) => onSelect(el.target.id)}
              className={
                state.selectedProject == item.id
                  ? "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 bg-stone-800 "
                  : "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-700"
              }
            >
              {item.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
