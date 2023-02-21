import './Header.scss';
import UserMenu from './user-menu/UserMenu';

const lstContent = [
  { icon: '1', content: 'content 1' },
  { icon: '2', content: 'content 2' }
]

function Header() {
  return (
    <div className="header">
      <div className="menu-section">a</div>
      <div className="icon-section">b</div>
      <div className="account-section">
        <UserMenu lstContent={lstContent} />
      </div>
    </div>
  )
}

export default Header;
