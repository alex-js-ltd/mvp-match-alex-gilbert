import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 5px;
  height: auto;
  width: calc(100% - 46px);
`;

export const Header = styled.div`
  cursor: pointer;
  margin-left: 19px;
  margin-bottom: 14px;
  background: #ffffff;
  border-radius: 10px;
  height: 71px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div<{ marginLeft?: number; paddingRight?: number }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 164.4%;
  color: #011f4b;
  margin-left: ${(props) => props.marginLeft}px;
  padding-right: ${(props) => props.paddingRight}px;
`;
