import {Button} from "@mui/material";

interface ActionButtonProps {
  code:string,
  color:string,
  onClick:Function,
  text:string,
}

interface ValidateButtonProps extends ActionButtonProps {
  code:string,
  color:"success",
  onClick:Function,
  text:string,
}

interface PassButtonProps extends ActionButtonProps {
  code:string,
  color:"error",
  onClick:Function,
  text:string,
}

export default function ActionButton({color, code, onClick, text}: ValidateButtonProps | PassButtonProps) {  
  return (
    <Button 
      className= "answer-btn" 
      variant= "outlined" 
      size= "small"
      color= {color}
      onClick= {() => onClick(code)}
    >
      {text}
    </Button>
  )
}
