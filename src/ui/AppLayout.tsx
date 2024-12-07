import { Outlet } from 'react-router-dom'
import Container from './Container'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <div>
      <Sidebar />

      <div>
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  )
}

export default AppLayout
