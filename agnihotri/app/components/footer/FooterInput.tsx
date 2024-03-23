import "./footer.css";

export default function Input() {
  return (
    <>
      <div className="">
        <div className="text-sm mx-3 lg:mx-5 lg:text-lg text-slate-50">Dont Miss Any Updates!!</div>
        <button
          className="text-teal-700 border-teal-600 
                border-spacing-2 border-2 
                rounded-md text-xs bg-white
                 hover:bg-teal-700 hover:text-slate-50 p-1
                  active:bg-teal-900 hover:border-teal-700
                lg:text-base mx-5 my-5"
        >
          Join Our Newsletter
        </button>
      </div>
    </>
  );
}
