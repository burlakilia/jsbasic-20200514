export class View {

    constructor(el) {
        this.el = el;
        this.state = false;
    }

    render() {
        console.warn('напиши метод render');
    }

    /**
     * Включает или выключает показ view
     */
    toggle(state) {
        this.el.hidden = !state;
    }

}
