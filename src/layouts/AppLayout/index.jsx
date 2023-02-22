import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import { Mobile, TabletAndMore } from 'utils/responsive'
import AppHeader from 'components/AppHeader';

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="site-layout h-screen">
      <AppHeader
        collapsed={collapsed}
        toggleCollapsed={() => setCollapsed(!collapsed)}
      />
      <div className="d-flex justify-center align-center w-100" style={{ minHeight: '93vh' }}>
        <TabletAndMore>
          <div
            className="w-75"
          >
            <Outlet />
          </div>
        </TabletAndMore>
        <Mobile>
          <div
            className="w-95"
          >
            <Outlet />
          </div>
        </Mobile>
      </div>
    </Layout>
  );
}
export default Index;
