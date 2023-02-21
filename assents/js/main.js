function createCalculator() {
    return{
        display: document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),
        
        
        inicia(){
            this.clickbuttons();
            this.pressEnter();
        },

        performAccount(){
            let account =this.display.value;
            try {
                account= eval(account);
                if (!account) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(account);
            } catch (error) {
                alert('Conta invalida');
                return ;
            }
        },

        pressBackSpace(){
            this.display.addEventListener('keyup', e => {
                if (e.key === 'BackSpace') {
                    this.clearOne();
                }
            });
        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                // console.log(e);
                if (e.key === 'Enter') {
                    this.performAccount();
                }
            });
        },

        clickbuttons(){
            document.addEventListener('click', e=> {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.performAccount();
                }

                this.display.focus();
            }); // se não usar arrow function usar bind(this) pois senão o this esta como referencia o document
        },

        btnForDisplay(valor){
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = '';
        },

        clearOne(){
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculadora = createCalculator();
calculadora.inicia();