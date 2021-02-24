import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Title = styled.h1`
  ${({ theme }) =>
    css`
      color: ${theme.colors.yellow};
      text-align: center;
      margin-bottom: ${theme.spacing.xl};
    `};
`;
