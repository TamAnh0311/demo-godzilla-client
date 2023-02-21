import './AppLogo.css'
import { Button } from 'antd';
import { Mobile, TabletAndMore } from '../../utils/responsive'

function AppLogo({ collapsed, toggleCollapsed }) {
  const appTitle = collapsed ? 'mS' : 'myShop'

  return (
    <>
      <TabletAndMore>
        <div className="logo" style={{ fontSize: collapsed ? '36px' : '20px' }}><h1 style={{ whiteSpace: 'nowrap' }}><i>{appTitle}</i></h1></div>
      </TabletAndMore>
      <Mobile>
        <div className="logo__mobile logo" style={{ fontSize: '1.5rem' }}>
          <Button className="logo__text" type="text" onClick={() => toggleCollapsed()}>
            <i>mS</i>
          </Button>
        </div>
      </Mobile>
    </>
  )
}
export default AppLogo;
