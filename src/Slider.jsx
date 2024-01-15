import Card from "./Card";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="flex overflow-x-auto gap-2">
      {/* Incomplete */}
      <div className="flex-none h-screen overflow-y-auto">
        <div className="w-[500px] flex flex-col overflow-x-hidden  bg-[#f2f4f7]">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <div className="h-8 w-8 m-2 bg-red-700 rounded-full rounded-r-none"></div>
              <h1 className="text-[#8f8e94] font-bold ml-2">Incomplete</h1>
            </div>
            <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg">
              <p className="text-[#605766] p-2 font-bold">0</p>
            </div>
          </div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>

      {/* To Do */}
      <div className="flex-none h-screen overflow-y-auto">
        <div className="w-[500px] flex flex-col  overflow-x-hidden   bg-[#f2f4f7]">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <div className="h-8 w-8 m-2 bg-[#00b5ff] rounded-full rounded-r-none"></div>
              <h1 className="text-[#8f8e94] font-bold ml-2">To Do</h1>
            </div>
            <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg">
              <p className="text-[#605766] p-2 font-bold">0</p>
            </div>
          </div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>

      {/* Doing */}
      <div className="flex-none h-screen overflow-y-auto">
        <div className="w-[500px] flex flex-col  overflow-x-hidden   bg-[#f2f4f7]">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <div className="h-8 w-8 m-2 bg-[#ffe700] rounded-full rounded-r-none"></div>
              <h1 className="text-[#8f8e94] font-bold ml-2">Doing</h1>
            </div>
            <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg">
              <p className="text-[#605766] p-2 font-bold">0</p>
            </div>
          </div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
          </div>
        </div>
      </div>

      {/* Under Review */}
      <div className="flex-none h-screen overflow-y-auto">
        <div className="w-[500px] flex flex-col  overflow-x-hidden   bg-[#f2f4f7]">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <h1 className="text-[#8f8e94] font-bold ml-2">Completed</h1>
            </div>
            <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg">
              <p className="text-[#605766] p-2 font-bold">0</p>
            </div>
          </div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>

      {/* Over Due  */}
      <div className="flex-none h-screen overflow-y-auto">
        <div className="w-[500px] flex flex-col   overflow-x-hidden  bg-[#f2f4f7]">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <h1 className="text-[#8f8e94] font-bold ml-2">Over Due</h1>
            </div>
            <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg">
              <p className="text-[#605766] p-2 font-bold">0</p>
            </div>
          </div>
          <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
