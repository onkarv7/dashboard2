import React from "react";
import Form from "./Form";
import Data from "./Data";


const Sidebar = () => {
  return (
    <div>
      <div>
      <div className=" flex flex-col justify-center	 bg-indigo-500 h-16"><div className="text-xl ml-16">Dashboard</div></div>
        <div className=" flex flex-col justify-center	justify-center	mx-16 my-44	">
          
          <a className="	 bg-gradient-to-r from-green-400 to-blue-500 hover:from-grey-500 hover:to-yellow-500  my-6 bg-blue-100 rounded-md 	 w-40 h-10" style={{ color: "#2962FF" }}>
            <a href="javascript:location.reload(true)"></a>
            Dashbord
          </a>
          <a href="/data " className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-grey-500 hover:to-yellow-500  my-6 bg-blue-100 w-40 h-10">Data</a>
          <a href='./form' className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-grey-500 hover:to-yellow-500  my-6 bg-blue-100 w-40 h-10">Form</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
