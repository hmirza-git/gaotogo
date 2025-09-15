import React, {useState} from 'react'

interface FooterLinksMobileProps {
        links: { text: string; href: string }[];
        title: string;
    }

function FooterLinksMobile({ links, title }: FooterLinksMobileProps) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex flex-col"
    onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between pb-3 border-b-2 border-rice/10">
            <span className="font-primary text-xl tracking-wide">{title}</span>
            <img src={`/icons/${isOpen ? 'collapse.svg' : 'expand.svg'}`} alt="expand icon" onClick={() => setIsOpen(!isOpen)}/>
        </div>
        <ul className={`flex flex-col space-y-3 ${isOpen? 'opacity-100 max-h-100 mt-[16px]' : 'opacity-0 max-h-0 overflow-hidden '} transition-all duration-500 ease-in-out`}>
            {links.map(item => (
                <li className="font-secondary text-[16px] text-rice/80 hover:text-rice"><a href={item.href} className="">{item.text}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default FooterLinksMobile;
