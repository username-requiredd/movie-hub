import Nav from "../../components/Nav/Nav";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./userprofile.css";
import { useState, useEffect } from "react";
const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://img.icons8.com/bubbles/100/000000/user.png"
  );
  useEffect(() => {
    // Load profile picture from local storage when the component mounts
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  // Function to handle file input change

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      // Check if a file is selected
      const reader = new FileReader(); // Create a new FileReader instance
      reader.onload = () => {
        // Callback function to handle file reading
        const imageDataUrl = reader.result;
        setProfilePicture(imageDataUrl); // Update the profile picture state with the data URL of the selected file
        // Save the image data URL in local storage
        localStorage.setItem("profilePicture", imageDataUrl);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code here to upload the selected image to the server
  };

  return (
    <div
      className="page-content page-container pt-5"
      id="page-content"
      style={{ height: "100vh" }}
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
                          Change Profile image
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
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">98979989898</h6>
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
