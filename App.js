import React from 'react';

import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Posts from './src/components/Posts';
import Tabbbar from './src/components/Tabbar';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Stories />
      <Posts />
      <Tabbbar />
    </React.Fragment>
  );
};

export default App;