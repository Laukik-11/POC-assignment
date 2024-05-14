import { useNavigateBack } from '../../hooks/useNavigateBack.js';
import { backButtonRoutes } from '../../utils/navigationRoutes.js'
import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AnyARecord } from 'dns'; 
import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAccount } from '../../hooks/useAccount.js';

const Invite = () => {
  const { account } = useAccount();
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef([]);

  const handleChange = (e: any, index: any) => {
    const { value } = e.target;
    // Limit input to 1 character
    if (value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      // Move focus to next input box
      if (value !== '' && index < 4) {
        // @ts-ignore
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move focus to previous input box on backspace press in an empty box
      // @ts-ignore
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    const enteredCode = otp.join('');
    if (enteredCode.length !== 5) {
      setErrorMessage('OTP must be 5 characters long');
    }
    else if (account.address === "") {
      setErrorMessage('Wallet not connected');
    }
    else {
      console.log('OTP:', enteredCode);
      try {
        const response = await axios.post('http://localhost:3000/api/user/redeem', {
          code: enteredCode,
          userAddress: account.address
        }); 
        console.log('Response:', response);
        // const coupon = await axios.get(`http://localhost:3000/api/coupon/get/${enteredCode}`); 
        // if(coupon){
        //   const increament = await axios.post('http://localhost:3000/api/user/increment', {
        //     points: coupon.data.points,
        //     address: account.address
        //   }); 
        // }
        setErrorMessage(response.data.message || "Error")
        setOTP(['', '', '', '', ''])
      } catch (error) {
        console.error('Error:', error);
        // @ts-ignore
        setErrorMessage(error.response.data.message || "Error fetching details")
      }
    }
  };


  const { pathname } = useLocation();
  const cleanedPathname = pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
  const path = cleanedPathname.substring(cleanedPathname.lastIndexOf('/') + 1);
  const { navigateBack } = useNavigateBack();

  const HandleRedeem = () => {

  }
  return (
    <>
    <div style={{width:"90%"}}>
      {
        backButtonRoutes.includes(path) ? (
          <IconButton size="large" sx={{ textAlign: "left", width: "60px",height:"60px" }} onClick={navigateBack}>
            <ArrowBack />
          </IconButton>
        ) : null
      }
      </div>
      <div style={{ width: "80%", height: "100%", display: "flex", justifyContent: "space-around", gap: "10px", fontFamily: 'Major Mono Display, monospace',flexWrap:"wrap" }}>
        <div>
          <h1 style={{fontSize:"48px",fontWeight:"400", marginTop:"30%"}}>{">>"}joiN<br />
            {"   "} _oUR_<br />
            _oRGY_Party_</h1>
        </div>
        <div style={{marginTop:"auto",marginBottom:"auto",minWidth:"320px",textAlign:"right"}}>
          <h1 style={{ fontWeight: '400',fontSize:"28px" }}>{"\\\\"}inVite coDe{"\\\\"}</h1>
          <div>
            <form onSubmit={handleSubmit}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  // @ts-ignore
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength={1}
                  style={{ width: '3.2rem',textAlign:"center",fontSize:"16px", height: '3.2rem', marginRight: '0.5rem',border:"2px solid white" }}
                />
              ))}
            </form>
            <div style={{height:"44px",paddingTop:"8px"}}>
            {errorMessage }
            </div>
          </div>
          <div style={{textAlign:"right"}}>
          <button onClick={handleSubmit} style={{ cursor:"pointer",border: "none", textAlign: "right", background: "white", color: "black", padding: "10px 16px", fontSize: "18px", fontWeight: "400", borderRadius: "4px", fontFamily: 'Major Mono Display, monospace'}}>redeem</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invite