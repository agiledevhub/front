import { useState } from 'react';
import { SidebarButton } from './SidebarButton';

import applicationService from '../services/application.service';

export const Sidebar = () => {
  const setWorkspace = () => {
    applicationService.setTab('workspace');
    console.log('[Sidebar] setWorkspace');
  };

  const setDms = () => {
    applicationService.setTab('dms');
    console.log('[Sidebar] setDms');
  };

  return (
    <div className='w-16 h-screen bg-accent border-r border-secondary flex flex-col justify-between items-center p-4'>
      <SidebarButton
        bgImage='https://picsum.photos/200'
        onClick={setWorkspace}
      />

      <div className='space-y-3'>
        <div>
          <SidebarButton image={messageCircle} onClick={setDms} />
        </div>
        <div className='relative'>
          <SidebarButton bgImage='https://picsum.photos/40' />
          <span className='absolute rounded-full h-3 w-3 block bg-green-700 -bottom-1 -right-1 border-2 border-accent box-border'></span>
        </div>
      </div>
    </div>
  );
};

const messageCircle =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlLWljb24gbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIj48cGF0aCBkPSJNNy45IDIwQTkgOSAwIDEgMCA0IDE2LjFMMiAyMloiLz48L3N2Zz4=';
