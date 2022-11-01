import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { LayoutContainer, PageHeader, PageMain } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <PageHeader>
        <img src={logo} alt="" />
        <span>GitHub Blog</span>
      </PageHeader>

      <PageMain>
        <Outlet />
      </PageMain>
    </LayoutContainer>
  );
}
