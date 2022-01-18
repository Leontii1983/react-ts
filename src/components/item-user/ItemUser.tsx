import {FC} from 'react';
import {IUser} from '../types/types';

interface ItemUserProps {
 user: IUser;
}

const ItemUser: FC<ItemUserProps> = ({user})=> {
    return (
        <div key={user.id} style={{padding: 15, border: '1px solid gray'}}>
                 <p>Id: {user.id}</p> 
                 <p>Имя: {user.name}</p>
                 <p>Живет в городе: {user.address.city}</p>
                 <p>Живет на улице: {user.address.street}</p>
                 <p>Квартира: {user.address.suite}</p>
                 <p>Телефон: {user.phone}</p>   
        </div>
    )
}

export default ItemUser;