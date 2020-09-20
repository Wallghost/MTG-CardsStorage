import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 30px;

  input {
    border: 0;
    border-bottom: 1px solid #000;
    background: transparent;
    width: 500px;
    text-align: center;
    font-size: 15px;
    font-family: 'Merriweather', serif;
  }
`;

export const Content = styled.div`
  margin: 30px auto 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 50px;
`;

export const Cards = styled.div`
  cursor: pointer;
  width: 50px;
  height: 100px;
  margin-top: 20px;
  margin: 10px;
  width: auto;
  height: auto;
`;
