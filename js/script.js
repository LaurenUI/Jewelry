// $(document).ready(function(){
//   $('.menu1').hover(function(){
// $('.menu_hide').css('display','block');
//   }, function(){
//     $('.menu_hide').css('display','none');
//   });
// });


$(document).ready(function(){
  // document.getElementById("menu1").onmouseenter = function() {mouseEnter()};
  // document.getElementById("menu1").onmouseleave = function() {mouseLeave()};
  
  // function mouseEnter() {
  //   document.getElementById("menu_hide").style.display = "block";
  // };
//   function mouseLeave() {
//     document.getElementById("menu_hide").style.display = "none";
//   }

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

