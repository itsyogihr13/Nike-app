import React, { useState } from "react";
import video from "./demo.mp4";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
export const VideoCard = () => {
  // function Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }

  // function SuccessSnackbar() {
  //   const [open, setOpen] = useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = (event, reason) => {
  //     if (reason === "clickaway") {
  //       return;
  //     }

  //     setOpen(false);
  //   };
  // }

  return (
    <>
      <div>
        <video src={video} width="1800" height="500" autoPlay muted></video>
      </div>
      <div className="text-center w-[50%]  m-auto">
        <h1 className="font-medium pt-[3rem] leading-[12px]">Nike Air Max</h1>
        <p className="font-black text-[65px] tracking-[1px]  ">ENHANCED AIR</p>
        <h1 className="font-medium mt-2">
          No rules. No Limits. That's how Air was bottled. Now a new
          point-loaded cushioning system is here to deliver even more comfort.
          Droping soon
        </h1>
        <button className="primaryblk-button mt-6 rounded-[60px]">
          Notify Me
        </button>
        {/* <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          className="snackbar"
        >
          <Alert onClose={handleClose} severity="success">
            Notification has been successfully sent!
          </Alert>
        </Snackbar> */}
      </div>
    </>
  );
};
