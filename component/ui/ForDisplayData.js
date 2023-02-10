import { useState } from "react";

function ForDataDisplay({ key, value }) {
    // const [previewPicture, setProfilePicture] = useState(value[0].profilePicture);
    // const toAccessData = for(let i = 0; i<=)

    return (
      <>
        {/* <div>{`${key} 1 : ${setProfilePicture(value[0].profilePicture)} `}</div> */}
        <div key={key}>{`Profile Picture :  `}</div>
        {/* <img src={previewPicture} /> */}
        <div>{`Name : ${value.name}`}</div>
        <div>{`Age : ${value.age}`}</div>
        <div>{`Gender : ${value.gender}`}</div>
      </>
    );
  }

  export default ForDataDisplay

  // <div>{`${key}: ${value}`}</div>