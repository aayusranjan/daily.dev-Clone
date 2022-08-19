import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";

import "./Comment.css";

function Comment(){
 const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal); //if false then true and vise versa
  };

  // Its make our popup background unscrollable
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
    <CommentIcon onClick={toggleModal}/>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>comment section</h2>
            <input />
            <button>comment</button>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Comment;