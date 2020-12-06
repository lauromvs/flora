import styled, { css } from 'styled-components';

interface IProductProps {
  available: boolean;
}

export const Container = styled.div<IProductProps>`
  background: #f0f0f5;
  border-radius: 8px;
  width: 400px;

  header {
    border-radius: 8px 8px 0px 0px;
    height: 350px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};
  }

  section.body {
    padding: 30px;

    h2 {
      color: #305b28;
      font-weight: 600;
      font-size: 28px;
    }

    p {
      color: #2c2c2c;
      font-size: 14px;

      margin-top: 16px;
    }

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #db772b;
    border-radius: 0px 0px 8px 8px;
    height: 80px;
    border: 0;

    .price {
      padding: 20px 0px 0px 30px;
      font-style: normal;
      font-size: 24px;
      margin-bottom: 15px;
      color: #fff;

      b {
        font-weight: 600;
      }
    }

    button {
      font-weight: 600;
      border-radius: 8px;
      background: #e9863b;
      color: #fff;
      border: 0;
      border-radius: 0 0px 8px 0;

      height: 80px;
      width: 80px;

      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        margin-top: 10px;
      }
    }

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};
  }
`;
