const images = () => {
    const workSection = document.querySelector('.works'),
          imgModal = document.createElement('div'),
          bigImg = document.createElement('img');

    imgModal.classList.add('popup');
    workSection.append(imgModal);
    
    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.style.display = 'none';

    bigImg.style.maxWidth = '50%';
    imgModal.append(bigImg);

    workSection.addEventListener('click', (evt) => {
        evt.preventDefault();

        let target = evt.target;

        if (target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.src = path;
        }

        if (target && target.matches('div.popup')) {
            imgModal.style.display = 'none';
            console.log('ok');
        }
    });
};

export default images;