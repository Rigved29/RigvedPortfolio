'use client';
import React, { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<any>();

    useEffect(() => {
        const mediaMatch = window.matchMedia(query);
        const handler = (e: any) => setMatches(e.matches);

        // Add event listener for screen size changes
        mediaMatch.addEventListener('change', handler);

        // Set the initial state in case of SSR or rehydration
        setMatches(mediaMatch.matches);

        // Cleanup event listener on unmount or query change
        return () => mediaMatch.removeEventListener('change', handler);
    }, [query]);

    return matches;
};
