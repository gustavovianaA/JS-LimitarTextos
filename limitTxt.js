//Limit a single text
function limitText(text , limit , t=-1){
  let size = text.length;
  if(limit >= size)
    return text;
  let append = '';
  if(t != -1){
    $(".textOptions").eq(t).html( "<span id='showLimited"+t+"'  class='lMore'><span class='lMoreDots'> ... </span>Ver mais</span><span id='showFull"+t+"' class='lLess'>Ver menos</span>");
  }
  let newText = '';
  for(i = 0 ; i <= limit ; i++){
    newText += text[i];
  }
  return newText;
}
//Limit a text with custom limit size
function customLimit(target,limit){
  //todo
  let targetAux = $("#"+target);
  let targetText = targetAux.find(".targetText");
  let text = $(targetText).text();
  let textLimited = limitText(text,limit);
  targetAux.find(".textOptions").html( " ... <a id='|customMore|-"+target+"' href='#' class='lMore'>Veja mais</a><div id='|customLess|-"+target+"' class='lLess'>Ver menos</div>");
  //alert($(targetAux).find(".textOptions").text());
  targetAux.html(textLimited);
}
$(document).ready(function(){
  let limit = 100;
  let texts = $(".limitedText");
  let target = $(".targetText");
  let textsComplete = [];
  let n = $(".limitedText").length;
  let textLimited = [];
  //Limit all texts .targetText
  for( k = 0 ; k < n ; k++ ){
    textsComplete[k] = texts.eq(k).text();  
    let text = texts.eq(k).text();
    textLimited[k] = limitText(text, limit , k);
    target.eq(k).html(textLimited[k]);
  }
  //Show more/less
  $(".lMore").click(function(){
    let target = $(this).attr('id');
    target = target.replace("showLimited",'');
    $(".targetText").eq(target).html(textsComplete[target]);
    $(".lLess").eq(target).show();
    $(".lMore").eq(target).hide();
  });
  $(".lLess").click(function(){
    let target = $(this).attr('id');
    target = target.replace("showFull","");
    if(this)
    $(".targetText").eq(target).html(textLimited[target]);
    $(".lLess").eq(target).hide();
    $(".lMore").eq(target).show();
  })
  //Custom Limits
  customLimit("customLimit1" , 20);
})