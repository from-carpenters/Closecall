//Menu Navbar rotation script

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
});




//Graph showing statistic regarding events

var indexChart = document.getElementById('indexChart').getContext('2d');

var eventRaised = new Chart(indexChart, {
    type: 'bar', // bar, horizontal bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Observations',
            backgroundColor: 'rgba(62, 238, 182, 0.81)',
            data: [30, 25, 20, 32, 21],
        }, {
            label: 'Incidents',
            backgroundColor: 'rgba(238, 62, 118, 0.81)',
            data: [10, 5, 15, 19, 20],
        }]

    },
    options: {
        responsive: true,
        maintainAspectRatio: false

    }
});


//Flickity srcipt initialisation

let initSlider = () => {
    $('.top_slider').flickity({
      fullscreen: true,
      wrapAround: true,
      imagesLoaded: true
    });
  }
  

//Light slider srcipt initialisation

   $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        item: 5,
        slideMove: 1, // slidemove will be 1 if loop is true
        // slideMargin: 0,
        controls: false,
        loop:true,
        enableTouch:true,
        enableDrag:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


