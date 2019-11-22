//Limit a single text
function limitText(text , limit , t=-1 ){
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
  let targetAux = $("#"+target) ;
  let targetText = targetAux.find(".targetText");
  let text = $(targetText).text();
  let textLimited = limitText(text,limit );
  targetAux.find(".textOptions").html( " ... <span id='|customMore|-"+target+"' class='clMore'>Veja mais</span><span id='|customLess|-"+target+"' class='clLess'>Ver menos</span>");
  targetText.html(textLimited);
}
$(document).ready(function(){
  let limit = 100; //INSERT DEFAULT LIMIT HERE
  let texts = $(".limitedText");
  let target = $(".targetText");
  let textsComplete = [];
 // let CtextsComplete = [];
  let n = $(".limitedText").length;
  let nc = $(".limitedTextCustom").length;
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
  });
   
  //Custom Limits
   for( k = 0 ; k < nc ; k++){ 
  let target = $(".limitedTextCustom").eq(k);
  let id = target.attr("id");
  let limit = target.attr("ltxt");
  console.log(id + limit);
  customLimit(id , limit);
  } 
  //Show more/less - Custom limits
  $(".clMore").click(function(){
  alert($(this).attr("id"));   
  });
   
})
 