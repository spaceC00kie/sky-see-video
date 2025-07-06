import ReactPlayer from "react-player"

interface Props {}

export const Home: React.FC<Props> = ({}) => {
  return (
    
      <ReactPlayer
        src="https://vimeo.com/806447198"
        playing
        muted
        loop
        width="100%"
        height="100%"
      />
    
  )
}
