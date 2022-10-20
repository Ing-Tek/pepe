setInterval(() => {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a,i) => {
        a.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
    });
}, 1);
