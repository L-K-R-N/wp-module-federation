import React from 'react';
interface Props {
    name?: string;
}

export const UserCard: React.FC<Props> = ({ name }) => {
    return (
        <div className="">
            username: {name ?? 'none'}
        </div>
    )
};
