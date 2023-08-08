import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
      router.push(`/step-${step + 1}`);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
    router.push(`/step-${step - 1}`);
  };

  const handleSubmit = () => {
    // Implement form submission logic here (optional)
    router.push('/summary');
  };

  const validateStep = (step) => {
    // Implement your validation logic for each step here
    // Return true if the step is valid, otherwise false
    return true;
  };

  return (
    <>
      {step === 1 && (
        <form>
          {/* Step 1 form */}
          <button onClick={handleNext}>Next</button>
        </form>
      )}
      {step === 2 && (
        <form>
          {/* Step 2 form */}
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </form>
      )}
      {step === 3 && (
        <form>
          {/* Step 3 form */}
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </>
  );
};

export default MultiStepForm;