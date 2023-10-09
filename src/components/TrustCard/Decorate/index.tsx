import React from 'react'

type Props = {
    isOrange?: boolean
    isTopLeft?: boolean
}

export default function Decorate({ isOrange, isTopLeft }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 100 100"
            className={`absolute ${
                isTopLeft
                    ? 'top-[-50px] left-[-110px] '
                    : 'bottom-[-50px] right-[-110px]'
            }`}
        >
            <rect
                x={`${isTopLeft ? '40' : '-20'}`}
                y={`${isTopLeft ? '30' : '73'}`}
                width="80"
                height="0.5"
                fill={`${isOrange ? '#FF8228' : '#219EBC'}`}
            />
            <rect
                x={`${isTopLeft ? '48.5' : '50'}`}
                y={`${isTopLeft ? '20' : '20.5'}`}
                width="0.5"
                height="60"
                fill={`${isOrange ? '#FF8228' : '#219EBC'}`}
            />
        </svg>
    )
}
