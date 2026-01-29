import React from 'react';
import PageLayout from '../layout/PageLayout';
import YoshonList from './YoshonList';
import SimpleHeader from '../layout/SimpleHeader';

const YoshonListPage = () => {
  return (
    <PageLayout>
      <SimpleHeader />
      <div className="pt-20">
        <YoshonList />
      </div>
    </PageLayout>
  );
};

export default YoshonListPage;