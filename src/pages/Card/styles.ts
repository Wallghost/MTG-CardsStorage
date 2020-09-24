import styled from 'styled-components';

export const Content = styled.div`
  margin: 30px auto 0 auto;
  width: 80vw;
  display: flex;
`;

export const HeadInfo = styled.section`
  display: flex;
  flex-direction: column;

  h1,
  h3,
  p {
    margin: 30px 0 0 20px;
    font-family: 'Merriweather', serif;
  }

  h1 {
    font-size: 50px;
  }

  p {
    color: '#c4c4c4';
  }
`;
