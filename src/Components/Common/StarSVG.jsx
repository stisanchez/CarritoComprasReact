import React from 'react'

export default function StarSVG({ fill = "#FFD700", isHalf = false }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isHalf ? "url(#half)" : fill}
            stroke={isHalf ? "url(#half)" : fill}
            strokeWidth="0.5"
        >
            {isHalf && (
                <defs>
                    <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#ccc" />
                    </linearGradient>
                </defs>
            )}
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
