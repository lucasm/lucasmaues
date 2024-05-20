import { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const OpenIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-minus">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={toggleAccordion}
        style={{ display: 'flex', alignItems: 'center' }}>
        <span>{title}</span>
        <span style={{ marginLeft: 'auto' }}>{isOpen ? <OpenIcon /> : <CloseIcon />}</span>
      </button>
      <div id="accordion-content" role="region" style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
