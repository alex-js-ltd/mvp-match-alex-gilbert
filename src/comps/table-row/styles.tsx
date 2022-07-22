import styled from 'styled-components';

export const FlexRow = styled.div`
  margin-left: 19px;
  background: white;
  display: flex;
  justify-content: space-between;
  height: 35px;

  &:nth-child(odd) {
    background: #f1fafe;
  }
`;

export const FlexItem = styled.div<{
  textAlign: string;
  marginLeft?: number;
  paddingRight?: number;
}>`
  width: 25%;
  height: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 164.4%;
  color: #011f4b;
  margin: auto 0;
  text-align: ${(props) => props.textAlign};
  margin-left: ${(props) => props.marginLeft}px;
  padding-right: ${(props) => props.paddingRight}px;
`;
