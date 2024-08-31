import Input from "./Input";
import { useRef } from "react";
import modalPopUp from "./modalPopUp";
export default function NewProject({ onDelete, onSave, onClose, state }) {
  function isRedactingFn(state){
    let isRedacting = state.redactedProject !== undefined
    if(isRedacting){
      return state.projects[state.redactedProject]
    }else{
      return {title:'',description:'',date:'', id:null}
    }
  }
  const {title, description, date,id} = isRedactingFn(state)
  const titleRef = useRef();
  const descrRef = useRef();
  const dateRef = useRef();
  function handleSave() {
    const title = titleRef.current.value;
    const description = descrRef.current.value;
    const date = dateRef.current.value;
    if (title && description && date) {
      state.redactedProject !== undefined ? onDelete(id) : undefined
      onSave({
        title,
        description,
        date,
      });
    } else {
      modalPopUp();
    }
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onClose}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input def={title} ref={titleRef} type="text" label="title" />
        <Input def={description}ref={descrRef} label="description" isTextarea />
        <Input def={date}ref={dateRef} type="date" label="deadline" />
      </div>
    </div>
  );
}
