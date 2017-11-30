export const HAS_HEADER = 'HAS_HEADER';
export const HAS_FOOTER = 'HAS_FOOTER';

export function addFooter() {
    return toggle(HAS_FOOTER, true);
}

export function removeFooter() {
    return toggle(HAS_FOOTER, false);
}

export function addHeader() {
    return toggle(HAS_HEADER, true);
}

export function removeHeader() {
    return toggle(HAS_HEADER, false);
}

function toggle(type, state) {
    return {
        type,
        [type.toLowerCase()]: state,
    }
}
