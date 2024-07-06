export interface ButtonProps {
  label: string
  color: string
  icon?: string
}

const Button: React.FC<ButtonProps> = ({ label, color, icon }) => {
  return (
    <button className={`bg-${color} text-white rounded-lg hover:opacity-75`}>
      <div className="m-2">
        {icon && <span>icon</span>}
        <span>{label}</span>
      </div>
    </button>
  )
}

export default Button
