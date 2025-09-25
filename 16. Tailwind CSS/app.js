import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="max-w-80 shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/397500/397563.jpg"
          alt="Virat Kohli"
        />
        <img
          className="absolute max-w-18 h-18 rounded-full bottom-2 left-2 object-cover object-center z-20"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png"
          alt="indian flag"
        />
        <img
          className="absolute max-w-24 bottom-1 -right-3 z-10"
          src="https://images.seeklogo.com/logo-png/34/2/royal-challengers-bengaluru-logo-png_seeklogo-349568.png"
          alt="rcb logo"
        />
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <h1 className=" text-5xl font-bold text-[rgba(0,0,0,0.8)] z-50">
          Virat Kohli
        </h1>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold">Test: 9,230</p>
          <p className="text-lg font-semibold">Odi: 14,085</p>
          <p className="text-lg font-semibold">T20i: 4,188</p>
          <p className="text-lg font-semibold">IPL: 8,509</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
