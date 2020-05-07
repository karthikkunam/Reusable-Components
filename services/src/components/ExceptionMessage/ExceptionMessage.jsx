import React from 'react';
import PropTypes from 'prop-types';

function ExceptionMessage(props) {
    const { messageType, messageHeader, messageInfo } = props;

    let messageLogo;
    if (messageType === 'success') {
        messageLogo = <span className="icon icon-status-checkmark-reversed active" />;
    } else if (messageType === 'error') {
        messageLogo = <span className="icon icon-status-error-reversed active" />;
    } else {
        messageLogo = <span className="icon icon-status-info-reversed" />;
    }

    const msgs = messageInfo.map(msg => (<div key={msg}> {msg} </div>));
    return (
        <div className="alert exception-message">
            <div> {messageLogo} </div>
            <div className="header"> {messageHeader} </div>
            <div className="body"> {msgs} </div>
        </div>
    );
}

ExceptionMessage.displayName = 'ExceptionMessage';

ExceptionMessage.propTypes = {
    messageType: PropTypes.oneOf(['success', 'info', 'error']),
    messageHeader: PropTypes.string,
    messageInfo: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

ExceptionMessage.defaultProps = {
    messageType: 'info',
    messageInfo: ['No data to display.']
};

export default ExceptionMessage;