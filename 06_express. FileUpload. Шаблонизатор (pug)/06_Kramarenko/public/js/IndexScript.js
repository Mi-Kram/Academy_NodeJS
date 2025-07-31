//const { fork } = require("child_process");
//const { format } = require("path/posix");

function OnImageButtonClick(img){
  var btn = $(event.target);
  if(btn.prop('tagName').toLowerCase() != 'button') btn = btn.closest('button');
  btn.blur();
  window.location = `/DetailImage?id=${encodeURI(img)}`
}

function OnImageAddButtonClick(){
  event.target.blur();
  $('#FileChooser').click();
}

function OnFilesChanged(){
  if(event.target.files.length > 0){

    var data = new FormData();
    for (let i = 0; i < event.target.files.length; i++) {
       data.append('files', event.target.files[i]);
    }

    $.ajax({
        url: '/SendFile',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST',
        success: function(data){
            console.log(data);
            $('.ImageButton:not(.Add)').remove();

            if(data){
              $('.MainContent').prepend(data.map(img => `
<button class="ImageButton" onclick="OnImageButtonClick('${img}')">
  <img src="${img}" alt="image">
</button>
`).join('\n'));

            }
        },
        error: function(err){
          console.error(err);
        }
    });

    event.target.value = '';
  }
}
