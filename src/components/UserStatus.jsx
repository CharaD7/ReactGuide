const UserStatus = ({ loggedIn, isAdmin}) => {
  return loggedIn && isAdmin ? <div>Welcome, <strong>Admin</strong></div> : <div>Welcome, <strong>User</strong></div>;
}

export default UserStatus;
