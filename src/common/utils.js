// 将base64格式转换为file文件
export function dataURLtoFile (dataurl, filename) {
    let arr = dataurl.split(','), 
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, 
    u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

// 将base64格式转换为blob文件
export function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

// 压缩图片
export function compress (ImgObj, n) {
    return new Promise( (resolve, reject) => {
        // 用于存储压缩后的图片base64编码
        const reader = new FileReader();
        reader.readAsDataURL(ImgObj);
        reader.onload = function(e) {
            let image = new Image();
            // 加载之前定义回调函数：图片加载完毕后再通过canvas压缩图片，否则图片还没加载完就压缩，结果图片是全黑的
            image.onload = function () {    
                let canvas = document.createElement('canvas');
                // context相当于画笔，里面有各种可以进行绘图的API
                let context = canvas.getContext('2d');
                let imgWidth = image.width / n;
                let imgHeight = image.height / n;
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                
                //使用drawImage重新设置img标签中的图片大小，实现压缩
                context.drawImage(image, 0, 0, imgWidth, imgHeight);
                
                //使用toDataURL将canvas上的图片转换为base64格式
                let dataURL = canvas.toDataURL('image/png');
                if (image.complete == true) {
                    resolve(dataURL);
                } else {
                    reject(false);
                }
            }
            image.src = e.target.result;
        }
    });
}
