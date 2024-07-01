"use client"

import Link from "next/link"
import { IoPencil, IoTrashBinOutline } from "react-icons/io5"
import { useFormStatus } from "react-dom"
import clsx from "clsx"
import { deleteContact } from "@/libs/actions"

export const CreateButton = () =>{
    return(
        <Link className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[10px] rounded-sm text-sm" href="/contacts/create">
            CREATE
        </Link>
    )
}

export const EditButton = ({id}: {id:string}) =>{
    return(
        <Link className="rounded-sm border p-1 hover:bg-gray-100" href={`/contacts/edit/${id}`}>
            <IoPencil size={20}/>
        </Link>
    )
}

export const DeleteButton = ({id}: {id:string}) =>{
    const DeleteContactWithId = deleteContact.bind(null,id)
    return(

        <form action={DeleteContactWithId}>
            <button className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashBinOutline size={20}/>
            </button>
        </form>

        )
}

export const SubmitButton = ({label}: {label:string}) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-sm text-sm w-full py-3 px-5", {
        "opacity-50 cursor-progress" : pending
    });
    return (

        <button type='submit' className={className} disabled={pending}>

            {label === "label" ? (
                <span>{pending ? "Saving ..." : "Save"}</span>
            ):(
                <span>{pending ? "Submiting ..." : "Submit"}</span>
            )}

        </button>
    )
}