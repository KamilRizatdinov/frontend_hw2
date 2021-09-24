import {
  FunctionComponent
} from 'react';

import './index.css';

interface OwnProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
  address: string;
}

const Card: FunctionComponent<OwnProps> = ({id, name, email, avatar, address}: OwnProps) => {
  return (
    <div className="card">
      <img className="card__image" src={avatar} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{address}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Card;