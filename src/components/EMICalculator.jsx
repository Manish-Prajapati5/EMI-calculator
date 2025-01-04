import React, { useState } from 'react';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Function to calculate EMI

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseInt(tenure);

    if (P && R && N) {
      const emiAmount = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)


      const totalPaid = emiAmount * N;
      const interestPaid = totalPaid - P;

      setEmi(emiAmount.toFixed(0));
      setTotalAmount(totalPaid.toFixed(2));
      setTotalInterest(interestPaid.toFixed(2));
    } else {
      alert('Please enter valid values');
    }
  };

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className='circle'>
        <div className="circle-child">
          <p>Total EMI</p>
          <p>
            <strong>&#8377; {emi}/ </strong>
            month
          </p>
        </div>
      </div>
      <div className='calci'>
        <label>Loan Amount (Principal): </label>
        <div className='loan-principal'>
          <input className='range-input' type="range" value={principal} min="1" max="500000" onChange={(e) => setPrincipal(e.target.value)} />
          &#8377; <input
            className='num-range'
            type="number"
            min='1'
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className='range-type-1'>
          <span>1L</span>
          <span>5L</span>
          <span>10L</span>
          <span>15L</span>
          <span>20L</span>
          <span>25L</span>
          <span>30L</span>
          <span>35L</span>
          <span>40L</span>
          <span>45L</span>
          <span>50L</span>
        </div>
      </div>
      <div className='calci'>
        <label>Interest Rate (Annual %): </label>
        <div className='loan-principal'>
          <input type="range" value={rate} min="1" max="30" onChange={(e) => setRate(e.target.value)} />
          <input
            className='num-range'
            type="number"
            min='1'
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className='range-type-2'>
          <span>1</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>

      </div>

      <div className='calci'>
        <label>Tenure (in months): </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>

      <button onClick={calculateEMI}>Calculate EMI</button>


      <div className="result">
        <h3>EMI Per/Month Details</h3>
        <p><strong>EMI: </strong>{emi}</p>
        <p><strong>Total Payable Amount: </strong>{totalAmount}</p>
        <p><strong>Total Interest Payable: </strong>{totalInterest}</p>
      </div>

    </div>
  );
};

export default EMICalculator;
