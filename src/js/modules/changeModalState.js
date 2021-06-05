import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElement(event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN': state[prop] = i;
                    break;

                    case 'INPUT': 
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'холодное' : state[prop] = 'тёплое';

                            element.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });

                            if (state[prop]) {
                                document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                            }
                            
                        } else {
                            state[prop] = item.value;
                        }  
                    break;

                    case 'SELECT': state[prop] = item.value;
                    break;
                }

                if (document.querySelector('.popup_calc').style.display === 'block') {
                    if (state.width && state.height) {
                        document.querySelector('.popup_calc_button').removeAttribute('disabled');
                    } 
                }
                console.log(state);
            });
        });
    }

    bindActionToElement('click', windowForm, 'form');
    bindActionToElement('input', windowWidth, 'width');
    bindActionToElement('input', windowHeight, 'height');
    bindActionToElement('change', windowType, 'type');
    bindActionToElement('input', windowProfile, 'profile');
    
};

export default changeModalState;