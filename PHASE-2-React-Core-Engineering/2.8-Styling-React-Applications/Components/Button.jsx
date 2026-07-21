
const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};
export default Button;