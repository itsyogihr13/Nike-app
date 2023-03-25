import React from "react";
import video from "./demo.mp4";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

export const VideoCard = () => {
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
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
        <button
          onClick={() => setOpen(true)}
          className="primaryblk-button mt-6 rounded-[60px]"
        >
          Notify Me
        </button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setOpen(false)} severity="success">
            Will notify you shortly !
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
