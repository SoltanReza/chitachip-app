import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';
import { setInterval } from 'timers';
import { StyledDateTimeViewer } from './styles';

export const DateTimeViewer = () => {
  const [date, setDate] = useState('تاریخ زمان');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyledDateTimeViewer className="DateTimeViewer" code>
      <span>{date.split(' ')[0]}</span>
    </StyledDateTimeViewer>
  );
};
