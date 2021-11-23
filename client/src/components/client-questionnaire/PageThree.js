import React from "react";

const PageThree = ({ nameThree, noteThree }) => {
  /**
     * 
     * 13.Does your company have a brand book covering things like colors and fonts?
14.When would you like to launch your new site?
15.What is your budget for the website?
16.Do you need help updating and maintaining your website?
     */
  return (
    <div className="">
      <h1>Website Requirements</h1>
      <p>Not everything is covered here, but it's a great start!</p>

      <div className="group">
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={nameThree} name="nameThree" />
      </div>
      <div className="group">
        <label htmlFor="note">Note:</label>
        <textarea type="textarea" onChange={noteThree} name="noteThree" />
      </div>
    </div>
  );
};

export default PageThree;
