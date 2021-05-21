import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  }
}

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isLogin) return <Redirect to="login" />
    return <Component {...props} />
  }

  return connect(mapStateToProps)(RedirectComponent)
}
