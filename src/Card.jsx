import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaClipboardList } from "react-icons/fa6";
import { GiConversation } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

const Card = () => {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/upload").
    then((data) => {
      setData(data.data);
    });
  }, [files]);
  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    const fileObject = {};

    files.forEach((file, index) => {
      const key = `file${index + 1}`;
      formData.append("attachments", file);
      fileObject[key] = file.name;
      axios
        .post("http://localhost:5000/upload", fileObject)
        .then((data) => {
            if (data.data.insertedId) {
                console.log(data.data)
                toast.success("Upload Successfull")
                axios.get("http://localhost:5000/upload")
                .then((updatedData) => {
                  setData(updatedData.data);
      
                  // Show the new length of the data
                  console.log("New length of data:", updatedData.data.length);
                });  
            }

        });
    });

    console.log("submitted", fileObject);

    
  };
  return (
    <>
      <div className="bg-[#ffffff] m-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex gap-1">
            <img
              src="https://randomuser.me/api/portraits/men/35.jpg"
              alt=""
              className="w-8 rounded-full"
            />
            <h1 className="text-[#8f8d88] font-bold">Client Name</h1>
          </div>
          <div className="flex gap-1">
            <img
              src="https://randomuser.me/api/portraits/men/36.jpg"
              alt=""
              className="w-8 rounded-full"
            />
            <h1 className="text-[#8f8d88] font-bold">Sadik Istiak</h1>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HiOutlineSquare3Stack3D className="text-xl text-[#8f8d88]" />
            <p className="text-[#8f8d88]">Lorem ipsum dolor sit amet curn...</p>
          </div>

          <div className="bg-[#e8eef3] m-2 rounded-lg shadow-lg text-[#8f8d88] flex items-center gap-1">
            <FaClipboardList />
            <p className="text-[#8f8d88] font-bold">1/2</p>
          </div>
        </div>

        {/* footer */}
        <div className="flex items-center justify-evenly">
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt=""
            className="w-8 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt=""
            className="w-8 rounded-full"
          />
          <div className="bg-[#e8eef3] m-2 rounded-full shadow-lg text-[#8f8d88] flex items-center gap-1 w-8 p-1">
            <p className="text-[#8f8d88] font-bold ">12+</p>
          </div>
          <div className="m-2  flex items-center gap-1">
            <GiConversation className="text-[#8f8d88]  font-bold text-lg" />
            <p className="text-[#8f8d88]  font-bold">15</p>
          </div>
          <div className="m-2  flex items-center gap-1">
            
            <div>
             
              <div className="m-2  flex items-center gap-1">
                <div>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <GrAttachment className="text-[#8f8d88]  font-bold text-lg" />
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">Attachment Upload</h3>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="my-4"
                      />
                      <div className="file-list">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center">
                            <GrAttachment className="text-[#8f8d88]  font-bold text-lg" />
                            <p className="text-[#8f8d88]  font-bold mx-2">
                              {file.name} ({file.type})
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn mx-2"
                            onClick={() => setFiles([])}
                          >
                            Clear
                          </button>
                          <button
                            className="btn m-2"
                            onClick={() =>
                              document.getElementById("my_modal_4").close()
                            }
                          >
                            Close
                          </button>
                          <button className="btn" onClick={handleUpload}>
                            Upload
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <p className="text-[#8f8d88]  font-bold">{data.length}</p>
              </div>
            </div>
          </div>

          <div className="m-2  flex items-center gap-1">
            <FaCalendarAlt className="text-[#8f8d88]  font-bold text-lg" />
            <p className="text-[#8f8d88]  font-bold">30-12-2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
