export default function SelectedProject({
  obj: { title, description, date, id },
  onClose, onDelete, onRedact
}) {
  return (
    <div className="">
      <div>Title = {title}</div>
      <div>Description = {description}</div>
      <div>Date = {date}</div>
      <button
        onClick={onClose}
        className="text-stone-800 hover:text-stone-950 bg-stone-300 px-6 mx-4 py-2 rounded-xl"
      >
        Cancel
      </button>
      <button
        onClick={()=> onRedact(id)}
        className="bg-stone-500 text-stone-50 hover:bg-stone-950 mx-4 px-6 py-2 rounded-xl"
      >
        Manage
      </button>
      <button
        onClick={() => onDelete(id)}
        className="bg-stone-800 text-stone-50 hover:bg-stone-950 mx-4 px-6 py-2 rounded-xl"
      >
        Delete
      </button>
    </div>
  );
}
