
interface RatingStarProps{
    color:string
}

const RatingStar:React.FC<RatingStarProps> = ({color}) => {

  return (
    <span className={`${color}`}>
            ★
    </span>
  )
}

export default RatingStar;