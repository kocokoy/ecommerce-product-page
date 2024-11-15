export function displayImage(imageUrl){
  const img = new Image();
  img.src = imageUrl;
  document.body.appendChild(img);
}

