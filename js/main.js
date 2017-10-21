'use strict';

var pageHeaderConsultBtn = document.getElementsByClassName('page-header__consult-btn');
var popupLite = document.getElementsByClassName('popup-lite');
var popupLiteCloseBtn = document.getElementsByClassName('popup-lite__close-btn');
var popupOverlay = document.getElementsByClassName('popup-overlay');

var telephoneFieldLast = document.getElementById('telephone-field-last');
var telephoneFieldLite = document.getElementById('telephone-field-lite');

var chooseFieldPhone = document.getElementsByClassName('step-1__choose-field--iphone');
var chooseFieldPad = document.getElementsByClassName('step-1__choose-device--ipad');

var nameFieldPopupLite = document.getElementById('name-field-popup-lite');

var chooseLabelField = document.getElementsByClassName('step-2__choose-label-field');
chooseLabelField = Array.prototype.slice.call(chooseLabelField);

var selectPhone = document.getElementById('select-phone');
var selectPad = document.getElementById('select-pad');

var step3SelectPhone = document.getElementsByClassName('step-3__select--phone');
var step3SelectPad = document.getElementsByClassName('step-3__select--pad');

var step2ListPhone = document.getElementsByClassName('step-2__device-list--phone');
var step2ListPad = document.getElementsByClassName('step-2__device-list--pad');

var bonusCharger = document.getElementsByClassName('step-4__bonus-label-field--charger');
var bonusGlass = document.getElementsByClassName('step-4__bonus-label-field--glass');

var bonusFieldCharger = document.getElementsByClassName('step-5__bonus-field--charger');
var bonusFieldGlass = document.getElementsByClassName('step-5__bonus-field--glass');

var inputDeviceType = document.getElementById('input-device-type');
var inputDeviceModel = document.getElementById('input-device-model');
var inputBrokenType = document.getElementById('input-broken-type');
var inputBonusType = document.getElementById('input-bonus-type');

var brokeDescription = document.getElementById('broke-description');

var chooseFieldTemp = 'не выбрано';
var chooseDeviceTemp = 'не выбрано';
var brokeTypeTemp = 'не выбрано';
var bonusTypeTemp = 'не выбрано';

var padBgField = document.getElementsByClassName('calculator__pad-bg-field');
var phoneBgField = document.getElementsByClassName('calculator__phone-bg-field');

var calculatorWrapper = document.getElementsByClassName('calculator__wrapper');

var progress = document.getElementsByClassName('progress');
var progressBar = document.getElementsByClassName('progress__bar');
var progressPercentField = document.getElementsByClassName('progress__percent-field');
var progressPercent = document.getElementById('progress-percent');

var toStage2Btn = document.getElementsByClassName('step-1__to-stage-2-btn');
var toStage3Btn = document.getElementsByClassName('step-2__to-stage-3-btn');
var toStage4Btn = document.getElementsByClassName('step-3__to-stage-4-btn');
var toStage5Btn = document.getElementsByClassName('step-4__to-stage-5-btn');
var toStage6Btn = document.getElementsByClassName('step-5__to-stage-6-btn');

var stage1 = document.getElementsByClassName('step-1');
var stage2 = document.getElementsByClassName('step-2');
var stage3 = document.getElementsByClassName('step-3');
var stage4 = document.getElementsByClassName('step-4');
var stage5 = document.getElementsByClassName('step-5');
var stage6 = document.getElementsByClassName('step-6');

var backTo1 = document.getElementsByClassName('step-2__back-to-1-link');
var backTo2 = document.getElementsByClassName('step-3__back-to-2-link');
var backTo3 = document.getElementsByClassName('step-4__back-to-3-link');

var dontKnowRadio = document.getElementsByClassName('step-3__dont-know-radio');
var step3Select = document.getElementsByClassName('step-3__select');

var dontKnowLabelField = document.getElementsByClassName('step-3__dont-know-label-field');
dontKnowLabelField = Array.prototype.slice.call(dontKnowLabelField);
/* прикручиваем валидатор для телефонов */
$(document).ready(function(){
  $(telephoneFieldLast).inputmask("+7 (999) 999-9999"); //specifying options
});

$(document).ready(function(){
  $(telephoneFieldLite).inputmask("+7 (999) 999-9999"); //specifying options
});
/*выводим лайтовый попап при нажатии на кнопку в хедере + убираем ее при закрытии */
$(pageHeaderConsultBtn).click(function() {
  $(popupLite).removeClass('popup-lite--inactive');
  $(popupOverlay).removeClass('popup-overlay--inactive');
});

