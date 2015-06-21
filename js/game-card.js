jQuery(document).ready(function(){
	libCard = [
		{
			link: "tarot_02.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, necessitatibus animi sint minus quos quasi mollitia earum dolor dolores deserunt?"
		},
		{
			link: "tarot_03.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat molestias fuga libero odit facere aspernatur ad officia a dignissimos."
		},
		{
			link: "tarot_04.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur optio impedit iusto cumque adipisci voluptatibus qui reprehenderit eius vero."
		},
		{
			link: "tarot_05.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis beatae reiciendis magnam hic dignissimos explicabo. Adipisci, laudantium modi consectetur esse!"
		},
		{
			link: "tarot_06.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reiciendis debitis, accusamus nam doloremque voluptas earum asperiores optio ipsa, perferendis?"
		},
		{
			link: "tarot_07.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ut quidem asperiores culpa odit non quo nulla tempore deserunt repellat."
		},
		{
			link: "tarot_08.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odit fugit sunt? Qui aliquid et quam itaque repudiandae ab veniam."
		},
		{
			link: "tarot_09.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illum molestiae non ut necessitatibus reprehenderit iste blanditiis, tenetur est atque."
		},
		{
			link: "tarot_10.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero maxime, eum commodi sed est, magni architecto quam fuga tenetur molestiae."
		},
		{
			link: "tarot_11.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad similique beatae doloremque animi, deserunt hic minus modi magni eaque est!"
		},
		{
			link: "tarot_12.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam similique laboriosam dolore culpa natus distinctio iste, aperiam recusandae doloremque in?"
		},
		{
			link: "tarot_13.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ut maiores asperiores ad quasi itaque error, dolore nemo magni voluptatem."
		},
		{
			link: "tarot_14.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tempora enim suscipit, dolores ipsa nostrum quod nihil rem ipsum. Aperiam."
		},
		{
			link: "tarot_15.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio suscipit repudiandae quod minus laborum, labore reiciendis eum sunt sequi autem?"
		},
		{
			link: "tarot_16.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ut exercitationem explicabo doloremque officia. Laboriosam natus asperiores culpa voluptatibus a?"
		},
		{
			link: "tarot_17.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nostrum at ab aliquid necessitatibus consequatur, reiciendis quaerat dolorum vero quis."
		},
		{
			link: "tarot_18.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sed amet cum quibusdam, magni unde dolore quasi officia a consectetur."
		},
		{
			link: "tarot_19.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum in repellendus dolorem dolor tenetur suscipit impedit similique soluta magnam, odit."
		},
		{
			link: "tarot_20.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolorem consectetur dicta accusamus? Ab sequi, voluptates vitae dolorem eaque. Temporibus?"
		},
		{
			link: "tarot_21.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos, vel fugit molestias animi rem maiores cum dicta obcaecati! Incidunt."
		},
		{
			link: "tarot_22.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officia delectus quae animi, soluta dolorum! Perspiciatis autem, quasi itaque quibusdam!"
		},
		{
			link: "tarot_23.png",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aliquam tempora voluptatibus amet maiores quibusdam nulla voluptas, quis expedita."
		}
	];

	
	getPosition();

	jQuery('.left-game .top-registration p span.number').text(jQuery('.choose-card > ul li').length);

	jQuery('.list-card ul li').hover(function(){
		jQuery(this).stop(false,true).animate({
			top: "-=20px"
		},500);
	},function(){
		jQuery(this).stop(false,true).animate({
			top: "+=20px"
		},500);
	});

	jQuery('.list-card ul li').click(function(){
		if(jQuery('.choose-card ul li.choosed').length < 5){
			jQuery(this).hide('slow');
			var index = randomNumberFromRange(0,libCard.length-1);
			jQuery('.choose-card ul li').not('.choosed').first().addClass('choosed').find('img').attr('src','images/card/'+libCard[index]['link']);
			libCard.splice(index,1);
			jQuery('.left-game .top-registration p span.number').text(jQuery('.choose-card > ul li').not('.choosed').length);
			if(jQuery('.choose-card > ul li.choosed').length == 5){

				if(jQuery(window).width() > 470){
					jQuery('.choose-people').addClass('show');
					jQuery('.top-form img.img-form-right').attr('src',jQuery('.choose-people ul li:visible img').attr('src'));
				}
				else{
					jQuery('.list-card, .choose-card > ul').hide();
					jQuery('.choose-people').addClass('show');
					jQuery('a.btn-next-form').addClass('show');
				}
				clearInterval(light);
				jQuery('.top-registration > span[class^=number]').removeClass('active');
				jQuery('.top-form').show();
				jQuery('.left-game .top-registration h2').show();
				jQuery('.left-game .top-registration p').hide();
				jQuery('.choose-people span.name-people').text(jQuery('.choose-people ul li:visible img').attr('alt'));
			}
		}
	});
	i = 0;
	light = setInterval(function(){
		if(i < 5){
			jQuery('.top-registration > span[class^=number]').eq(i).addClass('active')
			jQuery('.top-registration > span[class^=number]').eq(i).siblings().removeClass('active');
			i++;
		}
		else{
			i = 0;
		}
	},400);

	jQuery('.choose-people a.btn-prev').click(function(even){
		if(jQuery('.choose-people ul li:visible').prev().length != 0){
			even.preventDefault();
			jQuery('.choose-people ul li:visible').hide().prev().show();
			jQuery('.choose-people span.name-people').text(jQuery('.choose-people ul li:visible img').attr('alt'));
			jQuery('.top-form img.img-form-right').attr('src',jQuery('.choose-people ul li:visible img').attr('src'));
		}
	});
	jQuery('.choose-people a.btn-next').click(function(even){
		if(jQuery('.choose-people ul li:visible').next().length != 0){
			even.preventDefault();
			jQuery('.choose-people ul li:visible').hide().next().show();
			jQuery('.choose-people span.name-people').text(jQuery('.choose-people ul li:visible img').attr('alt'));
			jQuery('.top-form img.img-form-right').attr('src',jQuery('.choose-people ul li:visible img').attr('src'));
		}
	});

	jQuery('a.btn-next-form').click(function(even){
		even.preventDefault();
		jQuery('.left-game').hide();
		jQuery('.right-game').show();
	});

	jQuery('a.btn-prev-choose').click(function(even){
		even.preventDefault();
		jQuery('.left-game').show();
		jQuery('.right-game').hide();
	});
});

