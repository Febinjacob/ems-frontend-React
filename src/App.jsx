
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        {/* loacalhost:3000 */}
        <Route path='' element={<Admin />} />
        {/* loacalhost:3000/add */}
        <Route path='add' element={<Add />} />
        {/* loacalhost:3000/add/view/1 */}
        <Route path='view/:id' element={<View />} />
        {/* loacalhost:3000/add/edit/1 */}
        <Route path='edit/:id' element={<Edit />} />

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
