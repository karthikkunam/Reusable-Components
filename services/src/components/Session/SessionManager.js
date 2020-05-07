import React from 'react';
import PropTypes from 'prop-types';
import TokenManager from './TokenManager';
import parseJwtToJSON from '../Utils/storeDetails';

const DEFAULT_EVENTS = [
    'load',
    'mousemove',
    'mousedown',
    'click',
    'scroll',
    'keypress'
];
const SESSION_TIMEOUT = 900000;
const TOKEN_REFRESH_TIME = 294000;
class SessionManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsBind: false,
            endTokenManager: true
        };
        this.logoutTimerId = null;
        this.userActivityThrottlerTimeout = null;
        this.endTokenManager = null;
        this.storeDetails = null;
    }

    componentDidMount() {
        const { setSession, tokenDetails: { authorization } } = this.props;
        if(setSession) {
            this.startSession();
        }
        if(authorization){
        this.setStoreDeatilsInSession(authorization);
        }
    }
    componentDidUpdate(prevProps) {
        const { setSession } = this.props;
        if(this.props.setSession !== prevProps.setSession ) {
            if(setSession) { 
                this.startSession();
            } else {
                this.endUserSession();
            }
        }
    }
    startSession() {
        const { sessionTimeout, tokenDetails: {authorization}, setSession} = this.props;
        if(setSession) {
            this._bindListeners();
            this.logoutTimerId = setTimeout(this.endUserSession, sessionTimeout);
            this.setStoreDeatilsInSession(authorization);
            this.setState({
                endTokenManager : false 
            });
        }
    }
    setStoreDeatilsInSession = (authorization) => {
        this.storeDetails = parseJwtToJSON(authorization);
        if(!this.storeDetail){
            const storeInfo = [];
            const headerValues = {};
            if(this.storeDetails && this.storeDetails.storeId ){
                headerValues.storeId= this.storeDetails.storeId;
            }
            if(this.storeDetails.store && this.storeDetails.store.user && this.storeDetails.store.user.fullName){
                headerValues.fullName= this.storeDetails.store.user.fullName;
            }
            storeInfo.push(headerValues);
          window.sessionStorage.setItem('storeInfo', JSON.stringify(storeInfo));
        }
    }
    _bindListeners() {
        const { events } = this.props;
        const { eventsBind } = this.state;
        if (eventsBind) return;
        events.map(e => {
            window.addEventListener(e, this.userActivityThrottler);
        });
        this.setState({
            eventsBind: true
        });
    }
    _unbindListeners() {
        const { events } = this.props;
        const { eventsBind } = this.state;
        if (!eventsBind) return;
        events.map(e => {
            window.removeEventListener(e, this.userActivityThrottler);
        });
        this.setState({
            eventsBind: false
        });
    }
    resetTimeOut() {
        const { sessionTimeout } = this.props;
        console.log('useractivity noticed and resetting the timer');
        clearTimeout(this.logoutTimerId);
        this.logoutTimerId = setTimeout(this.endUserSession, sessionTimeout);
    }
    userActivityThrottler = () => {
        const { eventDebounceTime } = this.props;
        if (!this.userActivityThrottlerTimeout) {
            this.userActivityThrottlerTimeout = setTimeout(() => {
                this.resetTimeOut();
                clearTimeout(this.userActivityThrottlerTimeout);
                this.userActivityThrottlerTimeout = null;
            }, eventDebounceTime);
        }
    };

    endUserSessionFn() {
        const { timeoutAction } = this.props;
        const { eventsBind } = this.state;
        console.log('timed out and unbinding the events');
        clearTimeout(this.logoutTimerId);
        eventsBind && this._unbindListeners();
        //callback for timeout
        timeoutAction && timeoutAction();
    }
    // Final ending the user session Fuction
    endUserSession = () => {
        //TODO:: check if session is present 
        const { refreshTokenEnabled } = this.props;
        //end the token manager if refreshTokenEnabled and then call end session
        refreshTokenEnabled
            ? this.setState(
                  {
                      endTokenManager: true
                  },
                  () => {
                      this.endUserSessionFn();
                  }
              )
            : this.endUserSessionFn();
    };
    componentWillUnmount() {
        const { events } = this.props;
        clearTimeout(this.logoutTimerId);
        clearTimeout(this.userActivityThrottlerTimeout);
        events.map(e => {
            window.removeEventListener(e, this.userActivityThrottler);
        });
    }

    render() {
        const {
            children,
            tokenDetails,
            loginData,
            refreshTokenEnabled,
            tokenResponse,
            tokenRefreshTime
        } = this.props;
        const { endTokenManager } = this.state;
        return (
            <>
                {refreshTokenEnabled && (
                    <TokenManager
                        tokenDetails={tokenDetails}
                        loginData={loginData}
                        endUserSession={this.endUserSession}
                        endTokenManager={endTokenManager}
                        tokenResponse={tokenResponse}
                        tokenRefreshTime={tokenRefreshTime}
                        setStoreDeatilsInSession={this.setStoreDeatilsInSession}
                    />
                )}
                {children || null}
            </>
        );
    }
}
SessionManager.defaultProps = {
    events: DEFAULT_EVENTS,
    sessionTimeout: SESSION_TIMEOUT,
    tokenRefreshTime: TOKEN_REFRESH_TIME,
    refreshTokenEnabled: false,
    eventDebounceTime: 0,
    setSession: false,
    tokenDetails: {
        refreshTokenUrl: '/7boss/order/auth/refresh/token',
        payLoad: {},
        authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJzdG9yZUlkIjoiMTg0NzMiLCJkZXZpY2VUeXBlIjoiSVNQIiwiZmVhdHVyZSI6Im9yZGVyaW5nIiwiaXAiOiIxOTIuMTY4LjEzNy4yOSIsInJlYWRPbmx5IjpmYWxzZSwiZGF0ZVRpbWUiOiIyMDIwLTAzLTEyVDE5OjE0OjU0WiIsInRpbWVTdGFtcCI6IjE1ODQwNDA0OTQiLCJzdG9yZSI6eyJzdG9yZUlkIjoiMTg0NzMiLCJpc09yZGVyQmF0Y2hSdW5uaW5nIjpmYWxzZSwiaXNTeXN0ZW1BdmFpbGFibGUiOnRydWUsInRpbWVab25lIjoiQ1NUIiwicmVjYWxjdWxhdGVkT24iOiIyMDIwLTAzLTEyVDEyOjA2OjIxLTA1OjAwIiwiZmVhdHVyZXMiOnsiYm9zcyI6eyJpc0ludmVudG9yeUVuZ2luZUVuYWJsZWQiOnRydWUsImlzT3JkZXJpbmdFbmFibGVkIjp0cnVlLCJpc1Byb21vUGFydGljaXBhdGlvbkVuYWJsZWQiOnRydWV9LCJzdG9yZSI6eyJpc0dSTm9uRGFpbHkiOnRydWUsImlzR1JBSUZvcmVjYXN0Ijp0cnVlLCJpc0dSQXV0b0FwcHJvdmUiOnRydWUsImlzM3JkUGFydHlHYXNXb3Jrc2hlZXRFbmFibGVkIjpmYWxzZSwiaXNBY2Vzc0JvSEhpc3RvcnlGcm9tUW9JQWN0aXZlIjp0cnVlLCJpc0NhbGNNaW5pbXVtT25oYW5kQXV0b0FwcGx5RW5hYmxlZCI6dHJ1ZSwiaXNFbGVjdHJvbmljQ2hlY2tpbkVuYWJsZWQiOnRydWUsImlzR1JTaW5nbGVEYXlFbmFibGVkIjpmYWxzZSwiaXNJdGVtUmVzdHJpY3Rpb25EaXNhYmxlZCI6ZmFsc2UsImlzTm9uU2VsZkJpbGxpbmdFbmFibGVkIjp0cnVlLCJpc1Jlc3RyaWN0ZWRBbGNvaGFsU2FsZXNIb3Vyc0VuYWJsZWQiOmZhbHNlLCJpc1N1cHBseUJ1ZGdldFRyYWNraW5nRW5hYmxlZCI6dHJ1ZSwiaXNXcml0ZW9mZkJ1ZGdldFRyYWNraW5nRW5hYmxlZCI6dHJ1ZX19LCJ1c2VyIjp7InVzZXJJZCI6NDEsImZ1bGxOYW1lIjoidGZmbnkgdHlsciIsInJvbGVzIjpbIlBPUyA0IEVORCBPRiBEQVkgU0lHTiBPTiIsIlN0b3JlIEFzc29jaWF0ZSJdfX0sImFwcCI6eyJlbnZpcm9ubWVudCI6ImxvY2FsIiwidmVyc2lvbiI6IjEuMC43LWJldGEifSwiaWF0IjoxNTg0MDQwNTAwLCJleHAiOjE1ODQwNDE0MDB9.mjHFEYWkIBwRbgGKzDe3jFpvT1cb36_bSBxZasdyJj3xkNhu3QuxpKwKTmQwY6iunh5iUeuAfwKqKbovMsVkb30fibn96vC6ohayS4N4-O5_hcJwc4SlGSamx21i4CGDEvLQn9jE-Vk4uCeDr9-NQRnLmONuQU3bmDJhvbKZE57qkhIMyCHVOoiHydljhK0wytJhLBaNCTCDh8vagdbVnRlI6BmVIEQuvFYsdq50KLf7C3I5xhOZxVa7FFO01QM1rsoCqw0g0iXNcqZww-5vA__8T7XoXaJthgsyFQRv9AqsRmH73b9fD_UimVXIiTbVfGXi4tPNvpyTT5-JWtHHsXsOHl9kY3hqWWDRURQeXXL70ZN209IZxO_Ka_TaThOoC2dzl3yKBtnkriXs72eJOJCtKXOcabpoQvW_N6WaNU4ys9fHzl89D5HRuG4tIIPuromiKn3NMWrC5mIPZUcchC8lEWFCoAbx7o9kkTM89rn2UiO5tP_OzhaDnFrPXGoQUk7Gr4sw71bsbbWF-dfofk4LflyUxtL6dlNxJQprdSfbdg8yo6rvxYzi-iQD0of7A8Sw0J_e63GBd94ZZNUPeoAIJ9WrdaB_viness3SeRvRuMLkdle6tfa3yA9hdjv52if8wIqXhTC5L1PD7lyTcNcEFqRBWpD5TuIIssIzj80'
    }
};
SessionManager.propTypes = {
    sessionTimeout: PropTypes.number,
    refreshTokenEnabled: PropTypes.bool,
    events: PropTypes.array,
    children: PropTypes.node,
    timeoutAction: PropTypes.func,
    tokenDetails: PropTypes.object,
    loginData: PropTypes.object,
    tokenResponse: PropTypes.func,
    tokenRefreshTime: PropTypes.number,
    eventDebounceTime: PropTypes.number,
    setSession: PropTypes.bool
};

export default SessionManager;
