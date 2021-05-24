import Image from './Image'
const Images = ({images}) => {
    console.log(images)
    return (
        <>
          {images.map( (images) => (
            <Image image={images} />
          ))}  
        </>
    )
}

export default Images
