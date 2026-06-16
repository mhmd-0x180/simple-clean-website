const Button = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer text-white bg-gradient-to-br from-accent to-purple-500 dark:to-purple-700/90 hover:bg-opacity-90  
                font-bold py-2 px-5 border-2 border-accent rounded-full text-lg transition duration-300 ease-in-out transform  active:scale-98 shadow-lg ${className}`}
        >
            {children}
            {/* bg-gradient-to-tr from-accent to-background dark:from-surface dark:to-background */}
        </button>
    );
}
export default Button;