import Routes from './routes';
import { AuthProvide } from './contexts/Auth';

export default function App() {
  return(
    <AuthProvide>
      <Routes />
    </AuthProvide> 
  )
}

