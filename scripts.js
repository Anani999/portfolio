// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Message sent!');
//   });


 // set the speed of the animation
 const speed = 1000; // change this value as per your requirement

 // animate the left property of each child div
 const childDivs = document.querySelectorAll('.child');
 childDivs.forEach(div => {
   div.style.left = `${Math.random() * 100}px`; // randomize the x-position of 
   div.animate({ 'left': `-${speed}px` }, speed); // animate the left property 
 });


 const projects = document.querySelectorAll('.project');

//  projects.forEach(div => {
//    div.onclick = navigate;
//  });
 
//  function navigate() {
//    window.location.href = 'pages/product1.html';
//  }
 

 function goTo(file) {
  window.location.href = 'pages/'+file;
 }