import React from 'react';
import { clockInAndOut } from '../../../constants';

function ClockInClockOut() {
  return (
    <form className="form-inline logged-out">
      <button type='submit' className="btn btn-sm btn-outline-primary clockin" disabled>{clockInAndOut}</button>
    </form>
  );
};

export default ClockInClockOut;
