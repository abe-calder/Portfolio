import { Outlet } from 'react-router'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <div>
      <Theme>
        <Outlet />
      </Theme>
    </div>
  )
}

export default App