import React from 'react';

import NavMain from '../component/home/navbar_main';
import Cover from '../component/home/cover';
import Content from '../component/home/content';

function home() {
  return (
    <div>
      <NavMain />
      <Cover />
      <Content />
    </div>
  )
}

export default home