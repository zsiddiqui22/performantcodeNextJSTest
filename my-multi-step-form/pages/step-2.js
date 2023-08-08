import { useDispatch, useSelector } from 'react-redux';
import { setStep, setDOB, setPhoneNumber } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';

const Step2Page = () => {
    const dispatch = useDispatch();
    const { dob, phoneNumber } = useSelector((state) => state.form);
  
    const handleNext = () => {
      // Add form validation logic here
      if (dob.trim() === '' || !isValidPhoneNumber(phoneNumber)) {
        return;
      }
  
      dispatch(setStep(3));
    };
  
    const handlePrevious = () => {
      dispatch(setStep(1));
    };  

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^[0-9]{10}$/;
        return phoneNumberPattern.test(phoneNumber);
      };

    const isValidStep2 = dob.trim() !== '' && isValidPhoneNumber(phoneNumber);

  return (
    <div style={{padding:'10px 30px'}}>
      <h1>Step 2</h1>

      <form>
        <div className='form-group'>
          <label>DOB</label>
          <input
            type='date'
            value={dob}
            onChange={(e) => dispatch(setDOB(e.target.value))}
            required
          />
        </div>
        <div className='form-group'>
          <label>Phone Number</label>
          <input
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            required
          />
        </div>
      </form>
      
      <div>
        <Link href='/step-1'>
          <button onClick={handlePrevious}>Previous</button>
        </Link>
        <Link href='/step-3'>
          <button onClick={handleNext} disabled={!isValidStep2}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step2Page;
