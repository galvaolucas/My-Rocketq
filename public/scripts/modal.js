export default function Modal(){
    function open(){
        // atribui active para a modal
        document.querySelector(".modal-wrapper").classList.add("active")
    }
    function close(){
        // retira active da modal
    }

    return{
        open, close
    }
}