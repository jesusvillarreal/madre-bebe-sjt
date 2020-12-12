$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    })

})


const buttonOpen = document.getElementById('open-modal')
const buttonClose = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const toggleActiveModal = () => modal.classList.toggle('active')

buttonClose.addEventListener('click', toggleActiveModal)
buttonOpen.addEventListener('click', toggleActiveModal)