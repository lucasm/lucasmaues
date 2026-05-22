import Button from '@/components/Button'
import { IconGlobe } from '@/components/Svgs'

export default function ButtonLanguage() {
  return (
    <Button variant="blackBorder" size="small">
      {<IconGlobe />}
      Language: en-US
    </Button>
  )
}
