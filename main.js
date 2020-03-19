function add_image() {
            var src = "bagelboi.png";
            show_image("bagelboi.png", "bagelboi");
}

function show_image(src, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = 200;
  img.height = 200;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
}


function selectNav(className) {
	var el = document.querySelector('.' + className);
	console.log(el, el.className);
	el.scrollIntoView({
		block: "start",
		behavior: "smooth"
	});
}

var global_slideshow_index = 0;
var slideshow_pics = ["bagelboi.png", "sittingthinking.png", "pads.png", "banana.png",
 "dunkindonuts.png", "beabadoobee.jpg"]
var slideshow_pic_names = ["bagelboi", "sitting and thinking", "pads", "banana",
  "dunkin donuts", "beabadoobee"]
var slideshow_pic_descriptions = ["bagelboi is a bagel from a famous bagel shoppe in nyc that i forget the name of lol" +
" whoops. rainbow bagel with strawberry cream cheez", "sitting and thinking was made for a failed app at a sad hackathon. " +
"the app was called dosti, so thEy'Re jUsT fRieNDs", "an illustration of a pad and its wrapper that i made for a friend's " +
"gold award project. somebody call victoria bc her secret is out !!!1!12!", "an illustration of slices of banana stuck together" +
" with peanut butter, before being dipped in melted chocolate and then toasted coconut. hecka yum !", "my dunkin donuts order at the "+
"chicago airport. hot chocolate and there's a chocolate donut in the bag i swearrr", "beabadoobee my queen"]


var global_slideshow_index_ow_characters = 0;
var slideshow_pics_ow_characters = ["ow_baking.JPG", "ow_balloon.JPG", "ow_bubbles.JPG", "ow_fairy.JPG", "ow_lemon.JPG",
 "ow_lemonade.JPG", "ow_littlebobeep.JPG", "ow_pirate.JPG", "ow_piggyback.JPG", "ow_scooter.JPG" ]
var slideshow_pics_ow_characters_names = ["baking time", "flying away", "bubbles", "fantasy", "pucker up", "lemonade",
 "little bo beep", "aye aye captain", "piggyback" ,"yeetin"]
var slideshow_pics_ow_characters_descriptions = ["Olly likes to bake pies, specifically lemon meringue. Wooly devours slices of Olly's pies with cups of lemonade.",
"Olly and Wooly will fly away from all this one day. A balloon is strong enough to carry the weight of both of them to the nearest refuge.", "Wooly sneezes bubbles when he is sick." +
" It's quite odd and a little concerning, but who are we to judge?" ,"Olly likes to play dress up, and she IS a magical fairy princess on the inside! Warning: do not try to tell her otherwise lmao",
"Wooly really likes lemon in any way shape or form, so it's no surprise that he can sometimes be found sucking on a raw slice of lemon.",
"Drinking lemonade together is one of Olly and Wooly's favorite activities! It's their equivalent of going out and drinking boba tea or something.",
"Olly's halloween costume last year. She made it by hand and is super proud of the outcome!", "Wooly's halloween costume last year, despite significant efforts on Olly's part to make him dress up as a sheep."
, "Wooly, undeniably the stronger of the two, gives piggyback rides to Olly.", "Olly and Wooly are heading out to town with helmets on their heads and flowers/balloons in their hands!"]


var global_slideshow_index_ow_scenes = 0;
var slideshow_pics_ow_scenes = ["ow_airpods.JPG", "ow_alcohol.JPG", "ow_beachday.JPG", "ow_dorm.JPG", "ow_drawing.JPG",
 "ow_notebooks.JPG", "ow_workingcollege.JPG", "ow_painting.JPG"]
var slideshow_pics_ow_scenes_names = ["hippocampus", "riding taht cart", "beach day", "dormie", "doing stuff",
"deep questions", "homework", "painting bottles"]
var slideshow_pics_ow_scenes_descriptions = ["Olly and Wooly once shared airpods so they could both listen to bops by hippocampus while eating their favorite ice cream, Somisomi!",
 "Olly and Wooly like to ride their shared shopping cart, and they find it more fun doing so in the alcohol aisle smh", "Olly and Wooly went boogie boarding at the beach," +
  " with boogie boards they purchased earlier that day", "Olly went to college this fall! She decorated her dorm with all the mementos she has collected over the years, and here is the finished product!",
"Olly is often sitting at her desk with her ipad, but what is she doing? We may never know.",
"Olly and Wooly found some particularily deep life questions in some notebooks at target, so naturally they spent a long time playing Tooth or Trooth."
, "College means lots of homework! While Olly is armed with her laptop and a matcha latte to help her stay up all night, Wooly just wants to play! ",
"Olly and Wooly paint artsy things on bottles that were once filled with vanilla cream soda because that's what art club is for <3"]

