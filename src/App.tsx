import  { useState } from "react";
import pic from "./pic/2024-09-11 13.56.05.jpg";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [padding, setPadding] = useState(10);

  const handleYesClick = () => {
    setShowPopup(true);
    setPadding(10);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  function up() {
    setPadding(padding + padding);
  }

  return (
    <div className="flex flex-col justify-center pl-10 pr-10 items-center w-full h-screen">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-5 top-20 sticky ">
          <h1 className= " text-xl text-red-400">
            ស្រលាញ់បងវិញមក​ Chhop Ngor tv bro Cute 😒😍
          </h1>
          <h2 className="text-2xl ">Do You Chhop ngor ot ? 😒😒  Bro Please Tell Me Chhop kr ot chhop? 😒</h2>
          <div className="flex w-full h-full gap-5">
            <img
              className="w-48"
              src="https://i.pinimg.com/736x/03/ea/2e/03ea2ef4a750a3124895d302ce96a904.jpg"
              alt=""
            />
            <img className="w-34 h-36" src={pic} alt="PIC" />
          </div>
        </div>

        <div className="w-full flex justify-between">
          <button
            onClick={handleYesClick}
            style={{ padding: padding }}
            className={` text-2xl w-36 bg-blue-500 hover:bg-blue-600 transition duration-300`}
          >
            Yes
          </button>
          <button
            onClick={up}
            className="p-3 w-28 h-10 bg-red-500 hover:bg-red-600 transition duration-300"
          >
            No
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
          <div className="bg-white p-5 rounded shadow-lg transform transition-transform duration-500 ease-out scale-105">
            <h3 className="text-green-500">Congratulations!</h3>
            <img
              src="https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-5.gif"
              alt=""
            />
            <h2 className="text-black text-3xl">Bat Ngor pleam bro Cute😒😒😒 </h2>
            <button
              onClick={handleClosePopup}
              className="mt-3 p-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
