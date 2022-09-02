const op = document.getElementById('open');
const moc = document.getElementById('modal_container');
const cl = document.getElementById('close');

op.addEventListener('click', () => {
    moc.classList.add('show');
});

cl.addEventListener('click', () => {
    moc.classList.remove('show');
});
