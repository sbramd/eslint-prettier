/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_AUTHOR: string;
    REACT_APP_NOT_SECRET_CODE: string;
  }
}
