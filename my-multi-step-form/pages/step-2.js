import { useDispatch, useSelector } from 'react-redux';
import { setStep, setDOB, setPhoneNumber } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressIndicator from '../components/ProgressIndicator';

const Step2Page = () => {
    const dispatch = useDispatch();
    const { dob, phoneNumber } = useSelector((state) => state.form);

    const currentStep = 2;
    const totalSteps = 4;
  
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
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <h1>Step 2</h1>

      <form>
        <div className='form-group'>
          {/* <label>DOB</label>
          <input
            type='date'
            value={dob}
            onChange={(e) => dispatch(setDOB(e.target.value))}
            required
          /> */}
          <TextField 
            id="name" 
            label="DOB" 
            variant="standard" 
            type='date'
            value={dob}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => dispatch(setDOB(e.target.value))}  margin="dense"/>
        </div>
        <div className='form-group'>
          {/* <label>Phone Number</label> */}
          <TextField
            label="Phone Number"
            variant="standard"
            type="tel"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            margin="dense"
            required
          />
        </div>
      </form>
      
      <div className='text-right'>
        <Link href='/step-1'>
          <Button className='mr-1' variant="contained" onClick={handlePrevious}>Previous</Button>
        </Link>
        <Link href='/step-3'>
          <Button variant="contained" onClick={handleNext} disabled={!isValidStep2}>
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Step2Page;
