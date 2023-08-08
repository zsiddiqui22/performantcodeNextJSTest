import { useSelector, useDispatch } from 'react-redux';
import { fetchFormData } from '../redux/formSlice';
import { useEffect } from 'react';

const SummaryPage = () => {
  const dispatch = useDispatch();

  // Dispatch the fetchFormData action to get the form data from Redux store
  useEffect(()=>{
    dispatch(fetchFormData());
  },[]);

  const formData = useSelector((state) => state.form);

  return (
    <div style={{ padding: '10px 30px' }}>
      <h1>Summary</h1>
      {/* Display the collected user information */}
      <p>
        <b>Name:</b> {formData.name}
      </p>
      <p>
        <b>Email:</b> {formData.email}
      </p>
      <p>
        <b>Date of Birth:</b> {formData.dob}
      </p>
      <p>
        <b>Phone Number:</b> {formData.phoneNumber}
      </p>
      <p>
        <b>Subscription Plan:</b> {formData.subscriptionPlan}
      </p>
    </div>
  );
};

// export async function getServerSideProps() {
//   // const dispatch = useDispatch();

//   // Dispatch the fetchFormData action to get the form data from Redux store
//   // await dispatch(fetchFormData());

//   // Get the form data from the Redux store state
//   // const formData = useSelector((state) => state.form);

//   return {
//     props: {
//       formData,
//     },
//   };
// }

// export async function getServerSideProps() {
//   // Import yourReduxStore and yourSelectorFunction using require
//   const { yourReduxStore } = require('../redux/store'); // Replace with the actual path
//   const { yourSelectorFunction } = require('../redux/formSlice'); // Replace with the actual path

//   // Get the current Redux store state
//   const reduxState = yourReduxStore.getState();

//   // Extract the form data from the Redux state using your selector function
//   const formData = yourSelectorFunction(reduxState);

//   return {
//     props: {
//       formData,
//     },
//   };
// }

export default SummaryPage;
