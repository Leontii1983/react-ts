import  React, {FC, useState} from 'react';

export enum CardStyle {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    style: CardStyle;
    onClick :(num: number) => void;
}

const Card: FC<CardProps> = ({width, height, style, onClick, children}) => {
    const [state, setState] = useState(0);
    return(
        <div style={{
            width, height, 
            border: style === CardStyle.outlined ? '1px solid red' : 'none',
            background: style === CardStyle.primary ? 'lightgray' : ''
                    
        
        }}
        onClick={()=> onClick(state)}>
           {children}
        </div>
    );
}

export default Card;