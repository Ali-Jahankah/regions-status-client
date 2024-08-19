import './CustomError.css';

import { ComponentDataProps, CustomErrorTypes } from '../../../config/types';
import React, { useEffect } from 'react';

import { errorState } from '../../../RecoilStateManagement/states';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// Custom Error component to show the error messages and error codes
const CustomError: React.FC<ComponentDataProps> = ({
  allData
}): React.ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if data exists, navigate user to HomePage, after refreshing webpage
    if (allData) {
      navigate('/');
    }
  }, [allData]);
  const errorObject = useRecoilValue<CustomErrorTypes>(errorState);
  return (
    <div className="error-container">
      <h1 className="error-h1">! {errorObject.errorCode} !</h1>
      <p className="error-text">{errorObject.errorMessage}</p>
    </div>
  );
};

export default CustomError;
