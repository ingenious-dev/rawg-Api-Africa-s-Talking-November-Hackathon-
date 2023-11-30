import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { RiArrowRightLine } from 'react-icons/ri';
import {
  Footer,
  Transition,
  Button,
  Loading,
} from '../../components';
import GameCard from '../Home/components/GameCard';

const cardDuration = 10;

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');
  const navigateToRegister = () => navigate('/register');
  function Login() {
    let interval: NodeJS.Timer | number;
    (async () => {
      setIsLoading(true);
      interval = setInterval(() => {
        setIsLoading(false);
        navigateToHome();
      }, cardDuration * 1000);
    })();
    return () => clearInterval(interval as number);
  }

  useEffect(() => {
    scrollTo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Transition className="Login" direction="left">
      {!isLoading
        ? < Transition className="login-wrapper">
          <div className='left'>
              <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    // onFocus={() => setFormMaxWidth(700)}
                    // onBlur={() => setFormMaxWidth(400)}
                  />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  // onFocus={() => setFormMaxWidth(700)}
                  // onBlur={() => setFormMaxWidth(400)}
                />
              </div>
            <div>
              <Button
                className="Store"
                handleClick={Login}
              >
                Login <RiArrowRightLine />
              </Button>

              <Button
                className="Store"
                handleClick={navigateToRegister}
              >
                Don't have an account? Register
                {/* <RiArrowRightLine /> */}
              </Button>
            </div>
          </div>
          <div className='right'>
            <GameCard
                id={1}
                name={"adsaf"}
                backgroundImage={"https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"}
                duration={cardDuration}
                big={true}
              />
          </div>
        </Transition>
        : <Loading />
      }
      <Footer />
    </Transition>
  );
}

export default Login;
