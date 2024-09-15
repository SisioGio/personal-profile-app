import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const acceptPolicy = () => {
    localStorage.setItem("ag-digitalexpert-policy-accepted", "true");
    setPolicyAccepted(true);
  };

  useEffect(() => {
    const policyAccepted = localStorage.getItem(
      "ag-digitalexpert-policy-accepted"
    );
    if (policyAccepted) {
      setPolicyAccepted(true);
    }
  }, []);
  return policyAccepted ? null : (
    <div className="fixed bottom-0 w-full bg-black text-white p-5  z-50">
      <h1 className="text-3xl font-bold mb-4">Privacy and Cookies Policy</h1>
      <div className="flex mx-auto justify-center gap-3">
        {!isExpanded && (
          <button className="" onClick={(event) => setIsExpanded(!isExpanded)}>
            See Policy
          </button>
        )}

        <button
          className=" bg-white text-black p-2"
          onClick={(event) => acceptPolicy()}>
          Accept Policy
        </button>
      </div>

      {isExpanded && (
        <div className="">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Effective Date: 03.08.2024
            </h2>
            <p>
              Welcome to my AG-DigitalExpert.com. We are committed to protecting
              your privacy and ensuring that your personal information is
              handled in a safe and responsible manner. This policy outlines how
              we collect, use, and protect your data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you visit our website and use our contact form, we may
              collect the following information:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect in the following ways:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                To respond to your inquiries and provide the services you
                request.
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
