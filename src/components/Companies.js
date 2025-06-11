import React from 'react';
import './companies.css';

const companies = [
  { name: 'tcs', logo: '/images/tcs.png' },
  { name: 'phonepe', logo: '/logos/phonepe.png' },
  { name: 'oracle', logo: '/logos/oracle.png' },
  { name: 'presidio', logo: '/logos/presidio.png' },
  { name: 'appbroda', logo: '/logos/appbroda.png' },
  { name: 'cleartax', logo: '/logos/cleartax.png' },
  { name: 'avasoft', logo: '/logos/avasoft.png' },
  { name: 'ecosystem', logo: '/logos/ecosystem.png' },
  { name: 'sap', logo: '/logos/sap.png' },
  { name: 'mcafee', logo: '/logos/mcafee.png' },
  { name: 'amazon', logo: '/logos/amazon.png' },
  { name: 'ciena', logo: '/logos/ciena.png' },
  { name: 'schneider', logo: '/logos/schneider.png' },
  { name: 'datawrkz', logo: '/logos/datawrkz.png' },
  { name: 'deloitte', logo: '/logos/deloitte.png' },
  { name: 'anandrathi', logo: '/logos/anandrathi.png' },
  { name: 'mjunction', logo: '/logos/mjunction.png' },
  { name: 'cognizant', logo: '/logos/cognizant.png' }
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
