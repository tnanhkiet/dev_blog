interface headerProps {
  createdAt: string
  author: {
    url: string
    name: string
    avatar: string
  }
}

const BlogHeader: React.FC<headerProps> = (props) => {
  const {createdAt, author} = props
  const createdDate: Date = new Date(createdAt)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return (
    <div className="flex">
      <img
        className="rounded-[50%] mb-4 mr-4"
        src={author.avatar}
        width={50}
        height={50}
        alt="Author profile"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-[1rem]">{author.name}</p>
        <div className="flex gap-4 list-none">
          <li className="font-normal text-[0.85rem]">{author.url}</li>
          <li className="font-normal ml-2 text-[0.85rem]">
            {createdDate.toLocaleDateString('en-US', options)}
          </li>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
