/// <reference types="react-scripts" />

declare namespace NodeJs {
  interface ProcessEnv {
    REACT_APP_BACKEND_URL: string;
    NODEMAILER_USER: string;
    NODEMAILER_PASS: string;
  }
}
