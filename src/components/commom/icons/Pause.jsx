
/* eslint-disable react/prop-types */
export default function Pause({ width, height, ...props }) {
    return (
        <svg
            className=""
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M10.652 19.11V4.89C10.652 3.54 10.082 3 8.64195 3H5.01195C3.57195 3 3.00195 3.54 3.00195 4.89V19.11C3.00195 20.46 3.57195 21 5.01195 21H8.64195C10.082 21 10.652 20.46 10.652 19.11Z" fill="black" />
            <path d="M20.9991 19.11V4.89C20.9991 3.54 20.4291 3 18.9891 3H15.3591C13.9291 3 13.3491 3.54 13.3491 4.89V19.11C13.3491 20.46 13.9191 21 15.3591 21H18.9891C20.4291 21 20.9991 20.46 20.9991 19.11Z" fill="black" />
        </svg>
    );
}
