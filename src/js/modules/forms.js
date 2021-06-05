import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const status = {
        loading: 'Загрузка...',
        success: 'Ваш запрос успешно отправлен!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = status.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
    
    function clearInputs() {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    function closeModal(modalSelector) {
        const modal = document.querySelectorAll(modalSelector);
        modal.forEach(item => {
            item.style.display = 'none';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = status.success;
                    console.log(res);
                    state = {};
                    document.querySelector('.popup_calc_button').disabled = true;
                })
                .catch(() => statusMessage.textContent = status.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        closeModal('[data-modal]');
                    }, 3000);
                });
        });
    });

};

export default forms;