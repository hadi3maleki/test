// interface IButtonProps{
// children: React.ReactNode
// }

interface IButtonProps extends React.PropsWithChildren{}
const Button:React.FC<IButtonProps> = ({children}): JSX.Element =>{

return <button>{children}</button>
    
    
}

export default Button

 