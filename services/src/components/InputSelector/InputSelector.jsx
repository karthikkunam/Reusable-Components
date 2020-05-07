import React from 'react';
import PropTypes from 'prop-types';
import formatToCurrency from './../Utils/formatToCurrency';
import classNames from 'classnames/bind';

class InputSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      errorMessage: '',
    };
    this.inputChange = this.inputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  componentDidMount() {
    this.setState({
      inputValue: this.props.inputValue ? this.props.inputValue.toString() : '',
    });
  }

  componentDidUpdate(prevProps) {
    const { inputValue: thisInputvalue } = this.props;
    const { inputValue: prevInputValue } = prevProps;
    if (thisInputvalue !== prevInputValue) {
      let inputValue = thisInputvalue ? thisInputvalue.toString() : '';
      this.setState({ inputValue });
    }
  }

  onKeyDown(e) {
    if (e.keyCode == 13) {
      e.persist();
      const { subType, onEnter, precision, onChange } = this.props;
      const { inputValue: oldValue } = this.state;
      let { inputValue: newValue } = this.state;
      if (subType === 'float') {
        let floatNumber = Number(newValue);
        floatNumber = floatNumber ? floatNumber.toFixed(precision) : '0.00';
        newValue = newValue ? floatNumber : '';
      }
      this.setState(
        {
          inputValue: newValue,
        },
        () => {
          if (oldValue !== newValue) {
            onChange && onChange(e);
          }
          onEnter && onEnter(e);
        },
      );
    }
  }

  onBlur(e) {
    e.persist();
    const { subType, onBlur, precision, onChange } = this.props;
    const { inputValue: oldValue } = this.state;
    let { inputValue: newValue } = this.state;
    if (subType === 'float') {
      let floatNumber = Number(newValue);
      floatNumber = floatNumber ? floatNumber.toFixed(precision) : '0.00';
      newValue = newValue ? floatNumber : '';
    }
    this.setState(
      {
        inputValue: newValue,
      },
      () => {
        if (oldValue !== newValue) {
          onChange && onChange(e);
        }
        onBlur && onBlur(e);
      },
    );
  }

  onFocus(e) {
    const { onFocus } = this.props;
    onFocus && onFocus(e);
  }

  dumbFunc(e) {
    e.preventDefault();
    return false;
  }

  inputChange(e) {
    e.persist();
    const { subType, precision, onChange, positive } = this.props;
    let value = e.target.value;
    let regexPattern;
    switch (subType) {
      case 'positiveInteger': {
        regexPattern = /^[0-9]*$/;
        break;
      }
      case 'float': {
        const regexGen = `^[-]?\\d*\\.?\\d{0,${precision ? precision : 2}}$`;
        regexPattern = new RegExp(regexGen);
        break;
      }
      case 'currency': {
        regexPattern = positive ? /^[0-9.]*$/ : /^[0-9.-]*$/;
        break;
      }
      default: {
        this.setState(
          {
            inputValue: value,
          },
          () => {
            onChange && onChange(e);
          },
        );
      }
    }
    if (subType === 'currency' && regexPattern && value.match(regexPattern)) {
      const newValue = formatToCurrency(value);
      this.setState(
        {
          inputValue: newValue,
        },
        () => {
          onChange && onChange(e);
        },
      );
    }
    if (regexPattern && value.match(regexPattern) && subType !== 'currency') {
      this.setState(
        {
          inputValue: value,
        },
        () => {
          onChange && onChange(e);
        },
      );
    }
  }
  render() {
    const {
      maxLength,
      label,
      size,
      isDisable,
      isCopy,
      isCut,
      isPaste,
      onCopy,
      onCut,
      onPaste,
      placeholder,
      innerRef,
      icon,
      helpText,
      status,
      id,
      name,
      ariaDescribedBy,
      type,
      border,
    } = this.props;
    const finalStatus = `has-${status}`;

    return (
      <>
        <div
          className={classNames(
            'form-group',
            { input: !icon },
            { search: icon },
            { [finalStatus]: status },
            { 'with-border': border },
          )}>
          <div className="col">
            {icon && icon === 'search' && (
              <div className="col-left">
                <span className="icon icon-search"></span>
              </div>
            )}
            <div className="col-right">
              {helpText && (
                <small id="textSearch" className="form-text">
                  <div> {helpText} </div>
                </small>
              )}
              <input
                type={type}
                maxLength={maxLength}
                onChange={this.inputChange}
                value={this.state.inputValue}
                onBlur={isDisable ? this.dumbFunc : this.onBlur}
                onFocus={isDisable ? this.dumbFunc : this.onFocus}
                onKeyDown={isDisable ? this.dumbFunc : this.onKeyDown}
                disabled={isDisable}
                onCopy={isCopy ? onCopy : this.dumbFunc}
                onCut={isCut ? onCut : this.dumbFunc}
                onPaste={isPaste ? onPaste : this.dumbFunc}
                placeholder={placeholder ? placeholder : label ? label : ''}
                size={size}
                ref={innerRef}
                className="form-control"
                name={name}
                id={id}
                aria-describedby={ariaDescribedBy}
                autoComplete="off"
              />
              {label && <label htmlFor={id}>{label}</label>}
            </div>
          </div>
        </div>
      </>
    );
  }
}

InputSelector.displayName = 'InputSelector';

InputSelector.defaultProps = {
  type: 'text',
  subType: '',
  size: 'md',
  isDisable: false,
  isCopy: true,
  isPaste: true,
  isCut: true,
  precision: 2,
};
InputSelector.propTypes = {
  type: PropTypes.string,
  subType: PropTypes.string,
  maxLength: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.string,
  inputValue: PropTypes.number,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  isDisable: PropTypes.bool,
  isCopy: PropTypes.bool,
  isPaste: PropTypes.bool,
  isCut: PropTypes.bool,
  precision: PropTypes.number,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  icon: PropTypes.oneOf(['search']),
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onPaste: PropTypes.func,
  innerRef: PropTypes.func,
  status: PropTypes.oneOf(['', 'error', 'warning', 'success']),
  name: PropTypes.string,
  id: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  positive: PropTypes.bool,
  border: PropTypes.bool,
  onFocus: PropTypes.func,
};

const RefComponent = React.forwardRef((props, ref) => <InputSelector innerRef={ref} {...props} />);

export default RefComponent;
