function chairCalc() {
   var dropDownLi = document.querySelectorAll('.drop_down_list');
   var transport = document.querySelector('#transport');
   console.log(transport);

   function hideLists() {
     for (var i = 0; i < dropDownLi.length; i++) {
       dropDownLi[i].querySelector('.list_panel').style.display = 'none';
     }
   }

   // 2. Rozwijanie list. Pola wyboru znikają po ponownym kliknięciu w strzałkę.
   function showAndHide() {
     var showListPanel = this.parentElement.querySelector('.list_panel');

     if (showListPanel.style.display == 'block') {
       showListPanel.style.display = 'none';
     } else {
       showListPanel.style.display = 'block';
     }
   }

   // 2.Dodaję event by po kliknięciu w strzałkę rozwijał się dropdown.
  for (var i = 0; i < dropDownLi.length; i++) {
    dropDownLi[i].querySelector('.list_arrow').addEventListener('click', showAndHide);
  }

  var listPanelLi = document.querySelectorAll('.list_panel li');
  // Dodaje eventy: do opcji wyboru i do podsumowania(ceny)
  for (var i = 0; i < listPanelLi.length; i++) {
    listPanelLi[i].addEventListener('click', choice);
    listPanelLi[i].addEventListener('click', summary);
  }

  function choice() {
    var showListPanel = this.parentElement.querySelector('.list_panel');

  }

}
document.addEventListener('DOMContentLoaded', chairCalc);
