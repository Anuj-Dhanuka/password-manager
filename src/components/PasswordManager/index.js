import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import NoPasswordView from '../NoPasswordView'
import PasswordItem from '../PasswordItems'

const initialPasswordItemsList = []

class PasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    userPassword: '',
    passwordList: initialPasswordItemsList,
    showPassword: false,
    count: 0,
    searchedValue: '',
  }

  onChancingWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChancingUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChancingPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onClickingCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  deletingPassItem = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(each => each.id !== id)
    this.setState(prevState => ({
      passwordList: filteredList,
      count: prevState.count - 1,
    }))
  }

  onSearchingItem = event => {
    const searchedValue = event.target.value
    const lowerSearchedValue = searchedValue.toLowerCase()
    this.setState({searchedValue: lowerSearchedValue})
  }

  onClickingAddButton = event => {
    event.preventDefault()
    const {websiteName, userName, userPassword} = this.state
    if (websiteName.length > 0 && userName.length > 0) {
      const newObject = {
        id: uuidv4(),
        websiteName,
        userName,
        userPassword,
      }
      console.log(newObject)
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newObject],
        websiteName: '',
        userName: '',
        userPassword: '',
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {
      passwordList,
      websiteName,
      userName,
      userPassword,
      showPassword,
      count,
      searchedValue,
    } = this.state

    const searchedList = passwordList.filter(each => {
      const name = each.websiteName
      const lowerName = name.toLowerCase()
      return lowerName.includes(searchedValue)
    })
    console.log(searchedList)
    return (
      <div className="password-manager-bg-container">
        <div className="password-manager-inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-logo"
          />
          <div className="password-manager-top-container">
            <div className="add-new-password-content-container">
              <h1 className="add-new-pass-title">Add New Password</h1>
              <form onSubmit={this.onClickingAddButton}>
                <div className="input-image-content-container">
                  <div className="input-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-inside-image"
                    />
                  </div>
                  <input
                    type="text"
                    className="top-container-input-element"
                    placeholder="Enter Website"
                    onChange={this.onChancingWebsiteName}
                    value={websiteName}
                  />
                </div>

                <div className="input-image-content-container">
                  <div className="input-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input-inside-image"
                    />
                  </div>
                  <input
                    type="text"
                    className="top-container-input-element"
                    placeholder=" Enter Username"
                    onChange={this.onChancingUserName}
                    value={userName}
                  />
                </div>

                <div className="input-image-content-container">
                  <div className="input-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input-inside-image"
                    />
                  </div>
                  <input
                    type="password"
                    className="top-container-input-element"
                    placeholder="Enter Password"
                    onChange={this.onChancingPassword}
                    value={userPassword}
                  />
                </div>
                <div className="pass-manager-add-btn-container">
                  <button type="submit" className="pass-manager-add-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="add-new-pass-image"
            />
          </div>

          <div className="password-manager-bottom-container">
            <div className="your-pass-input-container">
              <div className="pass-count-container">
                <h1 className="your-pass-title">Your Passwords</h1>
                <div className="count-container">
                  <p className="count-style">{count}</p>
                </div>
              </div>

              <div className="icon-input-cont">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon-image"
                  />
                </div>
                <input
                  type="search"
                  className="input-search-element"
                  placeholder="Search"
                  onChange={this.onSearchingItem}
                />
              </div>
            </div>
            <hr className="bottom-container-hr" />
            <div className="checkbox-first-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-style"
                  onClick={this.onClickingCheckbox}
                  id="checkboxEl"
                />
                <label htmlFor="checkboxEl" className="show-pass-text">
                  Show Passwords
                </label>
              </div>
            </div>
            {searchedList <= 0 && <NoPasswordView />}
            <ul className="pass-ul-list-container">
              {searchedList.map(each => (
                <PasswordItem
                  passwordList={each}
                  key={each.id}
                  showPassword={showPassword}
                  deletingPassItem={this.deletingPassItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
