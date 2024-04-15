import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get current hash without '#'
      if (['tab1', 'tab2', 'tab3', 'tab4'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check initial hash
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case 'tab1':
        return <Tab1 />;
      case 'tab2':
        return <Tab2 />;
      case 'tab3':
        return <Tab3 />;
      case 'tab4':
        return <Tab4 />;
      default:
        return null;
    }
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="#tab1" onClick={() => setActiveTab('tab1')}>Tab1</Link>
          <Link to="#tab2" onClick={() => setActiveTab('tab2')}>Tab2</Link>
          <Link to="#tab3" onClick={() => setActiveTab('tab3')}>Tab3</Link>
          <Link to="#tab4" onClick={() => setActiveTab('tab4')}>Tab4</Link>
        </nav>
        <section className='height100'>
          {renderTab()}
        </section>
      </BrowserRouter>
    </>
  );
}
