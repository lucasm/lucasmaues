import Style from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className={Style.pageHeader}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
