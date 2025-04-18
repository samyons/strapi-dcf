import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage';
import { SideNav } from '../components/SideNav';
import { Layouts } from '@strapi/strapi/admin';
import { CausesPage } from './CausesPage/CausesPage';
import { CommonProviders } from '../components/CommonProviders';
import { DonationsPage } from './DonationsPage';
const InnerApp = () => {
  return (
  
    <Layouts.Root sideNav={<SideNav />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/causes' element={<CausesPage />} />
        <Route path='/donations' element={<DonationsPage />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
    </Layouts.Root>
  );
};

const App = () => {
  return (
    <CommonProviders>
      <InnerApp />
    </CommonProviders>
  );
};

export { App };
