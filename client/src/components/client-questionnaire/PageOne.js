import React from 'react'

const PageOne = ({clientName, clientNumber, clientEmail, test}) => {

/* 
1. What does your company do?
2. Who is your target audience?
3. What’s your Unique Selling Proposition (USP)?
4. Do you want to improve an existing website, or create a website from scratch?
5. Do you want your website to be optimized for SEO? Do you have a list of keywords you’d
like to target?
6. What is the URL of your existing website (if any)? What do you like and dislike about your
existing website?

*/


    return (
        <div className="">
        <h1>Personal Info</h1>
            <div className="group">
              <label htmlFor="clientName">Your Name:</label>
              <input type="text" onChange={clientName} name="clientName" />
            </div>
            <div className="group">
              <label htmlFor="clientNumber">Note:</label>
              <textarea type="textarea" onChange={clientNumber} name="clientNumber" />
            </div>
            <div className="group">
              <label htmlFor="clientEmail">Note:</label>
              <textarea type="textarea" onChange={clientEmail} name="clientEmail" />
            </div>
          </div>
    )
}

export default PageOne
