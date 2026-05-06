export function Button({ children, className = "", type = "button", variant = "primary", ...props }) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    icon: "btn-icon"
  };

  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
