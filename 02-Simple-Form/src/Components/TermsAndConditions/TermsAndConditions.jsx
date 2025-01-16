import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="mt-10 text-start w-6/12 mx-auto mb-20">
      <h1 className="text-3xl text-white font-bold mb-2">
        Terms and Conditions for Company Name
      </h1>
      <h1 className="text-2xl text-white font-bold mb-3">Introduction</h1>
      <p>
        These Website Standard Terms and Conditions written on this webpage
        shall manage your use of our website, Webiste Name accessible at
        Website.com. These Terms will be applied fully and affect to your use of
        this Website. By using this Website, you agreed to accept all terms and
        conditions written in here. You must not use this Website if you
        disagree with any of these Website Standard Terms and Conditions. Minors
        or people below 18 years old are not allowed to use this Website.
      </p>
      <h1 className="text-2xl text-white font-bold mb-3 mt-5">
        Intellectual Property Rights
      </h1>
      <p>
        Other than the content you own, under these Terms, Company Name and/or
        its licensors own all the intellectual property rights and materials
        contained in this Website. You are granted limited license only for
        purposes of viewing the material contained on this Website.
      </p>

      <h1 className="text-2xl text-white font-bold mb-3 mt-5">Restrictions</h1>
      <p className="mb-3">
        You are specifically restricted from all of the following:
      </p>
      <ul className="list-disc list-inside">
        <li>Publishing any Website material in any other media;</li>
        <li>
          Selling, sublicensing and/or otherwise commercializing any Website
          material;
        </li>
        <li>Publicly performing and/or showing any Website material;</li>
        <li>
          Using this Website in any way that is or may be damaging to this
          Website;
        </li>
        <li>
          Using this Website in any way that impacts user access to this
          Website;
        </li>
        <li>
          Using this Website contrary to applicable laws and regulations, or in
          any way may cause harm to the Website, or to any person or business
          entity;
        </li>
        <li>
          Engaging in any data mining, data harvesting, data extracting or any
          other similar activity in relation to this Website;
        </li>
        <li>Using this Website to engage in any advertising or marketing.</li>
      </ul>
      <p className="mt-3 ">
        Certain areas of this Website are restricted from being access by you
        and Company Name may further restrict access by you to any areas of this
        Website, at any time, in absolute discretion. Any user ID and password
        you may have for this Website are confidential and you must maintain
        confidentiality as well.
      </p>

      <div className="w-6/12 mx-auto">
        <button className="btn btn-primary mt-5">
          <Link to={"/register"}>Back To Register</Link>
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
