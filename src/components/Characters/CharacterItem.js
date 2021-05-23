import React from 'react';

const CharacterItem = props => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={props.item.imageUrl} alt='' />
          </div>
          <div className='card-back'>
            <h1>{props.item.fullName}</h1>
            <ul>
              <li>
                <strong>Title:</strong> {props.item.title}
              </li>
              <li>
                <strong>Family:</strong> {props.item.family}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem;