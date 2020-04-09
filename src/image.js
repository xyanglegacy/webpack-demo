const makeImage = (url) => {
  const image = document.createElement("img");
  image.src = url;
  image.height = "200";
  image.width = "510";

  return image;
};

export default makeImage;
