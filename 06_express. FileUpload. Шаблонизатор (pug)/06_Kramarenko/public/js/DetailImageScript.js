function OnBackButtonClick(){
  event.target.blur();
  window.location = '/';
}

function OnDeleteButtonClick(img){
  event.target.blur();
  if(img && confirm("Удалить файл?")){
    window.location = `/DeleteImage?id=${encodeURI(img)}`
  }
}