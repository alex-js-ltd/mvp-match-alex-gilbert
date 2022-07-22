import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const FlexBox = styled.div<{ flexDirection: string; marginTop: number }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  height: auto;
  margin-top: ${(props) => props.marginTop}px;
`;

export const Text = styled.div<{
  fontSize: number;
  color: string;
  lineHeight: number;
  marginTop?: number;
}>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight}px;
  margin-top: ${(props) => props.marginTop}px;
  font-weight: 700;
`;

export const Button = styled.div`
  background: #005b96;
  border-radius: 5px;
  height: 32px;
  padding: 0 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  color: white;
  margin-left: 23px;
  white-space: nowrap;
  cursor: pointer;
`;
