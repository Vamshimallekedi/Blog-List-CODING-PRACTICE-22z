// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div>
      {blogsList.map(eachOne => (
        <BlogItem blogDetails={eachOne} key={eachOne.id} />
      ))}
    </div>
  )
}

export default BlogList
