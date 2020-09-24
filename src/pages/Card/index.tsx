import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Loading from '../../components/Loading';
import { Content, HeadInfo } from './styles';

interface CreaturePropsArray {
  name: string;
}

interface ColorPropsArray {
  name: string;
}

interface CardProps {
  multiverseid: number;
  name: string;
  imageUrl: string;
  manaCost: string;
  types: CreaturePropsArray[];
  colors: ColorPropsArray[];
  text: string;
}

interface CardAttributes {
  card: CardProps;
}

const CardDetails: React.FC = () => {
  const { params } = useRouteMatch();
  const [cardInfo, setCardInfo] = useState<CardAttributes>();

  async function getCardInfo(): Promise<void> {
    const { data } = await api.get<CardAttributes>(`/cards/${params.card_id}`);
    setCardInfo(data);
  }

  useEffect(() => {
    getCardInfo();
  }, []);

  console.log(cardInfo);

  return (
    <Content>
      {!cardInfo ? (
        <Loading />
      ) : (
        <>
          <img src={cardInfo.card.imageUrl} alt={cardInfo.card.name}/>
          <HeadInfo>
            <h1>{cardInfo.card.name}</h1>
            <h3>{cardInfo.card.types.map((type) => (type))}</h3>
            <h3>Mana Cost: {cardInfo.card.manaCost}</h3>
            <h3>Colors: {cardInfo.card.colors.map((color) => (color))}</h3>
            <p>{cardInfo.card.text}</p>
          </HeadInfo>
        </>
      )}
    </Content>
  );
};

export default CardDetails;
