// ./pages/step-1.js
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setName, setEmail } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';

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
            <label>Name</label>
            <input value={name} onChange={handleNameChange} required />
        </div>
        <div className='form-group'>
            <label>Email</label>
            <input value={email} onChange={handleEmailChange} required />
        </div>
      </form>
      
      <div>
        <Link href="/step-2">
            <button onClick={handleNext} disabled={!isValidStep1}>
            Next
            </button>
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
