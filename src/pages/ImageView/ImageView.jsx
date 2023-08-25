import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../../services/GaleryImages';

const ImageView = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchImages(id).then((imageData) => {
      console.log('Image Data:', imageData);
      setImage(imageData);
    });
  }, [id]);

  if (!image) {
    return <p>Carregando imagem...</p>;
  }

  return (
    <div>
      <h2>Imagem Individual</h2>
      <img src={image.url} alt={`Image ${id}`} />
    </div>
  );
};

export default ImageView;



