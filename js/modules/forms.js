import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector ,modalTimerId){
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Erfolg',
        failure: 'Sorry'
    }

    forms.forEach(item => {
        bindpostData(item);
    });



    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =`
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

         

            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);
            
           
            const json= JSON.stringify(Object.fromEntries(formData.entries()));
            
           
            
            // request.send(json);

            //request.send(formData);
          
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(()=> {
                showThanksModal(message.failure);
            }).finally(()=> {
                form.reset();
            })

            
            })
        }
    

    function showThanksModal(message){
        const prevMD = document.querySelector('.modal__dialog'); 

        prevMD.classList.add('hide');
        openModal('.modal', modalTimerId);

        const dankeModal = document.createElement('div');
        dankeModal.classList.add('modal__dialog');
        dankeModal.innerHTML =`
        <div class = "modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(dankeModal);
        setTimeout(()=> {
            dankeModal.remove();
            prevMD.classList.add('show');
            prevMD.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

export default forms;