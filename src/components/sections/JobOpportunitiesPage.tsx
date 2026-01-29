// pages/JobOpportunitiesPage.tsx
import React from 'react';
import PageLayout from '../layout/PageLayout'
import JobOpportunities from './JobOpportunities'
import SimpleHeader from '../layout/SimpleHeader';

const JobOpportunitiesPage: React.FC = () => {
    return (
      <PageLayout>
        <SimpleHeader />
        <div className="pt-20"> {/* Add padding to account for fixed header */}
          <JobOpportunities />
        </div>
      </PageLayout>
    );
  };

export default JobOpportunitiesPage;