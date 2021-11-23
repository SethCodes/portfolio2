import React from "react";
import PageOne from "../client-questionnaire/PageOne";
import PageTwo from "../client-questionnaire/PageTwo";
import PageThree from "../client-questionnaire/PageThree";

const FormPage = ({ index, nameOneInput, noteOneInput, nameTwoInput, noteTwoInput, nameThreeInput, noteThreeInput }) => {
  switch (index) {
    case 1:
      return <PageOne nameOneInput={nameOneInput} noteOneInput={noteOneInput} />;
    case 2:
      return <PageTwo nameTwoInput={nameTwoInput} noteTwoInput={noteTwoInput}  />;
    case 3:
      return <PageThree nameThreeInput={nameThreeInput} noteThreeInput={noteThreeInput}  />;
    default:
      break;
  }
};

export default FormPage;