var global_slideshow_index_projects = 0;
var slideshow_pics_projects = ["airlinegraphic.jpg", "hangmangraphic.jpg"]
var slideshow_pics_projects_names = ["airline reservation system", "hangman"]
var slideshow_pics_projects_descriptions = ["an airline reservation system that I coded as the final project for the CS 180 class at purdue. utilizes graphical user interfaces, file i/o, and server client processes in java",
"a simple hangman game. utilizes python turtle graphics" ]

var global_indices = {
  "art": global_slideshow_index,
  "character": global_slideshow_index_ow_characters,
  "scene": global_slideshow_index_ow_scenes,
  "project": global_slideshow_index_projects
};

// GENERAL DISPLAY SLIDESHOW
function display_slideshow(step, pics, pics_names, pics_descriptions, global_index_key, image_id, text_id, description_id) {
console.log(global_index);
    global_index = global_indices[global_index_key];
    previous_slideshow_index = global_index;
    global_index += step;
console.log(global_index);
    if (global_index < 0) {
        global_index = pics.length - 1;
    }
    if (global_index >= pics.length) {
        global_index = 0;
    }
    global_indices[global_index_key] = global_index;
    set_image(previous_slideshow_index, image_id, text_id, description_id, global_index, pics, pics_names, pics_descriptions);

}

// GENERAL BOLD BABYPIC
function bold_babypic(previous_slideshow_index, pics, global_index) {
    document.getElementById(pics[previous_slideshow_index]).setAttribute('class', 'image2');
    //console.log(global_index);
    //console.log(pics[global_index]);
    document.getElementById(pics[global_index]).setAttribute('class', 'image3');
}

// GENERAL SET IMAGE
function set_image(previous_slideshow_index, image_id, text_id, description_id, global_index, pics, pics_names, pics_descriptions) {
        document.getElementById(image_id).src = pics[global_index];
        var x = document.getElementById(text_id);
        x.innerHTML = pics_names[global_index];
        var y = document.getElementById(description_id);
        y.innerHTML = pics_descriptions[global_index];
        bold_babypic(previous_slideshow_index, pics, global_index);
}

//GENERAL SET SLIDESHOW IMAGE
function set_slideshow_image(index, global_index_key, image_id, text_id, description_id, pics, pics_names, pics_descriptions) {
    global_index = global_indices[global_index_key];
    previous_slideshow_index = global_index;
    global_indices[global_index_key] = index;
    global_index = global_indices[global_index_key];
    set_image(previous_slideshow_index, image_id, text_id, description_id, global_index, pics, pics_names, pics_descriptions);
}

//GENERAL SET UP SLIDESHOW ARROWS
function set_up_slideshow_arrows(left_arrow_button, right_arrow_button, pics, pics_names, pics_descriptions, global_index, image_id, text_id, description_id) {
    var left_arrow = document.getElementById(left_arrow_button);
    console.log(left_arrow_button);
    left_arrow.addEventListener('click', function() {
        display_slideshow(-1, pics, pics_names, pics_descriptions, global_index, image_id, text_id, description_id);
    });

    var right_arrow = document.getElementById(right_arrow_button);
    right_arrow.addEventListener('click', function() {
        display_slideshow(1, pics, pics_names, pics_descriptions, global_index, image_id, text_id, description_id);
    });
}

