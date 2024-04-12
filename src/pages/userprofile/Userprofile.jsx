import Nav from "../../components/Nav/Nav";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./userprofile.css";
const UserProfile = () => {
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
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                      <button className="btn border">
                        {" "}
                        edit
                        {/* <EditOutlinedIcon className="" /> */}
                      </button>
                    </div>
                    <h6 className="text-center">Festus</h6>
                    {/* <p>Web Designer</p> */}
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
