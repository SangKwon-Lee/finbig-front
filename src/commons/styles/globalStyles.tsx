import { Global, css } from "@emotion/react";

const reset = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "SpoqaHanSansNeo-Regular", "Spoqa Han Sans JP", sans-serif,
      "Noto Sans Kr", Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1 {
    font-family: "SpoqaHanSansNeo-Bold";
    font-size: "32px";
  }

  h2 {
    font-family: "SpoqaHanSansNeo-Bold";
    font-size: "16px";
  }

  h3 {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: "14px";
  }
  h4 {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: "12px";
  }

  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "GmarketSansLight";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "GmarketSansBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo-Light";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo-Thin";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
