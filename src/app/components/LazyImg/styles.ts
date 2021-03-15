import styled from 'styled-components/macro';
import placeholderImg from './assets/placeholder.svg';

export const StyledLazyImg = styled.section`
  min-height: 7em;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &.loading {
    background-image: url(${placeholderImg});
  }

  img {
    width: 100%;
  }
`;
