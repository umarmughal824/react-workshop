/* eslint-disable no-script-url */
import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom'

import './Lessons.css';

const Lessons = () => {

  return (
      <div className="lessons">
        <aside>
          <ul className="lessons-list">
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/jsx'>Introduction to JSX</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/elements'>React Elements</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/comp-props'>Components and Props</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/lifecycle-hooks'>State & Lifecycle Hooks</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/conditional-renders'>Conditional Rendering</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/state-lift-up'>State Lift-up</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/container-presentational'>Container vs. Presentational</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/user-data'>Handling User Data</Link>
              </a>
            </li>
            <li>
              <a className={classnames({'lesson-item': true})}
                  href="javascript:void(0);">
               <Link to='/api-integration'>API Integration</Link>
              </a>
            </li>
          </ul>
        </aside>
        <div className="lesson-body">
        </div>
      </div>
  );
}

export default Lessons;
