import { useDispatch, useSelector } from 'react-redux';
import { setStep, setSubscriptionPlan } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';

const Step3Page = () => {
    const dispatch = useDispatch();
    const { subscriptionPlan } = useSelector((state) => state.form);
  
    const handleNext = () => {
      // Add form validation logic here
      if (subscriptionPlan.trim() === '') {
        return;
      }
  
      dispatch(setStep(4)); // Assuming 4 steps in total (Step 1, 2, 3, and Summary).
    };
  
    const handlePrevious = () => {
      dispatch(setStep(2));
    };

    const isValidStep3 = subscriptionPlan.trim() !== '';

  return (
    <div style={{padding:'10px 30px'}}>
      <h1>Step 3</h1>


      <form>
        <div className='form-group'>
          <label>Subscription Plan</label>
          <input
            value={subscriptionPlan}
            onChange={(e) => dispatch(setSubscriptionPlan(e.target.value))}
            required
          />
        </div>
      </form>
      
      <div>
      <Link href="/step-2">
        <button onClick={handlePrevious}>Previous</button>
      </Link>
      <Link href="/summary">
        <button onClick={handleNext} disabled={!isValidStep3}>
          Next
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Step3Page;
