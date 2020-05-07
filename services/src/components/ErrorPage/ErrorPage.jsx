import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage(props) {
    const { header, content } = props;
    return (
        <div className="row component-example mb-3 full-height">
            <div className="col-sm-12">
                <div className="error-page full-height">
                    <div className="row full-height col">
                        <div className="col-sm-8 col-left">
                            <div className="center-align error-page-message">
                                <h1 className="header">{header}</h1>
                                <p className="content">{content}</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-right">
                            <span className="icon icon-logo-7eleven-color center-align"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
                        </div>
                        <div className="footer">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string
};

ErrorPage.defaultProps ={
    header: 'Session Expired',
    content: 'Your 7BOSS session has expired. To reconnect, please reboot your browser and login again.'
};

export default ErrorPage;
