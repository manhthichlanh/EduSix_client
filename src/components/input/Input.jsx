/* eslint-disable react/prop-types */
function Input({ id, type, className, placeholder, value, onChange, disabled, onClick, autoComplete }) {
  return (
    <div className="w-full">
      <input
      id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default Input;
