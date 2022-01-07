import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 18px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid var(--dividerGray);
  padding: 16px 0;
  gap: 12px;

  .location-img {
    width: 125px;
    height: 168px;
    object-fit: cover;
    border-radius: 5px;
  }

  .location-info {
    display: flex;
    align-items: center;
    margin: 2px 0;

    .country-info {
      text-transform: uppercase;
      letter-spacing: 1px;

      .icon {
        margin-right: 4px;
      }
    }

    .country-link {
      margin-left: 6px;
      a {
        color: var(--darkGray);
      }
    }
  }

  .place {
    font-size: 23px;
    margin: 0;
    color: var(--black);
  }

  .date {
    margin: 8px 0 0 0;
  }
`;
