const HomeVideos = props => {
  const {matchVideos} = props
  const {id, thumbnailUrl, title, viewCount, channel} = matchVideos
  console.log(viewCount)

  return (
    <div>
      <p>{channel}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p>{viewCount}</p>
      <p>{thumbnailUrl}</p>
    </div>
  )
}

export default HomeVideos
