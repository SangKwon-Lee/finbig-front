import { Global, css } from "@emotion/react";

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Noto Sans Kr", Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
