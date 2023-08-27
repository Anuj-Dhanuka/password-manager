import './index.css'

const NoPasswordView = () => {
  console.log('No password container')
  return (
    <div className="no-pass-view-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-pass-image"
      />
      <p className="no-pass-text">No Passwords</p>
    </div>
  )
}

export default NoPasswordView
