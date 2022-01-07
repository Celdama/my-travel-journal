import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: var(--mainRed);
  border-radius: 12px 12px 0 0;
  height: 55px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: var(--white);
    font-weight: 500;
    font-size: 14px;
    margin-left: 6px;
  }
`;
