import React from 'react';

interface CarouselItemOverlayProps {
    route: string;
}

export const CarouselItemOverlay: React.FC<CarouselItemOverlayProps> = ({ route }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-50">
            <a
                href={route}
                className="rounded bg-white px-4 py-2 text-black transition-colors hover:bg-gray-200"
            >
                Open
            </a>
        </div>
    );
};

