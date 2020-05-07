import React from 'react';
import SessionManager from '.';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'SessionManager',
  component: SessionManager,
  decorators: [withKnobs],
};

const tokenDetails = {
  refreshTokenUrl: '/7boss/order/auth/refresh/token',
  payLoad: {},
  authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJzdG9yZUlkIjoiMTg0NzMiLCJkZXZpY2VUeXBlIjoiSVNQIiwiZmVhdHVyZSI6Im9yZGVyaW5nIiwiaXAiOiIxOTIuMTY4LjEzNy4yOSIsInJlYWRPbmx5IjpmYWxzZSwiZGF0ZVRpbWUiOiIyMDIwLTAzLTEyVDE5OjE0OjU0WiIsInRpbWVTdGFtcCI6IjE1ODQwNDA0OTQiLCJzdG9yZSI6eyJzdG9yZUlkIjoiMTg0NzMiLCJpc09yZGVyQmF0Y2hSdW5uaW5nIjpmYWxzZSwiaXNTeXN0ZW1BdmFpbGFibGUiOnRydWUsInRpbWVab25lIjoiQ1NUIiwicmVjYWxjdWxhdGVkT24iOiIyMDIwLTAzLTEyVDEyOjA2OjIxLTA1OjAwIiwiZmVhdHVyZXMiOnsiYm9zcyI6eyJpc0ludmVudG9yeUVuZ2luZUVuYWJsZWQiOnRydWUsImlzT3JkZXJpbmdFbmFibGVkIjp0cnVlLCJpc1Byb21vUGFydGljaXBhdGlvbkVuYWJsZWQiOnRydWV9LCJzdG9yZSI6eyJpc0dSTm9uRGFpbHkiOnRydWUsImlzR1JBSUZvcmVjYXN0Ijp0cnVlLCJpc0dSQXV0b0FwcHJvdmUiOnRydWUsImlzM3JkUGFydHlHYXNXb3Jrc2hlZXRFbmFibGVkIjpmYWxzZSwiaXNBY2Vzc0JvSEhpc3RvcnlGcm9tUW9JQWN0aXZlIjp0cnVlLCJpc0NhbGNNaW5pbXVtT25oYW5kQXV0b0FwcGx5RW5hYmxlZCI6dHJ1ZSwiaXNFbGVjdHJvbmljQ2hlY2tpbkVuYWJsZWQiOnRydWUsImlzR1JTaW5nbGVEYXlFbmFibGVkIjpmYWxzZSwiaXNJdGVtUmVzdHJpY3Rpb25EaXNhYmxlZCI6ZmFsc2UsImlzTm9uU2VsZkJpbGxpbmdFbmFibGVkIjp0cnVlLCJpc1Jlc3RyaWN0ZWRBbGNvaGFsU2FsZXNIb3Vyc0VuYWJsZWQiOmZhbHNlLCJpc1N1cHBseUJ1ZGdldFRyYWNraW5nRW5hYmxlZCI6dHJ1ZSwiaXNXcml0ZW9mZkJ1ZGdldFRyYWNraW5nRW5hYmxlZCI6dHJ1ZX19LCJ1c2VyIjp7InVzZXJJZCI6NDEsImZ1bGxOYW1lIjoidGZmbnkgdHlsciIsInJvbGVzIjpbIlBPUyA0IEVORCBPRiBEQVkgU0lHTiBPTiIsIlN0b3JlIEFzc29jaWF0ZSJdfX0sImFwcCI6eyJlbnZpcm9ubWVudCI6ImxvY2FsIiwidmVyc2lvbiI6IjEuMC43LWJldGEifSwiaWF0IjoxNTg0MDQwNTAwLCJleHAiOjE1ODQwNDE0MDB9.mjHFEYWkIBwRbgGKzDe3jFpvT1cb36_bSBxZasdyJj3xkNhu3QuxpKwKTmQwY6iunh5iUeuAfwKqKbovMsVkb30fibn96vC6ohayS4N4-O5_hcJwc4SlGSamx21i4CGDEvLQn9jE-Vk4uCeDr9-NQRnLmONuQU3bmDJhvbKZE57qkhIMyCHVOoiHydljhK0wytJhLBaNCTCDh8vagdbVnRlI6BmVIEQuvFYsdq50KLf7C3I5xhOZxVa7FFO01QM1rsoCqw0g0iXNcqZww-5vA__8T7XoXaJthgsyFQRv9AqsRmH73b9fD_UimVXIiTbVfGXi4tPNvpyTT5-JWtHHsXsOHl9kY3hqWWDRURQeXXL70ZN209IZxO_Ka_TaThOoC2dzl3yKBtnkriXs72eJOJCtKXOcabpoQvW_N6WaNU4ys9fHzl89D5HRuG4tIIPuromiKn3NMWrC5mIPZUcchC8lEWFCoAbx7o9kkTM89rn2UiO5tP_OzhaDnFrPXGoQUk7Gr4sw71bsbbWF-dfofk4LflyUxtL6dlNxJQprdSfbdg8yo6rvxYzi-iQD0of7A8Sw0J_e63GBd94ZZNUPeoAIJ9WrdaB_viness3SeRvRuMLkdle6tfa3yA9hdjv52if8wIqXhTC5L1PD7lyTcNcEFqRBWpD5TuIIssIzj80'
};

const App = () => <h1>I am session</h1>;

const timeoutfn=()=>{
  alert('timed out');
};



export const sessionWithTokenEnabled = () => (
  <SessionManager 
    timeoutAction={timeoutfn}
    sessionTimeout={ 13000 }
    tokenRefreshTime = {5000}
    tokenDetails={tokenDetails}
    refreshTokenEnabled= {true}
    setSession={boolean('setSession', false, 'GROUP-ID1')}
    tokenResponse = {action('token data')}
  >
    <App/>
  </SessionManager>
);

export const sessionWithTokenDisabled = () => (
  <SessionManager 
    timeoutAction={timeoutfn}
    sessionTimeout={ 13000 }
    tokenDetails={tokenDetails}
    refreshTokenEnabled= {false}
  >
    <App/>
  </SessionManager>
);
  export const sessionWithEventDebounce = () => (
    <SessionManager 
      timeoutAction={timeoutfn}
      sessionTimeout={ 13000 }
      tokenDetails={tokenDetails}
      refreshTokenEnabled= {false}
      eventDebounceTime = {3000}
    >
      <App/>
    </SessionManager>
);
