import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }

  activeEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  render() {
    return (
      <>
        <div>
          {this.state.editMode ? (
            <div>
              <input
                value={this.state.status}
                onBlur={this.deactivatedEditMode}
                autoFocus={true}
                onChange={this.onStatusChange}
              ></input>
            </div>
          ) : (
            <div>
              <span onDoubleClick={this.activeEditMode}>{this.props.status || '-----'}</span>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default ProfileStatus
