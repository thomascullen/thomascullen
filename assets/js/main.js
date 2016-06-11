var project_cards = document.querySelectorAll('.project_card a')
const maxRotation = 15;
const main_image_width = $('.main_image').width();

$('.nav_toggle').click(function() {
  $('body').toggleClass("nav_open");
});

if ( $(window).width() > 800 ) {
  $('body').on('mousemove', '.project_card a', function(e) {
    const x = e.pageX - (this.offsetLeft + main_image_width);
    const y = e.pageY - this.offsetTop;

    var xChange = calculateChange(x, this.clientWidth);
    var yChange = calculateChange(y, this.clientHeight);

    var xRotation = yChange * maxRotation + "deg";
    var yRotation = xChange * maxRotation * -1 + "deg";

    $(this).velocity({
      scale: 1.1,
      queueu: false,
      rotateY: yRotation,
      rotateX: xRotation,
    }, {
      duration: 1,
      queue: false,
    });
  });

  $('body').on('mouseout', '.project_card a', function(e) {
    $(this).velocity({
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    }, {
      queue: false,
      duration: 100,
    });
  });
}

function calculateChange(offset, dimension) {
  return ((-2 / dimension) * offset) + 1;
}


// $(function() {
//   const navigation = $('nav a[data-transition]');
//   navigation.click(function() {
//     navigation.removeClass('current');
//     $(this).addClass("current");
//   });
//
//   const ghostDOM = document.createElement('html');
//   const view = document.querySelector('.view');
//   currentContent = document.querySelector('.content');
//
//   $('body').on('click', 'a[data-transition]', function(e) {
//     e.preventDefault();
//     const url = $(this).attr('href');
//     const title = $(this).data('transition');
//
//     $.get(url, function(response) {
//       ghostDOM.innerHTML = response;
//       var content = ghostDOM.querySelector('.content');
//       window.history.pushState(title, "", url);
//
//       content.classList.add('content--next')
//       view.appendChild(content);
//       currentContent.classList.add("content--dismiss");
//       currentContent = content;
//       setTimeout(function() {
//         currentContent.classList.remove('content--next');
//       }, 100);
//     });
//   });
// });
