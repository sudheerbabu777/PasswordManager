import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const backgroundColor = [
  'red',
  'green',
  'yellow',
  'blue',
  'black',
  'violet',
  'orange',
]

class PasswordManager extends Component {
  state = {
    passwordList: [],
    searchInput: '',
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isPassword: false,
  }

  addNewPasswordList = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const initialContainer =
      backgroundColor[Math.ceil(Math.random() * backgroundColor.length - 1)]

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      background: initialContainer,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDelete = id => {
    const {passwordList} = this.state
    const deleteItem = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: deleteItem,
    })
  }

  onToggleButton = () => {
    this.setState(prevState => ({
      isPassword: !prevState.isPassword,
    }))
  }

  render() {
    const {
      passwordList,
      searchInput,
      websiteInput,
      usernameInput,
      passwordInput,
      isPassword,
    } = this.state

    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const noPassword = searchResults.length > 0

    const result = searchResults.length === 0

    console.log(result)

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="top-container">
          <form className="form" onSubmit={this.addNewPasswordList}>
            <h1 className="add-heading">Add New Password</h1>
            <div className="text-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt=" website"
                className="website-image"
              />
              <input
                type="text"
                className="input-bar"
                placeholder="Enter website"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="text-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-image"
              />
              <input
                type="text"
                className="input-bar"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={usernameInput}
              />
            </div>
            <div className="text-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt=" password"
                className="website-image"
              />
              <input
                type="password"
                className="input-bar"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={passwordInput}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="profile"
          />
        </div>
        <div className="bottom-container">
          <div className="bottom-top-container">
            <div className="password-container">
              <h1 className="your-password">Your Passwords</h1>
              <p className="count">{searchResults.length}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt=" search"
                className="search-image"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-bar"
                onChange={this.onChangeSearch}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="check-box"
              onChange={this.onToggleButton}
              id="label"
            />
            <label className="show-password" htmlFor="label">
              Show passwords
            </label>
          </div>
          {noPassword && (
            <ul className="password-list">
              {searchResults.map(each => (
                <PasswordItem
                  passwordDetails={each}
                  key={each.id}
                  onClickDelete={this.onClickDelete}
                  disable={isPassword}
                />
              ))}
            </ul>
          )}

          {!noPassword && (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="on-password"
              />
              <p className="title">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
