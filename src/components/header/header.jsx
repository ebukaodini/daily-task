import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from "react-feather";
import { formatDate } from '../../utils/helpers/formatDate';
import './header.scss';

export default function Header() {
  const [date, setDate] = useState(formatDate());

  useEffect(() => {
    setInterval(() => {
      setDate(`${formatDate()}`);
    }, 30000);
  }, [setDate]);

  return (
    <div className='header'>

      <div className='header__title'>

        <h1 className='__title'>Daily Task</h1>

        <h4 className='__subtitle'>{date}</h4>

      </div>

      <div className='header__actions'>
        
        <Link to='/settings' className='__settings_btn'>
          <Settings />
        </Link>

      </div>

    </div>
  )
}