import {Link} from 'react-router-dom'
import {UnOrderListContainer, Banner, SearchInput} from './StyledComponent'

const Header = () => (
  <div>
    <Banner>
      <UnOrderListContainer>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/tredending">
          <li>Tredending</li>
        </Link>
        <Link to="/gaming">
          <li>gaming</li>
        </Link>

        <Link to="/saved-videos">
          <li>saved-videos</li>
        </Link>
      </UnOrderListContainer>
      <SearchInput type="text" />
    </Banner>
  </div>
)

export default Header
