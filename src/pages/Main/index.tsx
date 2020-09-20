import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import CardPage from '../Card';
import { SearchForm, Content, Cards } from './styles';

import Loading from '../../components/Loading';

interface CardsProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Main: React.FC = () => {
  const [cardList, setCardList] = useState<CardsProps[]>();
  const [cardInput, setCardInput] = useState<string>('');
  const [suggest, setSuggest] = useState<string[]>();

  async function getCardsAPI(): Promise<void> {
    const { data } = await api.get<{ cards: CardsProps[] }>('/cards');

    data.cards = data.cards.filter(
      (card, index, self) =>
        index === self.findIndex((t) => t.name === card.name),
    );

    setCardList(data.cards);
  }

  async function getAutocomplete(): Promise<void> {
    if (cardInput === '') return;

    // TODO cache de termos já pesquisados

    const { data } = await api.get<{ cards: CardsProps[] }>(`/cards?name=${cardInput}&pageSize=5`);

    const result = data.cards.filter(
      (card, index, self) =>
        index === self.findIndex((t) => t.name === card.name),
    ).map(card => card.name);

    setSuggest(result);
  }

  useEffect(() => {
    getCardsAPI();
  }, []);

  useEffect(() => {
    getAutocomplete();
  }, [cardInput]);

  return (
    <>
      <SearchForm>
        <input
          type="text"
          placeholder="Type the name of the card"
          value={cardInput}
          onChange={e => setCardInput(e.target.value)}
        />
      </SearchForm>

      <Content>
        {!cardList ? (
          <Loading />
        ) : (
          cardList.map((card) => (
            <Cards key={card.id}>
              <Link to={`/detail/${card.name}`}>
                <img src={card.imageUrl} alt={card.name} />
              </Link>
            </Cards>
          ))
        )}
      </Content>
    </>
  );
};

export default Main;
