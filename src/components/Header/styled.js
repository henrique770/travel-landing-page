import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 45px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breaks.large}) {
    padding: 2.4rem 1.5rem 4rem 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 40px;
`;

export const ListWrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.darkblue : theme.colors.gray};
    list-style: none;
    margin-right: ${theme.spacing.xl};
    font-size: ${theme.typography.sm};
    cursor: pointer;
  `}
`;
