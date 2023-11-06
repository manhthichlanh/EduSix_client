/* eslint-disable react/prop-types */
function Input({ type, className, placeholder, value, onChange, disabled }) {
  return (
    <div className="w-full">
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
