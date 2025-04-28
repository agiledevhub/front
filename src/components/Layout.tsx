import { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import applicationService from '../services/application.service';
import { Workspace } from '../views/Workspace';
import { Dms } from '../views/Dms';

export const Layout = () => {
  const [selectedTab, setSelectedTab] = useState(
    applicationService.selectedTab
  );

  useEffect(() => {
    const unsubscribe = applicationService.subscribe(() => {
      setSelectedTab(applicationService.selectedTab);
    });

    return unsubscribe;
  }, []);

  return (
    <div className='w-screen min-h-screen bg-primary relative flex justify-start items-start'>
      <Sidebar />
      {selectedTab === 'workspace' && <Workspace />}
      {selectedTab === 'dms' && <Dms />}
    </div>
  );
};
