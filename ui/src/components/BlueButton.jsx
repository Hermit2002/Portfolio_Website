import Rect from "react";

const BlueButton = (props) => {
  return (
    <button
      className="resume text-resume border-3 border-indigo-500 bg-indigo-500 rounded-full px-3 py-1 hover:bg-transparent hover:border-slate-200"
      type="button"
    >
      {props.name}
    </button>
  );
};

export default BlueButton;
