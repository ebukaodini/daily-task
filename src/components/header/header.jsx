import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from "react-feather";
import { formatDate } from '../../utils/helpers/formatDate';
import { useSelector } from 'react-redux';
import './header.scss';

export default function Header() {
  const [date, setDate] = useState(formatDate());
  const ui = useSelector(state => state.ui)
  const settings = useSelector(state => state.settings)

  useEffect(() => {
    setInterval(() => {
      setDate(`${formatDate()}`);
    }, 10000);

    return;
  }, [setDate]);

  return (
    <div className='header'>

      <div className='header__title'>

        <h1 className='__title'>{settings.title ?? 'Daily Tasks'}</h1>

        <h4 className='__subtitle'>{date}</h4>

      </div>

      <div className='header__actions'>

        {
          ui.page !== 'settings' &&
          <Link to='/settings' className='__settings_btn'>
            <Settings />
          </Link>
        }

      </div>

    </div>
  )
}