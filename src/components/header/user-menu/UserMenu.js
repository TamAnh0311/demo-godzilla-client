import './UserMenu.scss';
import { UserOutlined } from '@ant-design/icons';
import {
  Avatar, Badge, Space, Popover
} from 'antd';

function UserMenu(props) {
  const data = props;

  const genContentLst = () => {
    const rows = [];
    data.lstContent.forEach((element) => {
      rows.push(
        <div className="content-section">
          {element.icon}
          <div>{element.content}</div>
        </div>
      );
    });
    return rows;
  }

  return (
    <div>
      <Popover content={genContentLst} className="vertical-center" placement="bottom" trigger="click" arrow={false}>
        <Space style={{ cursor: 'pointer' }}>
          <Badge count={0}>
            <Avatar size={45} icon={<UserOutlined />} />
          </Badge>
        </Space>
      </Popover>
    </div>
  )
}

export default UserMenu;
