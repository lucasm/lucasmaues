import { getPageMetadata } from '@/utils/metadata'
import StorePageClient from './StorePageClient'

export const metadata = getPageMetadata('STORE')

export default function PageStore() {
  return <StorePageClient />
}
