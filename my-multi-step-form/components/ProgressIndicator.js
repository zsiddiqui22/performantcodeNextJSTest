import React from 'react';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const stepWidth = (currentStep / totalSteps) * 100 + '%';

  return (
    <div className="progress-indicator">
      <div className="progress-bar" style={{ width: stepWidth }}></div>
      <div className="steps">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`step ${index + 1 === currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
