import React, {
  useContext,
  useState,
  useCallback,
  ReactNode,
  FunctionComponent
} from 'react';
import noop from 'lodash/noop';


interface OwnProps {
  children: ReactNode;
}

interface UserState {
  isAuthenticated: boolean,
  login: string,
  token: string,
}

interface UserHandlers {
  signIn: ({ token: string }) => void;
  signOut: () => void;
  identify: ({ login: string }) => void;
};

type UserBag = UserState & UserHandlers;


const DEFAULT_STATE: UserState = {
  isAuthenticated: false,
  login: '',
  token: '',
}

const Context = React.createContext<UserBag>({
  ...DEFAULT_STATE,
  signIn: noop,
  signOut: noop,
  identify: noop,
});

const UserProvider: FunctionComponent<OwnProps> = ({children}: OwnProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(DEFAULT_STATE.isAuthenticated);
  const [login, setLogin] = useState(DEFAULT_STATE.login);
  const [token, setToken] = useState(DEFAULT_STATE.token);


  const signIn = useCallback(({ token }): void => {
    setToken(token);
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback((): void => {
    setToken('');
    setIsAuthenticated(false);
  }, []);

  const identify = useCallback(({ login }): void => {
    setLogin(login);
  }, []);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        login,
        token,
        signIn,
        signOut,
        identify,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUser = (): UserBag => {
  return useContext(Context);
};

export default {
  Context,
  Provider: UserProvider,
  Consumer: Context.Consumer,
};
