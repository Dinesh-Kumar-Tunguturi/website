import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PreservedLink = ({ to, children, ...props }) => {
    const [searchParams] = useSearchParams();
    const ref = searchParams.get('ref') || sessionStorage.getItem('affiliate_ref');

    let finalTo = to;
    if (ref && !to.includes('ref=')) {
        const separator = to.includes('?') ? '&' : '?';
        // Handle hash navigation
        if (to.includes('#')) {
            const [path, hash] = to.split('#');
            finalTo = `${path}${separator}ref=${ref}#${hash}`;
        } else {
            finalTo = `${to}${separator}ref=${ref}`;
        }
    }


    const handleClick = (e) => {
        if (props.onClick) props.onClick(e);
        if (to.startsWith('/#')) {
            const id = to.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Update hash in URL manually while preserving ref
                if (ref) {
                    window.history.pushState(null, '', `/?ref=${ref}#${id}`);
                } else {
                    window.location.hash = id;
                }
            }
        }
    };

    return (
        <Link {...props} to={finalTo} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default PreservedLink;
