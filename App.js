import React, {useState} from 'react';

import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Posts from './src/components/Posts';
import Tabbbar from './src/components/Tabbar';
import StoriesModal from './src/components/StoriesModal';

const App = () => {
  const [showStoriesModal, setShowStoriesModal] = useState(false);

  function onShowStoriesModal() {
    setShowStoriesModal(true);
  }

  return (
    <React.Fragment>
      <Header />
      <Stories onShowStoriesModal={onShowStoriesModal} />
      <Posts />
      <Tabbbar />
      {showStoriesModal && <StoriesModal />}
    </React.Fragment>
  );
};

export default App;
