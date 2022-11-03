import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/HomePage';
import { IssuePage } from './pages/IssuePage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue" element={<IssuePage />} />
      </Route>
    </Routes>
  );
}
