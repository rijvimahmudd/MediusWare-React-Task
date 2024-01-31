import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Problem1 from './components/Problem-1.jsx';
import Menu from './components/Menu.jsx';
import Problem2 from './components/Problem-2.jsx';
import Index from './components/Index.jsx';
import Modal from './components/Problem-2-components/Modal.jsx';
import ModalWrapper from './components/Problem-2-components/ModalWrapper.jsx';
import ProfileCardModal from './components/Problem-2-components/ProfileCardModal.jsx';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div>
      <Routes location={background ? background : location}>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
        </Route>
        
        {background && <Route path="/modal/all-contacts" element={<ModalWrapper />}/>}
        {background && <Route path="/modal/us-contacts" element={<ModalWrapper />}/>}
        <Route path='/contact/:id' element={<ProfileCardModal />}/>
      </Routes>
    </div>
  );
}

export default App;
