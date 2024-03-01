import React from 'react'
import HeaderLogo from './HeaderLogo'

const Header = () => {
    return (
        <>
            <div className="flex gap-4 text-sm mb-4">
                <div>
                    <ul className='flex flex-col gap-1'>
                        <li>Matheus Henrique Ferreira</li>
                        <li>Desenvolvedor Web</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-1'>
                        <li>Assis - SP - Brasil</li>
                        <li><a className="font-bold" href="ferrmatstudio@gmail.com">ferrmatstudio@gmail.com</a></li>
                    </ul>
                </div>

                <div>
                    <ul className='flex flex-col gap-1'>
                        <li className='leading-[14px]'>
                            <span className="mr-4 text-[10px]">01</span>
                            <a className="font-bold hover:text-[13px] hover:transition-all ease-in-out delay-50" href="#">sobre</a>
                        </li>
                        <li className='leading-[14px]'>
                            <span className="mr-4 text-[10px]">02</span>
                            <a className="font-bold hover:text-[13px] hover:transition-all ease-in-out delay-50" href="#">contato</a>
                        </li>
                    </ul>
                </div>
            </div>

            <HeaderLogo />
        </>
    )
}

export default Header