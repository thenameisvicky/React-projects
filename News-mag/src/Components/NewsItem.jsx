import PropTypes from 'prop-types'
import image from '../assets/image.jpg'
export const NewsItem = ({title , description , url , src }) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block px-2 py-2 mx-3 my3"  style={{maxWidth:"345px"}}>
      <img src={src?src:{image}} style={{height:"200px",width:"325px"}} className="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"Not available click Expand"}</p>
          <a href={url} className="btn btn-primary">Expand</a>
        </div>
    </div>
  )
}

NewsItem.propTypes={
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  src:PropTypes.string.isRequired,
}

export default NewsItem