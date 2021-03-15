import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledFloatContactUs = styled.div`
  position: fixed;
  left: 0px;
  top: auto;
  bottom: 24px;
  width: 20em;
  background: ${theme.FLOAT_CONTACTUS_BACKGROUND_COLOR};
  box-shadow: 0 0 3px 1px ${theme.FLOAT_CONTACTUS_BOXSHADOW_COLOR};
  padding: 0.5em;
  color: ${theme.FLOAT_CONTACTUS_TEXT_COLOR};
  margin: 0;
  border-radius: 0 8px 8px 0;
  z-index: 1;
  cursor: pointer;

  .removeIcon {
    position: absolute;
    font-size: 1.5em;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  font-size: 1.2em;

  .imgFloat {
    display: inline-block;
    background-size: contain;
    height: 100px;
    width: 100px;
  }

  .discriptionFloat {
    margin-right: 0.5em;
  }
`;
