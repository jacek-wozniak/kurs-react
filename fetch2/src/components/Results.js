import React from 'react';
import ResultItem from './ResultItem'

const Results = (props) => {
  const users = props.users.map(user => (
    <ResultItem
      key={user.login.username}
      user={user}
    />
  ));
  return (
    <ul>
      {users}
    </ul>
  )
}

export default Results;