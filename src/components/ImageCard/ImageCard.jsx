import css from "./ImageCard.module.css"

const ImageCard = ({alt, src, name}) => {
    return (
        <li className={css.imgItem}>
		    <div>
                <img src={src} alt={alt} name={name}
                    className={css.image} />
		    </div>
	    </li>
    )
}

export default ImageCard