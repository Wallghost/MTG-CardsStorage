import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Content, Cards } from './styles';

import Loading from '../../components/Loading';

interface CardsProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Main: React.FC = () => {
  const [cardList, setCardList] = useState<CardsProps[]>();

  async function getCardsAPI(): Promise<void> {
    const { data } = await api.get<{ cards: CardsProps[] }>('/cards');

    data.cards = data.cards.filter(
      (card, index, self) =>
        index === self.findIndex((t) => t.name === card.name),
    );

    setCardList(data.cards);
  }

  useEffect(() => {
    getCardsAPI();
  }, []);

  return (
    <Content>
      {!cardList ? (
        <Loading />
      ) : (
        cardList.map((card) => (
          <Cards key={card.id}>
            <img src={card.imageUrl} alt={card.name} />
          </Cards>
        ))
      )}
    </Content>
  );
};

export default Main;
