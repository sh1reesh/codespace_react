import React, { useState } from 'react';

// Step 1 Component
const Step1 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 1: Personal Information</h2>
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);

// Step 2 Component
const Step2 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 2: Address Details</h2>
    <label>
      Address:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <label>
      City:
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);

// Step 3 Component
const Step3 = ({ formData, handleChange }) => (
  <div>
    <h2>Step 3: Payment Information</h2>
    <label>
      Credit Card Number:
      <input
        type="text"
        name="creditCard"
        value={formData.creditCard}
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <label>
      Expiry Date:
      <input
        type="text"
        name="expiry"
        value={formData.expiry}
        onChange={handleChange}
        required
      />
    </label>
  </div>
);

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    creditCard: '',
    expiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform final validation or API submission here
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {currentStep === 3 && <Step3 formData={formData} handleChange={handleChange} />}

      <div style={{ marginTop: '20px' }}>
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultistepForm;