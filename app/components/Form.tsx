import React from 'react'
import Image from 'next/image'
import alertIcon from '@/public/images/icon-error.svg'

type FormType = {
    alert: string
    placeholder: string

}

export function FormElement(props: FormType) {
    return (
        <div className="flex flex-col text-[hsl(249,10%,26%)] gap-1">
            <div className="flex border-gray-500 border p-3 rounded-lg justify-between">
                <input type="text" placeholder={props.placeholder} className='w-full' />
                <Image src={alertIcon} alt={''} />
            </div>
            <p className="text-[hsl(0,100%,74%)] text-right  text-xs">{props.alert}</p>
        </div>

    )
}


type Props = {}

export default function Form({ }: Props) {
    return (
        <div className='flex flex-col bg-white   rounded-lg p-8 gap-4 text-sm font-medium'>
            <FormElement alert={'First Name cannot be empty'} placeholder={'Name'} />
            <FormElement alert={'Last Name cannot be empty'} placeholder={'Last Name'} />
            <FormElement alert={'Look like this is not an email '} placeholder={'Email Address'} />
            <FormElement alert={'Password cannot be empty'} placeholder={'Password'} />

            <button className='bg-[hsl(154,59%,51%)] p-3 rounded-md font-semibold text-white'>CLAIM YOUR FREE TRAIL</button>
            <p className="text-[hsl(246,25%,77%)] text-[10px] text-center">By clicking th e button, you are agreeing to our <span className='text-[hsl(0,100%,74%)] cursor-pointer'>Terms and Services</span></p>
        </div>
    )
}

// {'email@example/com'} 