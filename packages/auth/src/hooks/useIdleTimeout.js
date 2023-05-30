import { useContext, useState } from "react"
import { useIdleTimer } from "react-idle-timer"
import AuthContext from "../context/AuthContext";
//import AuthContext from "../context/AuthContext";

/**
 * @param onIdle - function to notify user when idle timeout is close
 * @param idleTime - number of seconds to wait before user is logged out
 */

const useIdleTimeout = ({ onIdle, idleTime = 1 }) => {
    const idleTimeout = 1000 * idleTime;
    const [isIdle, setIdle] = useState(false)
    const { logout } = useContext(AuthContext);

    const handleIdle = () => {
        setIdle(true)
        logout()
    }

    const idleTimer = useIdleTimer({
        timeout: idleTimeout,
        promptTimeout: idleTimeout / 2,
        onPrompt: onIdle,
        onIdle: handleIdle,
        debounce: 500
    })

    return {
        isIdle,
        setIdle,
        idleTimer
    }
}

export default useIdleTimeout;
