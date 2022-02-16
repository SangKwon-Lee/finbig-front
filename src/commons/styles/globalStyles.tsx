import { Global, css } from "@emotion/react";

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "SpoqaHanSansNeo-Regular", "Spoqa Han Sans JP", sans-serif,
      "Noto Sans Kr", Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
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
    font-weight: 700;
    src: local("Spoqa Han Sans Neo Bold"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "SpoqaHanSansNeo-Medium";
    font-weight: 500;
    src: local("Spoqa Han Sans Neo Medium"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "SpoqaHanSansNeo-Regular";
    font-weight: 400;
    src: local("Spoqa Han Sans Neo Regular"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "SpoqaHanSansNeo-Light";
    font-weight: 300;
    src: local("Spoqa Han Sans Neo Light"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "SpoqaHanSansNeo-Thin";
    font-weight: 100;
    src: local("Spoqa Han Sans Neo Thin"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf")
        format("truetype");
  }
`;

export const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};
