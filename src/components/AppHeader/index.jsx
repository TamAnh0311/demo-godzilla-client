import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Mobile, TabletAndMore } from '../../utils/responsive'
import UserMenu from './UserMenu';
import AppLogo from '../AppLogo';

const { Header } = Layout;

const styles = {
  header: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
  }
}

function AppHeader(props) {
  const { collapsed, toggleCollapsed } = props

  const headerContent = () => (
    <>
      <AppLogo />
      <div className="mr-3">
        <UserMenu />
      </div>
    </>
  )

  return (
    <Header
      style={styles.header}
    >
      <TabletAndMore>
        <div className="d-flex justify-space-between align-center w-75">
          {headerContent()}
        </div>
      </TabletAndMore>
      <Mobile>
        <div className="d-flex justify-space-between align-center w-100">
          {headerContent()}
        </div>
      </Mobile>
    </Header>
  )
}

export default AppHeader;
