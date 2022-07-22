import styled from 'styled-components';

export const imgUri =
  'data:image/png;base64,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';

export const Wrapper = styled.div`
  flex: 1;
  border: 1px solid blue;

  margin-left: 100px;
  width: calc(100% - 200px);
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
