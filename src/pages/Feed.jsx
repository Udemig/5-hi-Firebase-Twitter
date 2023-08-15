import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
const Feed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <div>
      <h1>ANA SAYFA</h1>
      <button onClick={handleClick}>Çıkış Yap</button>
    </div>
  );
};

export default Feed;
