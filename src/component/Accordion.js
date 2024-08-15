import { useState } from "react"

const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <li className={"accordion block "} onClick={toggleAccordion}>
            <div className="acc_btn">
                {title}
            </div>
            {isOpen && <div className={"accordion__content " + isOpen ? 'current' : ''}>
                <p>{content}</p>
            </div>}
        </li>
    )
}

export default Accordion