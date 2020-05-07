import React from 'react';
import PropTypes from 'prop-types';
import createApiClient from './interceptor';

class TokenManager extends React.Component {
    constructor(props) {
        super(props);
        console.log('TokenManager initializer');
    }
    componentDidMount() {
        const { endTokenManager } = this.props;
        if(!endTokenManager) {
            this._startIntervel();
        }
    }

    componentDidUpdate(prevProps) {
        const { endTokenManager } = this.props;
        if (prevProps.endTokenManager !== endTokenManager) {
            if(endTokenManager === true) {
                this._stopIntervel();
            }
            if(endTokenManager === false) {
                this._startIntervel();
            }
        }
    }
    _startIntervel = () => {
        console.log('Token Intervel Started');
        const { tokenRefreshTime } = this.props;
        this.intervelID = setTimeout(this.refreshToken, tokenRefreshTime);
    }
    _stopIntervel = () => {
        console.log('Token Intervel Stopped');
        clearTimeout(this.intervelID);
    }
    refreshToken = async () => {
        console.log('in refresh token func');
        const { endUserSession } = this.props;
        console.log('Time to refresh the token');
        //stop the refesh token intervel here
        this._stopIntervel();
        const { refreshTokenUrl, payLoad, authorization } = this.props.tokenDetails;
        const { tokenResponse } = this.props;
        const refreshTokenApi = createApiClient(refreshTokenUrl, authorization);
        const [err, response] = await refreshTokenApi.post('', payLoad);
        if (!err) {
            // callback for token response
            const data = response && response.data ? response.data : {};
            tokenResponse(data);
            this._startIntervel();
            return;
        }
        console.log('There is an error in the Token reuest api call', err);
        this._stopIntervel();
        //Logout the session below
        endUserSession();

    };
    componentWillUnmount() {
        this._stopIntervel();
    }

    render() {
        return (
            <></>
        );
    }
}

TokenManager.propTypes = {
    refreshTokenEnabled: PropTypes.bool,
    tokenRefreshTime: PropTypes.number,
    tokenDetails: PropTypes.object,
    endUserSession: PropTypes.func,
    endTokenManager: PropTypes.bool,
    tokenResponse: PropTypes.func
};
export default TokenManager;
