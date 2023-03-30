function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.third-item__content').eq(i).toggleClass('third-item__content_active');
            $('.third-item__list').eq(i).toggleClass('third-item__list_active');
        })
    });
};

toggleSlide('.third-item__btn');
toggleSlide('.third-item__btn_back');


$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});





$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");//очищаем инпуты
        $('.overlay, #done').fadeIn('slow');

        $('form').trigger('reset');//все формы обновится
    });
    return false;
});


$(`.modal__close`).on(`click`,function(){
    $(".overlay, #done").fadeOut(`slow`);
});
$(`.overlay`).on(`click`,function(){
    $(`#done,.overlay`).fadeOut(`slow`);
});

$(`.btn_open`).on(`click`,function(){
    $(`#done,.overlay`).fadeIn(`slow`)
})


const data={
    toogleData:function(){
        if(DataTransfer.privat){
            DataTransfer.privat=false
        }else{
            DataTransfer.privat=true
        }
    }
}
//пустач строка пустой ok


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0
    let full = 0;

    data.shops.forEach(shop=>{
        square += shop.width * shop.length
    });

    full=square*data.height;

    if(data.budget - (full*data.moneyPer1m3)>=0){
        return `Достаточно`
    }else{
  return `Недостаточно`
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    arr.forEach(item=>{
        if(item!==missingCurr){
            console.log(`Есть валюты ${item}`)
        }else{
            if()
        }
    })
}
availableCurr([...baseCurrencies,...additionalCurrencies],`CNY`)








