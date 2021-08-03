import { css } from 'lit';
const btnCSS = css`
      button{
      min-height: 10px;
      position: relative;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      background-color:inherit  ;
      cursor:pointer;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      box-sizing: border-box;
      }
      button:disabled{
     opacity: .3;
  }
  button:focus {
      outline: 0;
  }
  button[type=button]:not(:disabled),
  button[type=reset]:not(:disabled),
  button[type=submit]:not(:disabled),
  button:not(:disabled) {
      cursor: pointer;
  }
 `
export default btnCSS;