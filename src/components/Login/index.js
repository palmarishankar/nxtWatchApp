import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  NxtWatchAppContainer,
  FormContainer,
  WebSiteLogo,
  UserNameLabel,
  UserNameInput,
  PasswordInput,
  PasswordLabel,
  FormButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    userInput: '',
    userPassword: '',
    showSubmitError: false,
    errorMsg: ',',
  }

  onChangeUserName = event => {
    this.setState({userInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userInput, userPassword} = this.state

    const userDetails = {
      username: userInput,
      password: userPassword,
    }
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <NxtWatchAppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <WebSiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website-logo"
          />
          <UserNameLabel htmlFor="nameInput">USER NAME</UserNameLabel>
          <UserNameInput
            type="text"
            id="nameInput"
            placeholder="User name"
            onChange={this.onChangeUserName}
          />
          <PasswordLabel htmlFor="nameInput">PASSWORD</PasswordLabel>
          <PasswordInput
            type="password"
            id="nameInput"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <FormButton type="submit">Login</FormButton>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormContainer>
      </NxtWatchAppContainer>
    )
  }
}
export default Login