$(popupLiteCloseBtn).click(function() {
  $(popupLite).addClass('popup-lite--inactive');
  $(popupOverlay).addClass('popup-overlay--inactive');
})
/* запоминание устройства iphone или ipad и переход на 2 этап + возвращение на 1 этап*/
$(chooseFieldPhone).click(function() {
  chooseFieldTemp = 'iPhone';
});
$(chooseFieldPad).click(function() {
  chooseFieldTemp = 'iPad';
});

$(toStage2Btn).click(function() {
  if (chooseFieldTemp == 'не выбрано') {
    return;
  } else {
    $(stage1).fadeOut(500);

    $(padBgField).fadeOut(500);
    $(phoneBgField).fadeOut(500);
    if (chooseFieldTemp == 'iPhone') {
      $(step2ListPhone).removeClass('step-2__device-list--inactive');
      $(step2ListPad).addClass('step-2__device-list--inactive');
    } else {
      $(step2ListPhone).addClass('step-2__device-list--inactive');
      $(step2ListPad).removeClass('step-2__device-list--inactive');
    }
    setTimeout(function() {
      progressPercent.textContent = '20%';
      $(progressBar).animate({width: "20%"}, 100);
      $(progressPercentField).animate({left: "20%"}, 500);
      $(progress).fadeIn(500);
      $(stage2).fadeIn(500);
      console.log('тип устройства: ' + chooseFieldTemp);
    }, 500);
  }
});

$(backTo1).click(function() {
  $(stage2).fadeOut(500);
  $(progress).fadeOut(500);

  setTimeout(function() {
    $(stage1).fadeIn(500);
    chooseDeviceTemp = 'не выбрано';
    brokeTypeTemp = 'не выбрано';
    bonusTypeTemp = 'не выбрано';
    $(progressBar).animate({width: "0%"}, 100);
    $(progressPercentField).animate({left: "0%"}, 500);
    console.log('модель устройства: ' + chooseDeviceTemp);
    console.log('тип поломки: ' + brokeTypeTemp);
  }, 500);
});
/*выбор из массива устройств в step2 и запись в переменную */
chooseLabelField.forEach(function (element, i) {
  element.addEventListener('click', function() {
    chooseDeviceTemp = element.dataset.devtype;
  });
});

$(toStage3Btn).click(function() {
  if (chooseDeviceTemp == 'не выбрано') {
    return;
  } else {
    $(stage2).fadeOut(500);
    if (chooseFieldTemp == 'iPhone') {
      $(step3SelectPhone).removeClass('step-3__select--inactive');
      $(step3SelectPad).addClass('step-3__select--inactive');
    } else if (chooseFieldTemp == 'iPad') {
      $(step3SelectPhone).addClass('step-3__select--inactive');
      $(step3SelectPad).removeClass('step-3__select--inactive');
    }

    setTimeout(function() {
      progressPercent.textContent = '40%';
      $(progressBar).animate({width: "40%"}, 100);
      $(progressPercentField).animate({left: "40%"}, 500);
      $(stage3).fadeIn(500);
      console.log('модель устройства: ' + chooseDeviceTemp);
    }, 500);
  }
});

$(backTo2).click(function() {
  $(stage3).fadeOut(500);

  setTimeout(function() {
    $(stage2).fadeIn(500);
    progressPercent.textContent = '20%';
    $(progressBar).animate({width: "20%"}, 100);
    $(progressPercentField).animate({left: "20%"}, 500);
  }, 500);
});

$(step3Select).click(function() {
  $(dontKnowRadio).prop('checked', false);
});

dontKnowLabelField.forEach(function (element, i) {
  element.addEventListener('click', function() {
    $(step3Select).prop('value', 'default-select');
    brokeTypeTemp = element.dataset.broketype;
    console.log('тип поломки: ' + brokeTypeTemp);
  });
});

$(selectPhone).change(function() {
  var selind = selectPhone.options.selectedIndex;
  brokeTypeTemp= selectPhone.options[selind].value;
});

$(selectPad).change(function() {
  var selind = selectPad.options.selectedIndex;
  brokeTypeTemp= selectPad.options[selind].value;
});

