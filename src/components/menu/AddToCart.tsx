"use client";
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button';
import Image from 'next/image';



const AddToCart = ({ item }: { item: any }) => {
    return (

        <AlertDialog>
            <AlertDialogTrigger><Button type="button" size={"lg"} className='mt-4 text-white rounded-full  !px-8'> <span> Add To Cart</span></Button></AlertDialogTrigger>
            <AlertDialogContent className='sm:max-w-[425px] max-h-[80vh] overflow-y-auto'>
                <AlertDialogHeader className='flex items-center'>
                    <Image src={item.image} alt={'image'} />
                    <AlertDialogTitle>{item.name}</AlertDialogTitle>
                    <AlertDialogDescription className='text-center'>
                        {item.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button type='submit'>Save Changes</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AddToCart
