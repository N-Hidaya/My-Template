import {DiscussionEmbed} from "disqus-react"
  
const Comments = () => {
  const disqusShortname = "NextJS"
  
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier:'123', 
    title: "Demo Post" 
  }
  
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
  
export default Comments;