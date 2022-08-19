import React, { useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

export default function LikeUpdate(){
    const [count, setCount] = useState(0);

    function update(){
        setCount(prevCount => prevCount + 1);
    }
    return (
      <div>
        <ExpandLessOutlinedIcon onClick={update} />
        <span>{count}</span>
      </div>
    );
}