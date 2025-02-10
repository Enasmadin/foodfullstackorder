import Image from 'next/image'
import React from 'react'
import AddToCart from './AddToCart'
import { formatCurrency } from '@/lib/formatters'


const MenuItem = ({ item }: { item: any }) => {
    return (
        <li >
            <div className="relative w-48 h-48 mx-auto">
                <Image src={item.image} alt={""} className="object-cover" fill />
            </div>
            <div className="mb-4 flex place-items-center justify-between">
                <h4 className="font-semibold text-xl my-3">{item.name}</h4>
                <strong className="text-accent">{formatCurrency(item.basePrice)} </strong>
                <p className="text-gray-500 text-sm line-climp-3">{item.description}</p>
                <AddToCart item={item} />
            </div>
        </li>
    )
}

export default MenuItem