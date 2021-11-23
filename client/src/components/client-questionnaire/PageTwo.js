import React from 'react'

const PageTwo = ({nameTwo, noteTwo}) => {


    /*
    7. What is the URL of 2-3 reference websites that you like? What do you like about these
websites?
8. Do you know what platform you want to use for your site?
9. What pages do you need on your website?
10.What features do you need on your website?
11.What’s the underlying goal of your website?
12.Do you have the content ready for your
    */
    return (
        <div className="">
                <h1>Business Info</h1>

            <div className="group">
              <label htmlFor="name">Name:</label>
              <input type="text" onChange={nameTwo} name="nameTwo" />
            </div>
            <div className="group">
              <label htmlFor="note">Note:</label>
              <textarea type="textarea" onChange={noteTwo} name="noteTwo" />
            </div>
          </div>
    )
}

export default PageTwo
