import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../auth/src/context/AuthContext';
//import AuthContext from "../context/AuthContext"
export default () => {
  const { login } = useContext(AuthContext);
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      login,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
