import React, { useState, useEffect } from "react";
import FormBaseCard from "../base-components/form-base-card/FormBaseCard";
import "../css/Form.css";
import BaseButton from "../base-components/base-button/BaseButton";
import FormPage from "../components/client-questionnaire/FormPage";
import PageOne from "./client-questionnaire/PageOne";
import PageTwo from "./client-questionnaire/PageTwo";
import PageThree from "./client-questionnaire/PageThree";

const Form = () => {
  /**?
   * add redux
   *
   */

  const [name, setName] = useState("");
  const [note, setNote] = useState({name: '', age: '5'});
  const [form, setForm] = useState({
    index: 1,
    clientName: "",
    clientNumber: "",
    clientEmail: "",
    companyName: "",
    targetAudience: "",
    USP: "",
    existingSite: '',
    SEO: '',
    existingURL: '',
    existingSiteOpinion: '',
  });



  const next = (e) => {
    e.preventDefault();

    if (form.index < 3) {
      setForm(prevState => ({...prevState, index: form.index + 1 }));
    }
  };
  const back = (e) => {
    e.preventDefault();

    if (form.index > 1) {
      setForm(prevState => ({...prevState, index: form.index - 1 }));
    }
  };

//   const updateForm = (e) => {
//       e.preventDefault();
//       let objName = e.target.name;
//       let value = e.target.value;
//       setForm(prevState => ({...prevState, {objName}: value}));
//     console.log(form);

//   }

/**
 * 
 * @param {
 * clientName
 * clientNumber
 * clientEmail
 * companyName
 * targetAudience
 * USP
 * existingSite
 * SEO
 * existingURL
 * existingSiteOpinion
 * referenceSites
 * referenceOpinion
 * requestedPlatform
 * requiredPages
 * features
 * websiteGoal
 * contentReady
 * brandBook
 * launchDate
 * budget
 * maintenance
 * 
 * 
 * } e 
 */

  const updateValue = (e) => {
      e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "clientName":
        setForm(prevState => ({...prevState, clientName: value}))
        break;
      case "clientNumber":
        setForm(prevState => ({...prevState, clientNumber: value}));
        break;
      case "clientEmail":
        setForm(prevState => ({...prevState, clientEmail: value}));
        break;
      case "noteTwo":
        setForm(prevState => ({...prevState, noteTwo: value}));
        break;
      case "nameThree":
        setForm(prevState => ({...prevState, nameThree: value}));
        break;
      case "noteThree":
        setForm(prevState => ({...prevState, noteThree: value}));
        break;
      default:
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      nameOne: form.nameOne,
      noteOne: form.noteOne,
      nameTwo: form.nameTwo,
      noteTwo: form.noteTwo
    };
    console.log(data);
  };

  useEffect(() => {
    console.log(name);
  }, [name, note, form]);

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <FormBaseCard>
        
        {
            //display 
            form.index === 1 ? (<PageOne clientName={updateValue} clientNumber={updateValue} test={updateValue}/>) : form.index === 2 ? (<PageTwo nameTwo={updateValue} noteTwo={updateValue} />) : (<PageThree nameThree={updateValue} noteThree={updateValue} />)  
        }
        
          <div className="form_buttons_div">
            {
                form.index !== 1 ? <BaseButton text="Back" onClick={back} /> : null
            }{
                form.index !== 3 ? <BaseButton text="Next" onClick={next} /> : <BaseButton text="Submit" onClick={submitForm} />
            }
            {
                
            }
            {/* <button onClick={submitForm}>Submit</button> */}
            
            
          </div>
        </FormBaseCard>

      </form>
    </div>
  );
};

export default Form;
