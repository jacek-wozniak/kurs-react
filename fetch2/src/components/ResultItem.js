import React from 'react';

const ResultItem = (props) => {
  const {name, location, login, picture} = props.user;
  return (
    <li
      key={login.username}
    >
      <img src={picture.thumbnail} alt={`${name.first} ${name.last} - thumbnail`}/>
      <div>
        <strong>
          {name.title} {name.first} {name.last}
        </strong> <br/>
        <span>
        {location.city}, {location.country}
      </span>
      </div>
    </li>
  )
};

export default ResultItem;