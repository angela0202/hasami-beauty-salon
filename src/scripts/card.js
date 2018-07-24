class Card extends  Config {
    constructor(personInfo) {
        super()
        this.personInfo = personInfo;
    }
    render(value) {
        const html = super.format(value, this.personInfo);
        const card = super.htmlToDom(html)[0];

        card.addEventListener('click', () => {
            console.log(this.personInfo);
        });

        return card;
    }
}
