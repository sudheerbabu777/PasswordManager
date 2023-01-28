import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onClickDelete, disable} = props
  const {id, website, username, password, background} = passwordDetails

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="password-item">
      <div className="container">
        <div className={`letter-container ${background}`}>
          <p className="first-letter">{website[0]}</p>
        </div>
        <div className="details-container">
          <p className="user">{website}</p>
          <p className="user">{username}</p>

          {disable ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt=" stars"
              className="star"
            />
          )}
        </div>
      </div>
      <div>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
