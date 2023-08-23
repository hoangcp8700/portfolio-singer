import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => (
  <main>
    <Outlet />
  </main>
);

export default LayoutDefault;
