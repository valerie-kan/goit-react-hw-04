import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export const ImageGallery = ({imgArr, openModal}) => {
    return (
        <ul className={css.imgList}>
            {imgArr !== null && imgArr.map(img =>
                <ImageCard
                    key={img.id}
                    alt={img.alt_description}
                    src={img.urls.small}
                    name={img.current_user_collections.description}
                    openModal={openModal} />
            )}
        </ul>
    )
}