jQuery(window).resize(function(){
	getPosition();
});

var WIDTH, HEIGHT, canvas, con, g;
var pxs = [];
var rint = 50;
$(document).ready(function() {
    var windowSize = function() {
        WIDTH = $(window).width();
        HEIGHT = $(window).height();
        canvas = $('#galaxy');
        canvas.attr('width', WIDTH).attr('height', HEIGHT);
    };
    windowSize();
    $(window).resize(function() {
        windowSize();
    });
    con = canvas[0].getContext('2d');
    for (var i = 0; i < 100; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
    }
    requestAnimationFrame(draw);
});

function draw() {
    con.clearRect(0, 0, WIDTH, HEIGHT);
    con.globalCompositeOperation = "lighter";
    for (var i = 0; i < pxs.length; i++) {
        pxs[i].fade();
        pxs[i].move();
        pxs[i].draw();
    }
    requestAnimationFrame(draw);
}

function Circle() {
    this.s = {
        ttl: 15000,
        xmax: 5,
        ymax: 2,
        rmax: 7,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 4,
        ydrift: 4,
        random: true,
        blink: true
    };
    this.reset = function() {
        this.x = (this.s.random ? WIDTH * Math.random() : this.s.xdef);
        this.y = (this.s.random ? HEIGHT * Math.random() : this.s.ydef);
        this.r = ((this.s.rmax - 1) * Math.random()) + 1;
        this.dx = (Math.random() * this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
        this.dy = (Math.random() * this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    };
    this.fade = function() {
        this.rt += this.s.rt;
    };
    this.draw = function() {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl) this.reset();
        var newo = 1 - (this.rt / this.hl);
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var cr = this.r * newo;
        g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        g.addColorStop(0.0, 'rgba(193,254,254,' + newo + ')');
        g.addColorStop(this.stop, 'rgba(193,254,254,' + (newo * 0.2) + ')');
        g.addColorStop(1.0, 'rgba(193,254,254,0)');
        con.fillStyle = g;
        con.fill();
    };
    this.move = function() {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) this.dx *= -1;
        if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
    };
    this.getX = function() {
        return this.x;
    };
    this.getY = function() {
        return this.y;
    };
};
var prevNum;
var randomNumber = 1;
function randomNumberFromRange(min,max){
	randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	if(prevNum != randomNumber){
    	return prevNum = randomNumber;
	}
	else{
		return randomNumberFromRange(min,max);
	}
}

function getPosition(){
	if(jQuery(window).width() > 470){
		jQuery('.list-card ul li').each(function(){
			var _w = jQuery('.list-card ul').width();
			var _wItem = jQuery('.list-card ul li').width();
			var count = jQuery('.list-card ul li').size();
			jQuery('.list-card ul li').each(function(i){
				jQuery(this).css({
					'left':(_w - _wItem)/count *i,
					'top' : randomNumberFromRange(0,2) * 10
				});
			});
		});
	} else{
		jQuery('.list-card ul li').each(function(i){
			var _w = jQuery('.list-card ul').width();
			var _wItem = jQuery('.list-card ul li').width();
			var count = jQuery('.list-card ul li').size();
			var _left = (_w -(_wItem + (8*((_w - _wItem)/13))))/2;
			jQuery('.list-card ul li').each(function(i){
				if(i<13){
					jQuery(this).css({
						'left':(_w - _wItem)/13 *i,
						'top' : randomNumberFromRange(0,2) * 10
					});
				}
				else{
					jQuery(this).css({
						'left': _left + (_w - _wItem)/13 *(i-13),
						'top' : randomNumberFromRange(0,2) * 10 + 50
					});
				}
			});
			
		});
	}
}