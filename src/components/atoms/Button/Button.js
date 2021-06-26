const Button = ({ className, disabled, onClick = () => {}, children }) => {
  return (
    <button
      className={className}
      css={{ color: 'red' }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
