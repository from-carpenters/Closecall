//Getting JSON data and dynamically importing them into the web page#

//Observation page

$(document).ready(function(){
    

    var obs = '';

    $.ajax({
        type: "GET",
        url: "/json/observations.json",
        dataType: "json",
        success: function(data) {
            obs = data;
            let sliderImgs;
            //console.log(obs);
            obs.observations.forEach((o, i) => {
                $('.btm_slider').on("click", '#obs'+ i, (e) => {
                    $('#date').html(o.date);
                    $('#status').html(o.status);
                    $('#reported_by').html(o.observer_name);
                    $('#type').html(o.observation_type);
                    $('#project').html(o.project);
                    $('#observation_details').html(o.observation_details);
                    $('#action_taken').html(o.action_taken);
                    sliderImgs = "";
                    o.images.forEach((img) => {
                        sliderImgs += '<div class="carousel-cell"><img src="' + img + '" alt=""></div>';
                    });
                    $('.top_slider').remove();
                    $('.main-content').prepend('<div class="top_slider">'+ sliderImgs +'</div>');
                    initSlider();
                    $('.btm_slider .box').removeClass('active');
                    $(e.target).parent().addClass('active');
                    $('.radio-icon div').hide();
                    $('#'+ (o.observation_type).toLowerCase() +'-label').show();

                });        
            });            
            //console.log(obs.observation.length);
            let random_obs = Math.floor(Math.random() * obs.observations.length);
            $('#obs'+ random_obs).trigger('click');


             //DataTable initialisation

            $('#observation_table').DataTable({
                data: obs.observations,
                columns: [
                    { 
                        data: null,
                        defaultContent: ''
                    },
                    { data: 'observer_name' },
                    { data: 'date' },
                    { data: 'status' },
                    { data: 'project' },
                    { data: 'location' },
                    { data: 'contractor_involved' },
                    { data: 'company' },
                    { data: 'observation_type' },
                    { data: 'observation_category' },
                    { data: 'injury_prevented' },
                    { data: 'non_injury_prevented' }
                ]
            });
        }
    });    



});



//Incidents page

$(document).ready(function(){
    

    var inc = '';

    $.ajax({
        type: "GET",
        url: "/json/incidents.json",
        dataType: "json",
        success: function(data) {
            inc = data;
            let sliderImgs;
            //console.log(obs);
            inc.incidents.forEach((a, i) => {
                $('.btm_slider').on("click", '#inc' + i, (e) => {
                    $('#date').html(a.date);
                    $('#project').html(a.project);
                    $('#location').html(a.location);
                    $('#group').html(a.group);
                    $('#what_was_the_individual_doing').html(a.what_was_the_individual_doing);
                    $('#how_was_the_individual_injured').html(a.how_was_the_individual_injured);
                    $('#what_was_the_cause_of_the_accident').html(a.what_was_the_cause_of_the_accident);
                    $('#what_was_the_extent_of_injury').html(a.what_was_the_extent_of_injury);
                    sliderImgs = "";
                    a.images.forEach((img) => {
                        sliderImgs += '<div class="carousel-cell"><img src="' + img + '" alt=""></div>';
                    });
                    $('.top_slider').remove();
                    $('.main-content').prepend('<div class="top_slider">'+ sliderImgs +'</div>');
                    initSlider();
                    $('.btm_slider .box').removeClass('active');
                    $(e.target).parent().addClass('active');
                                        
                });        
            });

            //console.log(obs.observation.length);
            let random_inc = Math.floor(Math.random() * inc.incidents.length);
            $('#inc'+ random_inc).trigger('click');


             //DataTable initialisation

            $('#incidents_table').DataTable({
                data: inc.incidents,
                columns: [
                    { 
                        data: null,
                        defaultContent: ''
                    },
                    { data: 'date' },
                    { data: 'project' },
                    { data: 'location' },
                    { data: 'group' },
                    { data: 'person_involved' },
                    { data: 'contractor_involved' },
                    { data: 'reported_by' },
                    { data: 'company' }
                ]
            });
        }
    });    



});

