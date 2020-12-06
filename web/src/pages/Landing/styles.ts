import styled from 'styled-components';
import { shade } from 'polished';

import ImgBackground from '../../assets/background-landing.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 410px;
  display: flex;
  flex-direction: column-reverse;

  padding-top: 80px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;

  img {
    width: 503px;
    margin-left: 65px;
  }

  h1 {
    font-size: 30px;
    color: #305b28;
    font-weight: 400;
    max-width: 255px;
    margin-top: 30px;
    margin-left: 65px;
  }
`;

export const ButtonContainer = styled.div`
  background-color: #305b28;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 30px;
    text-decoration: none;
    color: white;
    font-weight: 400;
    font-size: 16px;
    height: 100%;
    width: 50%;
    transition: background-color 0.2s;

    svg {
      margin-bottom: 10px;
    }

    & + a {
      background-color: #4e7248;
    }

    &:hover {
      background-color: ${shade(0.2, '#305b28')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${ImgBackground}) no-repeat;
  background-size: cover;
`;
