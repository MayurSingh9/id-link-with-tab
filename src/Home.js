import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="#tab1" smooth>Tab1</Link>
          <Link to="#tab2" smooth>Tab2</Link>
        </nav>
        <Tab1 />
        <Tab2 />
      </BrowserRouter>
    </>
  );
}
