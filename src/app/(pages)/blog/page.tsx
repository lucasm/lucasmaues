import BlogPosts from '@/components/BlogPosts'
import PageHeader from '@/components/PageHeader'
import PageWrapper from '@/components/PageWrapper'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('POSTS')

export default function PageBlog() {
  return (
    <PageWrapper>
      <section>
        <div className="container">
          <PageHeader
            title={ROUTES.POSTS.title}
            // description={ROUTES.POSTS.description}
          />

          <BlogPosts />
        </div>
      </section>
    </PageWrapper>
  )
}
