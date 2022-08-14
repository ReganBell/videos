import { getYouTubeId } from 'src/helpers/url'

const VideoThumbnail = ({ width = 480, height = 360, video }) => {
  const { url, imageUrl } = video
  const id = getYouTubeId(url)
  const imgSrc = imageUrl || `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  console.log({ imgSrc, imageUrl })

  return (
    <div className="bg-black" style={{ width, height }}>
      {id ? (
        <img alt={video.title} src={imgSrc} />
      ) : (
        <div>Video url ${video.url} is not supported</div>
      )}
    </div>
  )
}

export default VideoThumbnail
