import React from 'react';
import './companies.css';

const companies = [
  { name: 'tcs', logo: '/images/tcs.png' },
  { name: 'phonepe', logo: '/images/phonepe.jpeg' },
  { name: 'oracle', logo: '/images/oracle.png' },
  { name: 'presidio', logo: '/images/presidio.png' },
  { name: 'appbroda', logo: '/images/myntra.png' },
  { name: 'cleartax', logo: '/images/Wipro.png' },
  { name: 'avasoft', logo: '/images/Infosys.png' },
  { name: 'ecosystem', logo: '/images/hcl.png' },
  { name: 'sap', logo: '/images/sap.png' },
  { name: 'mcafee', logo: '/images/macaffe.png' },
  { name: 'amazon', logo: '/images/amazon.png' },
  { name: 'ciena', logo: '/images/ciena.png' },
  { name: 'schneider', logo: '/images/schneider.png' },
  { name: 'datawrkz', logo: '/images/accenture.png' },
  { name: 'deloitte', logo: '/images/deloitte.png' },
  { name: 'anandrathi', logo: '/images/accenture.png' },
  { name: 'mjunction', logo: '/images/mjunction.png' },
  { name: 'cognizant', logo: '/images/Cognizant.jpg' }
];

const Companies = () => {
  return (
    <div className="companies-section">
      <h2>Companies our<br />experts work at</h2>
      <div className="company-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
