import {BlogPost} from '@/types/blog'
import BlogHeader from './BlogHeader'

const BlogReview: React.FC<BlogPost> = (props) => {
  const {title, bodyText, createdAt, author, tags} = props
  const reviewText: string = bodyText.substring(0, 150) + '...'
  return (
    <section>
      <BlogHeader createdAt={createdAt} author={author} />
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{reviewText}</p>
      <div className="flex gap-3">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="bg-sky-600 px-2 mt-2 font-semibold rounded-xl text-zinc-800"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BlogReview
