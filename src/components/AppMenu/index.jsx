import { Menu } from 'antd';
import {
  CalendarOutlined,
  TableOutlined,
  ScheduleOutlined,
  CustomerServiceOutlined,
  ProfileOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AppLogo from '../AppLogo';

const navigation = [
  {
    key: '1',
    icon: <CalendarOutlined />,
    label: 'Dashboard',
    link: '/'
  },
  {
    key: '2',
    icon: <ScheduleOutlined />,
    label: 'Staff Schedule',
    link: '/staff-schedule'
  },
  {
    key: '3',
    icon: <TableOutlined />,
    label: 'Work Manage',
    link: '/work-manage'
  },
  {
    key: '4',
    icon: <CustomerServiceOutlined />,
    label: 'Customer Service',
    link: '/customer-service'
  },
  {
    key: '5',
    icon: <ProfileOutlined />,
    label: 'Report',
    link: '/report'
  },
  {
    key: '6',
    icon: <QuestionCircleOutlined />,
    label: 'Help',
    link: '/help'
  }
]

function AppMenu(props) {
  const { collapsed, mode } = props
  const desktopMode = mode !== 'drawer'

  return (
    <>
      {
        desktopMode
          ? <AppLogo collapsed={collapsed} /> : null
      }
      <Menu
        theme={desktopMode ? 'dark' : ''}
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        {navigation.map((item) => (

          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  )
}

export default AppMenu
