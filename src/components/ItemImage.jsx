import React from 'react';

export default function ItemImage({image,title})
{
    return (
        <div className="item_image">
            <img src={image} alt={title}className="image" />
        </div>
    );
}