$(toStage4Btn).click(function() {
  if (brokeTypeTemp == 'не выбрано') {
    return;
  } else {
    if (chooseFieldTemp == 'iPhone') {
      $(stage3).fadeOut(500);

      setTimeout(function() {
        progressPercent.textContent = '60%';
        $(progressBar).animate({width: "60%"}, 100);
        $(progressPercentField).animate({left: "60%"}, 500);
        $(stage4).fadeIn(500);
      }, 500);
    } else if (chooseFieldTemp == 'iPad') {
      $(stage3).fadeOut(500);

      $(inputDeviceType).val(chooseFieldTemp);
      $(inputDeviceModel).val(chooseDeviceTemp);
      $(inputBrokenType).val(brokeTypeTemp);
      $(inputBonusType).val(bonusTypeTemp);

      brokeDescription.textContent = brokeTypeTemp;

      setTimeout(function() {
        progressPercent.textContent = '80%';
        $(progressBar).animate({width: "80%"}, 100);
        $(progressPercentField).animate({left: "80%"}, 500);
        $(stage5).fadeIn(500);
        console.log('тип поломки: ' + brokeTypeTemp);
      }, 500);
    }
  }
});

$(backTo3).click(function() {
  $(stage4).fadeOut(500);

  setTimeout(function() {
    $(stage3).fadeIn(500);
    progressPercent.textContent = '40%';
    $(progressBar).animate({width: "40%"}, 100);
    $(progressPercentField).animate({left: "40%"}, 500);
  }, 500);
});

$(bonusCharger).click(function() {
  bonusTypeTemp = "Оригинальное зарядное устройство";
});

$(bonusGlass).click(function() {
  bonusTypeTemp = "Защитное стекло с установкой";
});

$(toStage5Btn).click(function() {
  if (bonusTypeTemp == 'не выбрано') {
    return;
  } else {
    $(stage4).fadeOut(500);

    $(inputDeviceType).val(chooseFieldTemp);
    $(inputDeviceModel).val(chooseDeviceTemp);
    $(inputBrokenType).val(brokeTypeTemp);
    $(inputBonusType).val(bonusTypeTemp);

    brokeDescription.textContent = brokeTypeTemp;

    if (bonusTypeTemp == 'Оригинальное зарядное устройство') {
      $(bonusFieldCharger).removeClass('step-5__bonus-field--inactive');
      $(bonusFieldGlass).addClass('step-5__bonus-field--inactive');
    }
    if (bonusTypeTemp == 'Защитное стекло с установкой') {
      $(bonusFieldCharger).addClass('step-5__bonus-field--inactive');
      $(bonusFieldGlass).removeClass('step-5__bonus-field--inactive');
    }

    setTimeout(function() {
      progressPercent.textContent = '80%';
      $(progressBar).animate({width: "80%"}, 100);
      $(progressPercentField).animate({left: "80%"}, 500);
      $(stage5).fadeIn(500);
      console.log('бонус: ' + bonusTypeTemp);
    }, 500);
  }
});

/* AJAX */
var frmLast = $('#form-last');

frmLast.submit(function (ev) {
    console.log('2222');
    $.ajax({
        type: frmLast.attr('method'),
        url: frmLast.attr('action'),
        data: frmLast.serialize(),
        success: function (data) {
              console.log('1111');
              $(stage5).fadeOut(500);

              setTimeout(function() {
                progressPercent.textContent = '100%';
                $(progressBar).animate({width: "100%"}, 100);
                $(progressPercentField).animate({left: "100%"}, 500);
                $(stage6).fadeIn(500);
              }, 500);
        }
    });
    ev.preventDefault();
});

var frmLite = $('#form-lite');

frmLite.submit(function (ev) {
    $.ajax({
        type: frmLite.attr('method'),
        url: frmLite.attr('action'),
        data: frmLite.serialize(),
        success: function (data) {
            alert('Заявка отправлена!');
            $(popupLite).addClass('popup-lite--inactive');
            $(popupOverlay).addClass('popup-overlay--inactive');
            $(nameFieldPopupLite).val('');
            $(telephoneFieldLite).val('');
        }
    });
    ev.preventDefault();
});
/*оживляем изменение текста в шапке "офис", "дома" и т.д.*/
var places = ['на дому', 'в кафе', 'в офисе', 'на даче', 'в институте', 'в спортзале', 'на паркинге'];
var placesCount = 0;
var placesSpan = document.getElementById('places');

var placesAnimation = setInterval(function() {
  $(placesSpan).fadeOut(500);
  placesCount++;
  setTimeout(function() {
    placesSpan.textContent = places[placesCount];
    $(placesSpan).fadeIn(500);
  }, 500);
  if (placesCount > places.length - 1) {
    placesCount = 0;
  }
}, 2000);
/* делаем счетчик заявок */
var countNumber = document.getElementById('count-number');

if (formCounter < 10) {
  countNumber.textContent = '0' + formCounter;
} else {
  countNumber.textContent = formCounter;
}