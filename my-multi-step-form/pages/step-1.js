// ./pages/step-1.js
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setName, setEmail } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Step1 = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.form);

  const handleNext = () => {
    // Add form validation logic here
    if (name.trim() === '' || !isValidEmail(email)) {
      return;
    }

    dispatch(setStep(2));
  };

  const isValidEmail = (email) => {
    return validator.isEmail(email);
  };

  const isValidStep1 = name.trim() !== '' && isValidEmail(email);

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    // Step 1 form and navigation buttons
    <div style={{padding:'10px 30px'}}>
      <h1>Step 1</h1>

      <form>
        <div className='form-group'>
            {/* <label>Name</label> */}
            {/* <input className='px-4 py-3 rounded-full' value={name} onChange={handleNameChange} required /> */}
            <TextField id="name" label="Name" variant="standard" value={name} onChange={handleNameChange}  margin="dense"/>
        </div>
        <div className='form-group'>
            {/* <label>Email</label> */}
            <TextField id="email" label="Email" variant="standard" value={email} onChange={handleEmailChange} required  margin="dense"/>
        </div>
      </form>
      
      <div className='text-right'>
        <Link href="/step-2">
            <Button variant="contained" onClick={handleNext} disabled={!isValidStep1} margin="normal">
            Next
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;

// import { useRouter } from 'next/router';
// import MultiStepForm from '../components/MultiStepForm';

// const Step1Page = () => {
//   const router = useRouter();
//   const nextPage = ()=> {
//     router.push(`/step-${2}`);
//   }

//   return (
//     <div style={{padding:'10px 30px'}}>
//       <h1>Step 1</h1>

//       <form>
//         <div className='form-group'>
//             <label>Name</label>
//             <input value={} required />
//         </div>
//       </form>
      
//       <div>
//         <button onClick={nextPage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Step1Page;
