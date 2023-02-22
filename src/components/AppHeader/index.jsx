import { Layout } from 'antd';
import { Mobile, TabletAndMore } from 'utils/responsive'
import AppLogo from 'components/AppLogo';
import UserMenu from 'components/AppHeader/UserMenu';

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
