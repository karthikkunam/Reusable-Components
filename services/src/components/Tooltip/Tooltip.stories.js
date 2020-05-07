import React from 'react';
import Tooltip from '.';

const wrapperStyle = {
  paddingLeft: '250px',
  paddingTop: '50px',
};

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [storyFn => <div style={wrapperStyle}>{storyFn()}</div>],
};

export const DefaultTooltip = () => (
  <>
    <div>Default Tooltip</div>
    <Tooltip iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Default Tooltip</div>
      </div>
    </Tooltip>
  </>
);
export const TooltipOnClick = () => (
  <>
    <div>Click on Icon</div>
    <Tooltip trigger='click' iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Default Tooltip</div>
      </div>
    </Tooltip>
  </>
);
export const DynamicContentTooltip = () => (
  <>
    <div>Click on Icon</div>
    <Tooltip trigger='click' dynamicContent="12" iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Default Tooltip</div>
      </div>
    </Tooltip>
  </>
);

export const TooltipWithPlacement = () => (
  <>
    <div>Top Tooltip</div>
    <Tooltip placement="top" iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Purchase Margin (%) =</div>
        <div className="body">[ (LDU * Item Retail – Item Cost + Allowance Amount) / (LDU * Item Retail) ] * 100</div>
      </div>
    </Tooltip>
    <div>Right Tooltip</div>
    <Tooltip placement="right" iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Purchase Margin (%) =</div>
        <div className="body">[ (LDU * Item Retail – Item Cost + Allowance Amount) / (LDU * Item Retail) ] * 100</div>
      </div>
    </Tooltip>
    <div>Left Tooltip</div>
    <Tooltip placement="left" iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Purchase Margin (%) =</div>
        <div className="body">[ (LDU * Item Retail – Item Cost + Allowance Amount) / (LDU * Item Retail) ] * 100</div>
      </div>
    </Tooltip>
    <div>Bottom Tooltip</div>
    <Tooltip placement="bottom" iconClassName="icon icon-info">
      <div className="tooltip-content">
        <div className="header">Purchase Margin (%) =</div>
        <div className="body">[ (LDU * Item Retail – Item Cost + Allowance Amount) / (LDU * Item Retail) ] * 100</div>
      </div>
    </Tooltip>
  </>
);
