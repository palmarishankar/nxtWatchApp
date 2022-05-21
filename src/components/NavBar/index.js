import {WebSiteLogo, Profile, NavBarContainer} from './StyledComponent'

const NavBar = () => (
  <NavBarContainer>
    <WebSiteLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website-logo"
    />
    <div>
      <Profile
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <button type="button">Logout</button>
    </div>
  </NavBarContainer>
)

export default NavBar
