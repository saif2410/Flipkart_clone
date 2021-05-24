const Image = ({image}) => {
    return (
        <div>
            <br></br>
            <p>{image.name}</p>
            <img src={"data:"+image.img.contentType+";base64,"+image.img.data} alt="I m a pro" /> 
        </div>
    )
}

export default Image
