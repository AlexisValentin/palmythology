import styled from "styled-components";

export const PageHeaderContainerStyled = styled.div<{
  hasFadingEffect?: boolean;
}>`
  ${({ hasFadingEffect }) =>
    hasFadingEffect &&
    `-webkit-animation: fadein 5s;
  -moz-animation: fadein 5s;
  -ms-animation: fadein 5s;
  -o-animation: fadein 5s;
  animation: fadein 5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }}
`}
`;

export const PageHeaderMainTitleStyled = styled.h1`
  display: flex;
  justify-content: center;
`;

export const PageHeaderSubtitleStyled = styled.h3`
  display: flex;
  justify-content: center;
`;
