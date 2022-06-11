export default function getCroppedImg(url, pixelCrop) {
    
    let resize_canvas = document.createElement('canvas');
    let orig_src = new Image();
    orig_src.src = url;
    resize_canvas.width = pixelCrop.width;
    resize_canvas.height = pixelCrop.height;
    let cnv = resize_canvas.getContext('2d');
    cnv.drawImage(orig_src, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
    let newimgUri = resize_canvas.toDataURL("image/jpg").toString();

    return url.split(',')[1]
}