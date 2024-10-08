import { Route, Routes } from 'react-router-dom'
import AccountPage from './pages/account'
import AdminPage from './pages/admin'
import NotificationPage from './pages/notification'
import NotFoundView from './views/not-found'

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminPage />} />
      <Route path='notifications' element={<NotificationPage />}/>
      <Route path='account' element={<AccountPage />} />
      <Route path='*' element={<NotFoundView />}/>
    </Routes>
  )
}

export default RouterWrapper
