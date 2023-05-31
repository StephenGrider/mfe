import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn, apiBaseUrl }) => {
  const ref = useRef(null);
  const history = useHistory();
  console.log("ref==555======================", ref);
  console.log("Auth files signin==3======================", process.env.REACT_APP_API_URL);
  console.log("apiBaseUrl ==== Auth files signin==4======================", apiBaseUrl);
  console.log("onSignIn ==== Auth files signin==4======================", onSignIn);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
      apiBaseUrl
    });
    process.env.REACT_APP_API_URL
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
