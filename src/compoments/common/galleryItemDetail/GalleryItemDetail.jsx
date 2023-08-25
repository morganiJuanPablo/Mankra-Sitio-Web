import stylesGallery from "./GalleryItemDetail.module.css";

const GalleryItemDetail = ({ product }) => {
  /*  const images = [product.img1, product.img2, product.img3]; */

  return (
    <div className={stylesGallery.containerGrid}>
      <div className={stylesGallery.item1}>
        <img
          src={product.img1}
          alt="Imagen producto"
          className={stylesGallery.imgProduct}
        />
      </div>
      <div className={stylesGallery.item2}>
        <img
          src={product.img1}
          alt="Imagen producto"
          className={stylesGallery.imgProductSmall}
        />
      </div>
      <div className={stylesGallery.item3}>
        <img
          src={product.img2}
          alt="Imagen producto"
          className={stylesGallery.imgProductSmall}
        />
      </div>
      <div className={stylesGallery.item4}>
        <img
          src={product.img3}
          alt="Imagen producto"
          className={stylesGallery.imgProductSmall}
        />
      </div>
    </div>
  );
};

export default GalleryItemDetail;
