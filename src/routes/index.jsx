import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';
import Dashboard from 'pages/Dashboard';
import PageNotFound from 'pages/404';
import Category from 'pages/Category';

function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="Category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteList;
