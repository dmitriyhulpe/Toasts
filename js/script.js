function toast({title = '', description = '', type = message, duration = 5000}) {
    const item = document.querySelector('#toast');
    if(item) {
        const toast = document.createElement('div');

        const autoRemove = setTimeout(function () {
            item.removeChild(toast);
        }, Number(duration) + 1000);

        toast.addEventListener('click', function(event) {
        if (event.target.closest('.close')) {
                item.removeChild(toast);
                clearTimeout(autoRemove);
            }
        });

        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `${type}`);
        toast.style.animation = `slide ease 1s, out ease 1s ${delay}s forwards`;
        
        toast.innerHTML = `
        <div>
            <span class="title">${title}</span>
            <i class="close fas fa-times"></i>
        </div>
        <p class="description">${description}</p>`;

        item.appendChild(toast);
    }
}

const button = document.querySelector('.button');

button.addEventListener('click', function() {
    toast ({
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        type: 'message',
        duration: '5000'
    });
});