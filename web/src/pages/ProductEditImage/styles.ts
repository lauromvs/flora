import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 10px;
  width: 1280px;
  margin: 0 auto;
  margin-top: -140px;
`;

export const Form = styled.form`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  .flexContainer {
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    img {
      height: 300px;
      width: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin: 40px 0;
    }

    .uploadDiv {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: left;
      margin: 0;
      padding: 0;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        max-width: calc(100% - 260px);

        color: #2c2c2c;
        font-size: 16px;
        margin-left: 10px;
      }

      label {
        flex-wrap: nowrap;
        display: flex;
        align-items: center;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        width: 300px;
        font-size: 16px;

        color: #fff;
        background: #305b28;
        border: 1px solid #f0f0f5;
        border-radius: 8px;
        padding: 10px 20px;
        transition: 0.2s;

        svg {
          margin-right: 20px;
        }
        &:hover {
          background: ${shade(0.2, '#305b28')};
        }
      }
    }
  }

  input {
    flex: 1;
    font-size: 16px;
    color: #2c2c2c;
    background: #fff;
    border: 1px solid #f0f0f5;
    border-radius: 8px;
    padding: 10px 20px;

    &::placeholder {
      color: #b7b7cc;
    }

    &:hover,
    &:focus {
      border: 1px solid #305b28;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 25px;
    color: #305b28;
  }

  h3 {
    color: #2c2c2c;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 25px;
  }
`;

export const SaveContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #db772b;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #e9863b;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }

    &:first-child {
      background: none;
      color: #2c2c2c;
      margin-right: 20px;
    }
  }
`;
