import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f1fafe;
  border-radius: 10px;
  height: 53px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Square = styled.div<{ background?: string; marginLeft?: number }>`
  border-radius: 5px;
  width: 15px;
  height: 15px;
  background: ${(props) => props.background || 'grey'};
  margin-left: ${(props) => props.marginLeft}px;

  &:not(:first-of-type) {
    margin-left: 44px;
  }

  &:first-of-type {
    margin-left: 23px;
  }
`;

export const Text = styled.div`
  margin-left: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #011f4b;
`;