//GENERAL SET UP SLIDESHOW
function set_up_slideshow(big_container, pics, pics_names, pics_descriptions, row_number, left_arrow, right_arrow, global_index_key,
    image_id, text_id, description_id) {

    set_up_slideshow_arrows(left_arrow, right_arrow, pics, pics_names, pics_descriptions, global_index_key, image_id, text_id, description_id);


    document.getElementById(big_container).innerHTML = "";

    for (var i = 0; i < pics.length; i++) {
        var artgallerygeneral = document.getElementById(big_container);

        if (global_index_key == ("character")){
            little_container = 'containerartgallery_characters'
        }

        if (global_index_key == ("scene")){
            little_container = 'containerartgallery_scenes';
        }

        if (global_index_key == ("art")){
            little_container = 'containerartgallery';
        }

        if (global_index_key == ("global_slideshow_index_projects")){
            little_container == 'containerartgallery_p';
        }

        var div = document.createElement("div");
        div.setAttribute('class', little_container);
        div.setAttribute('index', i);

        var img = document.createElement("img");
        img.setAttribute('class', 'image2');
        img.src = pics[i];
        img.setAttribute('alt', pics[i]);
        img.setAttribute('id', pics[i]);
        if (global_index_key == ("art")) {
            img.setAttribute('style', 'width:70%');
        }
        if (global_index_key == ("character")) {
                    img.setAttribute('style', 'width:80%');
        }
        if (global_index_key == ("scene")) {
                    img.setAttribute('style', 'width:80%');
                }

        var link = document.createElement("a");
        link.setAttribute("href", row_number);

        link.appendChild(img);
        div.appendChild(link);
        artgallerygeneral.appendChild(div);

        div.addEventListener('click', function(event) {
        //set_slideshow_image(index, global_index_key, image_id, text_id, description_id, pics, pics_names, pics_descriptions)
            set_slideshow_image((parseInt(event.currentTarget.getAttribute("index"), 10)), global_index_key, image_id,
            text_id, description_id, pics, pics_names, pics_descriptions);
        });
    }

    set_slideshow_image(0, global_index_key, image_id,
                    text_id, description_id, pics, pics_names, pics_descriptions);
    bold_babypic(0, pics, global_indices[global_index_key]);
}

/*window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 37) {
        display_slideshow(-1);
    } if (key == 39) {
        display_slideshow(1);
    }
} */

(document.getElementById("ow_character_choice")).addEventListener('click', function(event) {

    var old_element = document.getElementById("left_arrow_ow");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element2 = document.getElementById("right_arrow_ow");
    var new_element2 = old_element2.cloneNode(true);
    old_element2.parentNode.replaceChild(new_element2, old_element2);

    global_indices["character"] = 0;
    set_up_slideshow("artgallerycharacter_ow", slideshow_pics_ow_characters, slideshow_pics_ow_characters_names, slideshow_pics_ow_characters_descriptions, "#row4",
    'left_arrow_ow', 'right_arrow_ow', "character", "main_image_ow_characters", "main_text_ow_characters", "main_description_ow_characters");
});

(document.getElementById("ow_scene_choice")).addEventListener('click', function(event) {

    var old_element = document.getElementById("left_arrow_ow");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element2 = document.getElementById("right_arrow_ow");
    var new_element2 = old_element2.cloneNode(true);
    old_element2.parentNode.replaceChild(new_element2, old_element2);

    global_indices["scene"] = 0;
    set_up_slideshow("artgallerycharacter_ow", slideshow_pics_ow_scenes, slideshow_pics_ow_scenes_names, slideshow_pics_ow_scenes_descriptions, "#row4",
    'left_arrow_ow', 'right_arrow_ow', "scene", "main_image_ow_characters", "main_text_ow_characters", "main_description_ow_characters");

});

set_up_slideshow("artgallery", slideshow_pics, slideshow_pic_names, slideshow_pic_descriptions, "#row2",
'left_arrow', 'right_arrow', "art", "main_image", "main_text", "main_description");

set_up_slideshow("artgallerycharacter_ow", slideshow_pics_ow_characters, slideshow_pics_ow_characters_names, slideshow_pics_ow_characters_descriptions, "#row4",
'left_arrow_ow', 'right_arrow_ow', "character", "main_image_ow_characters", "main_text_ow_characters", "main_description_ow_characters");

set_up_slideshow("artgallery_p", slideshow_pics_projects, slideshow_pics_projects_names, slideshow_pics_projects_descriptions, "#row5",
'left_arrow_p', 'right_arrow_p', "project", "main_image_p", "main_text_p", "main_description_p");
