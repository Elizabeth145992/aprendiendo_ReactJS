import { EVENTS, BUTTONS } from './const.js';

function navigate(href){
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.NAVIGATION);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props}){
    const handleClick = (event) => {
        const isMainEvenbt = event.button === BUTTONS.primary;
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
        const isManageablevent = !target || target === '_self';

        if(isMainEvenbt && isManageablevent && !isModifiedEvent){
            event.preventDefault();
            navigate(to);
        }  

    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}