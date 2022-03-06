let quotes = [
   {
     "qu": "To him who much is giving, much is expected",
     "au": "bukason"
   },
   {
     "qu": "Love is the solution to the world problams",
     "au": "Ebuka"
   },
    {
     "qu": "Hard work pays",
     "au": "Ebuka"
   },
    {
     "qu": "Never give up",
     "au": "Nzeanoieh"
   },
    {
     "qu": "If you do good to others, it will come back to you in unexpected ways",
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
