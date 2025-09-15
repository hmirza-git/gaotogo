import React, {useState} from 'react'

interface FooterLinksDesktopProps {
        links: { text: string; href: string }[];
        title: string;
    }

function FooterLinksDesktop({ links, title }: FooterLinksDesktopProps) {

  return (
    <div className="hidden lg:flex flex-col space-y-[18px]">
                <span className="font-primary text-xl tracking-wide">{title}</span>
                <ul className=" flex flex-col space-y-4">
                    {links.map(item => (
                        <li className="font-secondary text-[16px] text-rice/80 hover:text-rice"><a href={item.href} className="">{item.text}</a></li>
                    ))}
                </ul>
            </div>
  )
}

export default FooterLinksDesktop;
