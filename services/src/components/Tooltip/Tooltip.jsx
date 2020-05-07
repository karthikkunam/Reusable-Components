import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CustomTooltip(props) {
  const target = useRef(null);
  const { children, placement, iconClassName, className, trigger, dynamicContent } = props;

  return (
    <div className={className}>
      <OverlayTrigger
        key={placement}
        placement={placement}
        trigger={trigger}
        overlay={
          <Tooltip id={`tooltip-${placement}`} className={`custom-tooltip bs-popover-${placement}`}>
            {children}
          </Tooltip>
        }>
        <button className="btn btn-sm btn-tooltip bs-tooltip" id="open-popover-link">
          <span>{dynamicContent}</span>
          <span ref={target} className={iconClassName}></span>
        </button>
      </OverlayTrigger>
    </div>
  );
}

CustomTooltip.displayName = 'Tooltip';
CustomTooltip.defaultProps = {
  placement: 'bottom',
  trigger: ['hover', 'click'],
};

CustomTooltip.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
  iconClassName: PropTypes.string,
  className: PropTypes.string,
  trigger: PropTypes.string,
  dynamicContent: PropTypes.string,
};

export default CustomTooltip;
