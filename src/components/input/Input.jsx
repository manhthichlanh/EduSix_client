function Input({
    type,
    className,
    placeholder,
    value,
    onChange,
    disabled,
  }) {
    return (
      <div className="">
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
  