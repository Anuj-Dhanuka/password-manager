import './index.css'

const PasswordItem = props => {
  const {passwordList, showPassword, deletingPassItem} = props
  const {websiteName, userName, userPassword, id} = passwordList
  const firstLetter = websiteName.slice(0, 1)

  const clickingDeleteButton = () => {
    deletingPassItem(id)
  }

  return (
    <li className="pass-li-container">
      <div className="first-letter-container">
        <h1 className="first-letter">{firstLetter}</h1>
      </div>
      <div>
        <p className="your-pass-website-name">{websiteName}</p>
        <p className="your-pass-website-name">{userName}</p>
        {showPassword ? (
          <p className="your-pass-website-name">{userPassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={clickingDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon-style"
        />
      </button>
    </li>
  )
}

export default PasswordItem
