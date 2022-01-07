import React from 'react';
import { Wrapper, Content } from './Card.styles';
import LocationIcon from './icon.svg';

const Card = ({ item }) => {
  console.log(item);
  const {
    title,
    location,
    googleMaps,
    startDate,
    endDate,
    description,
    imageUrl,
  } = item;
  return (
    <Wrapper>
      <Content>
        <img className='location-img' src={imageUrl} alt='location-img' />
        <div>
          <div className='main-info'>
            <p className='location-info'>
              <span className='country-info'>
                <img className='icon' src={LocationIcon} alt='location-icon' />
                {location}{' '}
              </span>
              <span className='country-link'>
                <a href={googleMaps} target='_blank' rel='noreferrer'>
                  View on Google Maps
                </a>
              </span>
            </p>
            <p className='place bold'>{title}</p>
          </div>
          <div className='detail-info'>
            <p className='date bold'>
              {startDate} - {endDate}
            </p>
            <p className='description'>{description}</p>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Card;
