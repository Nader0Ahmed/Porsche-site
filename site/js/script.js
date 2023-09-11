// function extent_region_1() {
//     document.getElementById("region-extend-1").style.display = "block";
// }
// function extent_region_2() {
//     document.getElementById("region-extend-2").style.display = "block";
// }
// .closest('')
//var target = e.target || e.srcElement; //target element of click

const selected_offcanvas_bodies= document.querySelectorAll('[id*="offcanvas-body-"]');
const selected_cars_offcanvas_bodies= document.querySelectorAll('[id*="cars-offcanvas-body-"]');
const selected_cars_menu = document.querySelectorAll('[id*="cars-menu"]');
const selected_main_menu = document.querySelectorAll('[id*="main-menu"]');
const menu_items_array = document.querySelectorAll('#menuItems');
const menu_moves = document.querySelectorAll('[id*="news-"]');
const jumbotron_dots = document.querySelectorAll('.dot');
const porsche_choices = document.querySelectorAll('[id*="porsche-choice-"]');
const select_region_buttons = document.querySelectorAll('[id*="footer-button"]');

function reset_menu() {
    for (let i = 0; i < selected_cars_menu.length; i++){
        selected_cars_menu[i].style.display = "none";
    }
    for (let i = 0; i < selected_main_menu.length; i++){
        selected_main_menu[i].style.display = "block";
    }  
    for (let i = 0; i < selected_offcanvas_bodies.length; i++){
        selected_offcanvas_bodies[i].style.display = "none";
    }  
    selected_offcanvas_bodies[0].style.display = "block";
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(menu_items_array[0]).addClass('selected');    
}
function show_models(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
	for (let i = 0; i < selected_offcanvas_bodies.length; i++){
		if (i == 0) {
            selected_offcanvas_bodies[i].style.display = "block";
		}
        else {
            selected_offcanvas_bodies[i].style.display = "none";
        }
	}
    // document.querySelector("#offcanvas-body-1").style.display = "block";
    // document.querySelector("#offcanvas-body-2").style.display = "none";
    // document.querySelector("#offcanvas-body-3").style.display = "none";
    // document.querySelector("#offcanvas-body-4").style.display = "none";
    // document.querySelector("#offcanvas-body-5").style.display = "none";
}
function show_vehicle_purchase(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_offcanvas_bodies.length; i++){
        if (i == 1) {
            selected_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_services(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_offcanvas_bodies.length; i++){
        if (i == 2) {
            selected_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_experience(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_offcanvas_bodies.length; i++){
        if (i == 3) {
            selected_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_find_a_dealer(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_offcanvas_bodies.length; i++){
        if (i == 4) {
            selected_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_718(caller){
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 0) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_911(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 1) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_taycan(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 2) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_panamera(caller) {
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 3) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_macan(caller){
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 4) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function show_cayenne(caller){
    for(let i = 0; i < menu_items_array.length; i++){
        $(menu_items_array[i]).removeClass('selected');
    }
    $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_offcanvas_bodies.length; i++){
        if (i == 5) {
            selected_cars_offcanvas_bodies[i].style.display = "block";
        }
        else {
            selected_cars_offcanvas_bodies[i].style.display = "none";
        }
    }
}
function back_to_menu(){
    for (let i = 0; i < selected_cars_menu.length; i++){
        selected_cars_menu[i].style.display = "none";
    }
    for (let i = 0; i < selected_main_menu.length; i++){
        selected_main_menu[i].style.display = "block";
    }    
}
function back_from_menu(caller){
    // for(let i = 0; i < menu_items_array.length; i++){
    //     $(menu_items_array[i]).removeClass('selected');
    // }
    // $(caller.closest('#menuItems')).addClass('selected');
    for (let i = 0; i < selected_cars_menu.length; i++){
        selected_cars_menu[i].style.display = "block";
    }
    for (let i = 0; i < selected_main_menu.length; i++){
        selected_main_menu[i].style.display = "none";
    } 
}

current_new = 0
function menu_move_right(){
    for (let i = 0; i < menu_moves.length; i++){
        menu_moves[i].style.display = "none";
    }
    if(current_new == 4){
        current_new = 0;
        menu_moves[current_new].style.display = "flex";        
    }
    else{
        current_new += 1;
        menu_moves[current_new].style.display = "flex";        
    }
    for (let t = 0; t < 5; t++) {
        $(jumbotron_dots[t]).removeClass('selected-dot');
    }
    $(jumbotron_dots[current_new]).addClass('selected-dot');
}
function menu_move_left(){
    for (let i = 0; i < menu_moves.length; i++){
        menu_moves[i].style.display = "none";
    }
    if(current_new == 0){
        current_new = 4;
        menu_moves[current_new].style.display = "flex";        
    }
    else{
        current_new -= 1;
        menu_moves[current_new].style.display = "flex";        
    }
    for (let t = 0; t < 5; t++) {
        $(jumbotron_dots[t]).removeClass('selected-dot');
    }
    $(jumbotron_dots[current_new]).addClass('selected-dot');
}
function go_to_new(num, caller) {
    for (let i = 0; i < menu_moves.length; i++){
        menu_moves[i].style.display = "none";
    }
    menu_moves[num].style.display = "flex";
    current_new = num;
    for (let t = 0; t < 5; t++) {
        $(jumbotron_dots[t]).removeClass('selected-dot');
    }
    $(caller).addClass('selected-dot');
}

var current_porsche_select = 0;
function pick_a_choice(num, caller){
    current_porsche_select = num;
    for (let i = 0; i < porsche_choices.length; i++) {
        porsche_choices[i].style.setProperty("display", "none");
        $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
    }   
    if ($(window).width() >= 977) {
        for (var i = current_porsche_select; i < current_porsche_select+3; i++) {
            porsche_choices[i].style.setProperty("display", "flex");
        }
    }
    else if ($(window).width() < 977 && $(window).width() > 560){
        for (var i = current_porsche_select; i < current_porsche_select+2; i++) {
            porsche_choices[i].style.setProperty("display", "flex");
        }
    }
    else if($(window).width() <= 560){
        porsche_choices[current_porsche_select].style.setProperty("display", "flex");
    }

    $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
    $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
    for (let t = 5; t < 11; t++) {
        $(jumbotron_dots[t]).removeClass('selected-dot');
    }
    $(caller).addClass('selected-dot');
}
function choices_move_right(caller) {
    if ($(window).width() >= 977) {
        if(current_porsche_select < 3){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select += 1;
            for (var i = current_porsche_select; i < current_porsche_select+3; i++) {
                porsche_choices[i].style.setProperty("display", "flex");
            }
            // porsche_choices[current_porsche_select].style.setProperty("display", "flex", "important");
            $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
            $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }         
    }
    else if ($(window).width() < 977 && $(window).width() > 560){
        if(current_porsche_select < 4){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select += 1;
            for (var i = current_porsche_select; i < current_porsche_select+2; i++) {
                porsche_choices[i].style.setProperty("display", "flex");
            }
            // porsche_choices[current_porsche_select].style.setProperty("display", "flex", "important");
            $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
            $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }     
    }
    else if($(window).width() <= 560){
        if(current_porsche_select < 5){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select += 1;
            porsche_choices[current_porsche_select].style.setProperty("display", "flex");
            // $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-block');
            // $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-block d-xl-block');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }          
    }
}
function choices_move_left() {
    if ($(window).width() >= 977) {
        if(current_porsche_select > 0){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select -= 1;
            for (var i = current_porsche_select; i < current_porsche_select+3; i++) {
                porsche_choices[i].style.setProperty("display", "flex");
            }
            // porsche_choices[current_porsche_select].style.setProperty("display", "flex", "important");
            $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
            $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }   
    }
    else if ($(window).width() < 977 && $(window).width() > 560){
        if(current_porsche_select > 0){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select -= 1;
            for (var i = current_porsche_select; i < current_porsche_select+2; i++) {
                porsche_choices[i].style.setProperty("display", "flex");
            }
            // porsche_choices[current_porsche_select].style.setProperty("display", "flex", "important");
            $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
            $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }          
    }
    else if($(window).width() <= 560){
        if(current_porsche_select > 0){
            for (let i = 0; i < porsche_choices.length; i++) {
                porsche_choices[i].style.setProperty("display", "none");
                $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
            }          
            current_porsche_select -= 1;
            porsche_choices[current_porsche_select].style.setProperty("display", "flex");
            // $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-block');
            // $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-block d-xl-block');
            for (let t = 5; t < 11; t++) {
                $(jumbotron_dots[t]).removeClass('selected-dot');
            }
            $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
        }          
    }
}

var nothing_selected = true;
function select_a_region(caller){
    nothing_selected = false;
    select_region_buttons[0].querySelector('.ft-sign').textContent = caller.textContent;
    if (!nothing_selected){
        $(select_region_buttons[1]).removeClass('unclickable-button');
        if(caller.textContent == "North America"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)" style="height:30%">Canada (English)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)" style="height:30%">Canada (French)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)" style="height:30%">USA</p>';
        }
        else if (caller.textContent == "Latin America"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Mexico</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Argentina</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Bolivia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Brazil</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Chile</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Colombia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Costa Rica</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Dominican Republic</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Ecuador</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">El Salvador</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Guadeloupe</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Guatemala</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Haiti</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Honduras</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Jamaica</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Panama</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Paraguay</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Peru</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Puerto Rico</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Trinidad & Tobago</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Uruguay</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Other countries</p>';
        }
        else if (caller.textContent == "Europe"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Austria</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Belarus</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Belgium</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Bosnia and Herzegovina</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Bulgaria</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Croatia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Cyprus</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Czech Republic</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Denmark</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Estonia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Finland</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">France</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Georgia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Germany</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Britain</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Greece</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Hungary</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Iceland</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Ireland</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Italy</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Lithuania</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Latvia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Luxemburg</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Macedonia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Malta</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Moldova</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Netherlands</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Norway</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Poland</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Portugal</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Romania</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Serbia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Slovakia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Slovenia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Spain</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Sweden</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Switzerland (German)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Switzerland (French)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Switzerland (Italian)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Ukraine</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Other countries</p>';
        }
        else if (caller.textContent == "Middle East"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Abu Dhabi</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Bahrain</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Dubai</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Fujairah</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Jordan</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Kuwait</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Lebanon</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Oman</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Qatar</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Saudi Arabia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Sharjah</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Middle East (English)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Middle East (French)</p>';
        }
        else if (caller.textContent == "Africa"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Egypt</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Ghana</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">La Reunion</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Morocco</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Mauritius</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">South Africa</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Tunisia</p>';
        }
        else if (caller.textContent == "Asia"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Armenia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Azerbaijan</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Turkey</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">India</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Brunei</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Indonesia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Malaysia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Mongolia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Philippines</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Singapore</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Sri Lanka</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Thailand</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Vietnam</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">China Mainland (Chinese)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">China Mainland (English)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Hong-Kong & Macau</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Japan</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">KazaKhstan</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">South Korea</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Taiwan (Chinese)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Taiwan (English)</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Other countries/regions</p>';
        }   
        else if (caller.textContent == "Australia/Oceania"){
            select_region_buttons[1].querySelector('.region-extend').innerHTML = '<p class="region-chioce" onclick="select_a_country_or_region(this)">Australia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">French Polynesia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">New Caledonia</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">New Zealand</p> <p class="region-chioce" onclick="select_a_country_or_region(this)">Other countries</p>';
        }             
    }
}
function select_a_country_or_region(caller){
    select_region_buttons[1].querySelector('.ft-sign').textContent = caller.textContent;
}
function go_to_top(argument) {
    argument.style.scrollBehavior = "smooth";
    argument.scrollTo(0, 0);
}

// window.addEventListener("resize", function(event) {
//     console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
// })
once = false;
$(window).resize(function() {
    if(current_porsche_select > 3 && $(window).width() >= 977){
        current_porsche_select = 3;
        for (let i = 0; i < porsche_choices.length; i++) {
            porsche_choices[i].style.setProperty("display", "none");
            $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
        }          
        for (var i = current_porsche_select; i < current_porsche_select+3; i++) {
            porsche_choices[i].style.setProperty("display", "flex");
        }
        $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
        $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
        for (let t = 5; t < 11; t++) {
            $(jumbotron_dots[t]).removeClass('selected-dot');
        }
        $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
    }
    if(current_porsche_select > 4 && $(window).width() < 977 && $(window).width() > 560){
        current_porsche_select = 4;
        for (let i = 0; i < porsche_choices.length; i++) {
            porsche_choices[i].style.setProperty("display", "none");
            $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
        }          
        for (var i = current_porsche_select; i < current_porsche_select+2; i++) {
            porsche_choices[i].style.setProperty("display", "flex");
        }
        $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
        for (let t = 5; t < 11; t++) {
            $(jumbotron_dots[t]).removeClass('selected-dot');
        }
        $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
    }  
    if ($(window).width() < 977 && $(window).width() > 560 && !once){
        once = true;
        for (let i = 0; i < porsche_choices.length; i++) {
            porsche_choices[i].style.setProperty("display", "none");
            $(porsche_choices[i]).removeClass('d-none d-sm-flex d-lg-flex d-xl-flex');
        }          
        for (var i = current_porsche_select; i < current_porsche_select+2; i++) {
            porsche_choices[i].style.setProperty("display", "flex");
        }
        $(porsche_choices[current_porsche_select+1]).addClass('d-none d-sm-flex');
        $(porsche_choices[current_porsche_select+2]).addClass('d-none d-lg-flex d-xl-flex');
        for (let t = 5; t < 11; t++) {
            $(jumbotron_dots[t]).removeClass('selected-dot');
        }
        $(jumbotron_dots[current_porsche_select+5]).addClass('selected-dot');
    }
    if($(window).width() >= 977 || $(window).width() <= 560){
        once = false;
    }
});