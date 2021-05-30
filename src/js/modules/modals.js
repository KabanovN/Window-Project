const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        
        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open');
            });
        });
    
            close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            });

            modal.addEventListener('click', (evt) => {
                if (evt.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    // document.body.classList.add('modal-open');
                }
            });
    }

    function openModalByTime(modalSelector, time) {
        setTimeout(() => {
            
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
        
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    openModalByTime('.popup', 60000);
};

export default modals;