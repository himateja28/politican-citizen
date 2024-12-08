import './App.css';
import './output.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/home/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterMain from './components/SocioConnect/RegisterMain';
import NewsMain from './components/updates/SocioConnect/NewsMain';
import IssueMain from './components/track/SocioConnect/IssueMain';
import TrackIssue from './components/trac1/TrackIssue/TrackIssue';
import IssuesList from './components/track/SocioConnect/IssueList';
import UpdateForm from './components/track/SocioConnect/UpdateForm';
import AdminDashboard from './components/AdminDashboard';
import PoliticianDashboard from './components/PoliticianDashboard';
import About from './components/About';
import PrivateRoute from './PrivateRoute';  
import PublicRoute from './PublicRoute';  
import RoleBasedRoute from './RoleBasedRoute';  
import Update from './Update';

function App() {
  return (
    <div>
      <Routes>
        {/* Public routes that should redirect if logged in */}
        <Route path='/' element={<PublicRoute element={<MainPage/>} />} />
        <Route path='/home' element={<PublicRoute element={<MainPage />} />} />
        <Route path='/about' element={<PublicRoute element={<About />} />} />
        {/* <Route path='/up' element={<PublicRoute element={<Update />} />} /> */}

        {/* Public routes for unauthenticated users */}
        <Route path='/login' element={<PublicRoute element={<LoginPage />} />} />
        <Route path='/register' element={<PublicRoute element={<RegisterMain />} />} />

        {/* Routes accessible only by users with a specific role */}
        <Route path='/view' element={<RoleBasedRoute element={<IssuesList />} allowedRoles={['politician']} />} />
        <Route path='/politician' element={<RoleBasedRoute element={<PoliticianDashboard />} allowedRoles={['politician']} />} />
        <Route path='/admin' element={<RoleBasedRoute element={<AdminDashboard />} allowedRoles={['admin']} />} />
        <Route path='/update' element={<RoleBasedRoute element={<UpdateForm />} allowedRoles={['politician']} />} />
        <Route path='/raise-issue' element={<RoleBasedRoute element={<IssueMain />} allowedRoles={['user']} />} />
        <Route path='/viewupdates' element={<RoleBasedRoute element={<NewsMain />}  allowedRoles={['user']}  />} />
        <Route path='/up' element={<RoleBasedRoute element={<Update />}  allowedRoles={['user']}  />} />

        {/* Protected routes for any authenticated user */}
        <Route path='/track-issue' element={<PrivateRoute element={<TrackIssue />} />} />
      </Routes>
    </div>
  );
}

export default App;
