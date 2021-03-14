$(document).ready(function(){
$("#square_list").empty();
// 將預覽圖A11~A18新增到#square_list元素
for (var i = 11; i <= 18; i++) {
    $("#square_list").append
        (
            "<div><img id='A" + i + "' src='Images/A" + i + ".png'></div>"
        );
    $("#A" + i).on("click", { num: i }, fnChange);
 }    
})
function fnChange(event) {
  var filename = "Images/A" + event.data.num + ".png"
  console.log(event.data);
  console.log(event.data.num);

  // 顯示圖片
  $("#section2_img").attr("src", filename);
  document.getElementById("A"+ event.data.num).style.border = "1px solid rgb(192, 32, 32)";
  // 呈現淡出動畫
  $("#section2_img").hide().fadeIn(1000);
}

