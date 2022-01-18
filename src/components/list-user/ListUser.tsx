import {FC} from 'react';
import ItemUser from '../item-user';
import {IUser} from '../types/types';

interface UserListProps {
    users: IUser[]
}

const ListUser: FC<UserListProps> = ({users}) => {
    return(
        <div>
            {users?.map(user => 
                <ItemUser user={user} />
                )}
        </div>
    )

}


export default ListUser;