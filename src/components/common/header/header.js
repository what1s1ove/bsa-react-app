import { createElement } from 'react';
// import { createElement } from '../../../helpers/helpers';
import './style.css';

// <header class="page-header">
//   <div class="page-header__wrapper">
//     <h1 class="page-header__title">
//       <a href="./index.html">TODOList</a>
//     </h1>
//   </div>
// </header>

const Header = createElement(
  'header',
  {
    className: 'page-header',
  },
  createElement(
    'div',
    {
      className: 'page-header__wrapper',
    },
    createElement(
      'h1',
      {
        className: 'page-header__title',
      },
      createElement(
        'a',
        {
          href: './index.html',
        },
        'TODOList',
      ),
    ),
  ),
);

export default Header;
