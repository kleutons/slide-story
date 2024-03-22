class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }
    activeSlide(index){
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.count = 0;
        this.pointerItems.forEach((item) => {
            item.classList.remove('active')
            item.classList.remove('view')
            if(this.count < index ){
                item.classList.add('view')
            }
            this.count ++;
            });
        this.pointerItems[index].classList.add('active');
        this.autoSlide();1
    }

    prev(){
        if(this.active > 0 ){
        this.activeSlide(this.active - 1);
        }
    }   

    next(){
        if(this.active < (this.items.length - 1) ){
        this.activeSlide(this.active + 1);
        }
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addPointerItems(){
        this.items.forEach(() => (this.pointer.innerHTML += `<span></span>`));
        this.pointerItems = Array.from(this.pointer.children);
        console.log(this.pointerItems);
    }

    autoSlide(){
        clearInterval(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.pointer = this.slide.querySelector('.slide-pointer');
        this.addPointerItems();
        this.activeSlide(0);
        this.addNavigation();
    }
}
new SlideStories('slide');