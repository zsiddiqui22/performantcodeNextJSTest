import { useDispatch, useSelector } from 'react-redux';
import { setStep, setSubscriptionPlan } from '../redux/formSlice';
import Link from 'next/link';
import validator from 'validator';
import Button from '@mui/material/Button';

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    const isValidStep3 = subscriptionPlan !== ''; //?.trim()

  return (
    <div style={{padding:'10px 30px'}}>
      <h1>Step 3</h1>


      <form>
        <div className='form-group'>
          {/* <label>Subscription Plan</label>
          <input
            value={subscriptionPlan}
            onChange={(e) => dispatch(setSubscriptionPlan(e.target.value))}
            required
          /> */}
          <Box sx={{ maxWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Subscription Plan</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subscriptionPlan}
                label="Subscription Plan"
                onChange={(e) => dispatch(setSubscriptionPlan(e.target.value))}
                >
                <MenuItem value={'Silver'}>Silver</MenuItem>
                <MenuItem value={'Gold'}>Gold</MenuItem>
                <MenuItem value={'Platinum'}>Platinum</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </div>
      </form>
      
      <div className='text-right'>
      <Link href="/step-2">
        <Button className='mr-1' variant="contained" onClick={handlePrevious}  margin="dense">Previous</Button>
      </Link>
      <Link href="/summary">
        <Button variant="contained" onClick={handleNext} disabled={!isValidStep3}  margin="dense">
          Next
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default Step3Page;
