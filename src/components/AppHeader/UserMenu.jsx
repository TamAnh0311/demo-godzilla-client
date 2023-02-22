import {
  Avatar, Dropdown, Space, Divider
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    )
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    )
  }, {
    key: '4',
    label: (
      <Divider style={{ margin: '0px' }} />
    )
  },
  {
    key: '5',
    label: (
      <div style={{ textAlign: 'center', color: '#ff7100' }}>Logout</div>
    )
  }

];
function UserMenu() {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{
            items
          }}
          placement="bottom"
        >
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{
              backgroundColor: '#f56a00'
            }}
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Space>
    </Space>
  )
}

export default UserMenu;
