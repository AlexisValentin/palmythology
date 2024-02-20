import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" className="bg-indigo-500" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
