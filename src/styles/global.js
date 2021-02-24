import { css } from '@emotion/react';

export const global = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  button {
    line-height: 1.6;
    cursor: pointer;
  }
`;
