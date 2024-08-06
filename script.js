class HandleUIPrice {
  prevActive = 'girls';
  prices = {
    'girls': {
      'btn': document.getElementById('btnPriceGirls'),
      'block': document.getElementById('blockPriceGirls')
    },
    'combo': {
      'btn': document.getElementById('btnPriceCombo'),
      'block': document.getElementById('blockPriceCombo')
    },
    'men': {
      'btn': document.getElementById('btnPriceMen'),
      'block': document.getElementById('blockPriceMen')
    }
  }

  activateEventListeners() {
    this.prices['girls'].btn.addEventListener('click', () => {
      this.deactivate();
      this.activate('girls');
    })

    this.prices['combo'].btn.addEventListener('click', () => {
      this.deactivate();
      this.activate('combo');
    })

    this.prices['men'].btn.addEventListener('click', () => {
      this.deactivate();
      this.activate('men');
    })

  }

  activate(namePrice) {
    this.prices[namePrice].btn.classList.add('active');
    this.prices[namePrice].block.classList.add('active');
    this.prevActive = namePrice;
  }

  deactivate() {
    this.prices[this.prevActive].btn.classList.remove('active');
    this.prices[this.prevActive].block.classList.remove('active');
  }

}

const handleUIPrice = new HandleUIPrice();
handleUIPrice.activateEventListeners();