import { useState } from "react";

export default function NewTask({ onAdd }) {

    const [enteredValue, setValue] = useState('');

    const handleValue = (event) => {

        setValue(event.target.value);
    }

    const handleSaveTask = () => {
        console.log(enteredValue);
        if (enteredValue.length === 0) {
            return;
        }
        onAdd(enteredValue);
        setValue('');
    };
    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 rounded-sm bg-stone-200" required value={enteredValue} onChange={handleValue} />
        <button className="text-slate-700 hover:text-slate-950"
            onClick={handleSaveTask}
        >Add Task</button>
    </div>;

}