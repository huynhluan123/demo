function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log('prevState', prevState);
        console.log('Action', action);
        const nextState = reducer(prevState, action);

        console.groupEnd();
        return nextState;
    };
}

export default logger;
