import css from "./ImageCard.module.css"

const ImageCard = ({alt, src, name, openModal}) => {
    return (
        <li className={css.imgItem}>
		    <div>
                <img src={src} alt={alt} name={name}
                    className={css.image}
                    onClick={openModal} />
		    </div>
	    </li>
    )
}

export default ImageCard