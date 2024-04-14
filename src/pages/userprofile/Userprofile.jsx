import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./userprofile.css";

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://img.icons8.com/bubbles/100/000000/user.png"
  );
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("name");
    return storedName ? storedName : "John";
  });
  const [inputValue, setInputValue] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const updateName = () => {
    setIsEditingName(true);
  };

  const saveName = () => {
    if (inputValue.trim() !== "") {
      setName(inputValue);
      localStorage.setItem("name", inputValue);
      setIsEditingName(false);
    }
  };

  const cancelNameEdit = () => {
    setInputValue("");
    setIsEditingName(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setProfilePicture(imageDataUrl);
        localStorage.setItem("profilePicture", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className="page-content page-container pt-5"
      id="page-content"
      style={{ height: "100%", paddingBottom: "100px" }}
    >
      <div className="">
        <div className="row container d-flex justify-content-center mx-auto">
          <div className="col-xl-6 col-md-12">
            <div className="cardd user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="">
                      <img
                        src={profilePicture}
                        alt="Profile"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                        }}
                      />
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          id="fileInput"
                        />
                        <label className="btn border mt-2" htmlFor="fileInput">
                          {/* Change Profile Picture */}
                          <EditOutlinedIcon />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Name</p>
                        {isEditingName ? (
                          <div className="">
                            <input
                              type="text"
                              value={inputValue}
                              onChange={handleInputChange}
                              placeholder="Enter new name"
                              style={{
                                padding: "5px",
                              }}
                            />
                            <button
                              className="btn btn-outline-success mt-3"
                              onClick={saveName}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-outline-danger mx-4 mt-3"
                              onClick={cancelNameEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div
                            className=""
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>{name}</p>
                            <button
                              className="btn"
                              style={{
                                border: "none",
                                color: "blue",
                              }}
                              onClick={updateName}
                            >
                              <EditOutlinedIcon />
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6">
                        {/* <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">98979989898</h6> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default UserProfile;
