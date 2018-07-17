export function getTemplate(name) {
    switch (name) {
        case "gallery": {
            return loadGalleryTemplate();
        }
        case "scratch": {
            return [];
        }
        default: {
            return [];
        }
    }
}

function loadGalleryTemplate() {
    return JSON.parse('[{"i":"taoylz","x":0,"y":0,"w":12,"h":1,"type":"divider","style":{"height":"100%","backgroundColor":"#222"},"moved":false,"static":false},{"i":"ijjin","x":0,"y":1,"w":12,"h":7,"data":"This template is all images, baby.","type":"text","style":{"fontSize":30,"padding":"10px","fontWeight":"bold"},"moved":false,"static":false},{"i":"rug","x":0,"y":20,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"bvufk","x":0,"y":37,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"woox","x":4,"y":20,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"idin","x":8,"y":20,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"shuafe","x":4,"y":37,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"knqfrl","x":8,"y":37,"w":4,"h":17,"data":"Drop an image here.","type":"iamge","style":{"position":"absolute","top":"10px","left":"10px","right":"10px","bottom":"10px","fontSize":"14px","textAlign":"center","paddingTop":"25px","backgroundColor":"#eee"},"moved":false,"static":false},{"i":"czembr","x":0,"y":8,"w":12,"h":12,"data":"Notice that each image is 450px wide. You might be thinking, Each column is less than 200px wide, shouldn\'t I use smaller images? The reason we recommend larger images is because of mobile! On mobile, columns will stack, so you\'ll have more room and the images can be bigger... and more awesome.","type":"text","style":{"fontSize":16,"padding":"10px"},"moved":false,"static":false}]');
}