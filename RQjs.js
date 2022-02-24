let quotes = [
   {
     "qu": "Expect nothing from no one",
     "au": "bukason"
   },
   {
     "qu": "Do not be naive",
     "au": "Ebuka"
   },
    {
     "qu": "You can only depend on God and yourself",
     "au": "professor"
   },
    {
     "qu": "Never give up",
     "au": "Nzeanoieh"
   },
    {
     "qu": "Money is a defence",
     "au": "Chukwuebuka"
   },
    {
     "qu": "Be good to people, because no one knows tommorrow",
     "au": "Nze"
   }
 ];
 let rand=Math.floor(Math.random() * 6);

/*$( "#new-quote" ).on('click',function() {
 $("#text").html(quotes[rand]["qu"])
$("#author").html(quotes[rand]["au"])
});*/
let btn = document.getElementsByTagName("button");
  btn[0].onclick = function(){
    $("#text").html(quotes[rand]["qu"])
$("#author").html(quotes[rand]["au"])
    rand =Math.floor(Math.random()*6);
    
}
