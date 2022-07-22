import styled from 'styled-components';

export const Container = styled.div<{
  marginTop?: number;
  marginLeft?: number;
  width?: string;
}>`
  height: 53px;
  border-radius: 10px;
  background: #f1fafe;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  width: ${(props) => props.width || 'calc(100% - 200px)'};
`;

export const Text = styled.div`
  padding-left: 19px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #011f4b;
`;
