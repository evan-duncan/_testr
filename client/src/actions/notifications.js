import * as action from 'react-notification-system-redux';

function build({ message, title="", shouldFade=true }) {
    return {
        title,
        message,
        position: 'tr',
        autoDismiss: shouldFade ? 5 : 0,
    };
}

export function error(message, title="") {
    return action.error(build({ message, title, shouldFade: false }));
}

export function info(message, title="") {
    return action.info(build({ message, title }));
}

export function success(message, title="") {
    return action.success(build({ message, title }));
}

export function warning(message, title="") {
    return action.warning(build({ message, title }));
}

export const removeAll = action.removeAll;
