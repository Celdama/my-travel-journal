import React from 'react';
import { Wrapper, Content } from './Journal.styles';
import Header from '../Header';
import Card from '../Card';
import data from '../../data';

const Journal = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <Wrapper>
      <Content>
        <Header />
        {cards}
      </Content>
    </Wrapper>
  );
};

export default Journal;
