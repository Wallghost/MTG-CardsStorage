import React, { useState } from 'react';

import api from '../../services/api';

import { Content, Cards } from './styles';

interface CardsProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Main: React.FC = () => {
  // const CardsArrays: CardsProps = getCardsAPI();

  async function getCardsAPI(): Promise<[CardsProps]> {
    const { data } = await api.get<CardsProps>('/cards');

    return [data];
  }

  const cardsArrays = getCardsAPI();
  console.log(cardsArrays);
  const [cardList, setCardList] = useState<CardsProps[]>(() => {

    if (cardsArrays) {
      return [];
    }

    return [];
  });

  return (
    <Content>
      {/* {
        cardList.map(card => (
          <Cards>
            <img src={card.imageUrl} />
          </Cards>
        ));
      } */}
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
      <Cards>
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="Archangel Avacyn"/>
      </Cards>
    </Content>
  );
};

export default Main;
