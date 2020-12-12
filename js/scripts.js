// # Site for -SM_TECHNOLOGY-
// smtechnologyofficialcontact@gmail.com
// # Authors of the project:
// 1-MachnevEgor_https://vk.com/machnev_egor
// 2-NasekinEvgeniy_https://vk.com/nasek1n
// 3-DmitryShalimov_https://vk.com/lookatstat
// # Contacts in email:
// 1-meb.official.com@gmail.com
// 2-nasekinwhiteorblack@gmail.com
// 3-dmitriy-shalimov@yandex.ru

// creating stars space
window.onload = function(){
		var canvas = document.createElement("canvas"),
			c = canvas.getContext("2d"),
			particles = {},
			particleIndex = 0,
			particleNum = 4;
		canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		canvas.id = "motion";
		document.body.appendChild(canvas);
		c.fillStyle = "black";		c.fillRect(0,0,canvas.width,canvas.height);
		function Particle(){
			var random_x = Math.floor(Math.random() * (canvas.width - 1 + 1)) + 1;
			var random_y = Math.floor(Math.random() * (canvas.height - 1 + 1)) + 1;
			this.x = random_x;
			this.y = random_y;
			this.vx = 0;
			this.vy = 0;
			this.gravity = 0;
			particleIndex++;
			particles[particleIndex] = this;
			this.id = particleIndex;
			this.life = 0;
        this.size = Math.random() * 6 - 2;
			this.maxlife = Math.random() * 80 + 20;
			this.color = "#FFF";
		}
		Particle.prototype.draw = function(){
			this.x += this.vx;
			this.y += this.vy;

			this.vy += this.gravity;
			this.life++;
			if(this.life >= this.maxlife){
				delete particles[this.id];
			}
			c.fillStyle = this.color;
			c.fillRect(this.x, this.y, this.size, this.size);
		};
		setInterval(function(){
			c.fillStyle = "black";	c.clearRect(0,0,canvas.width,canvas.height);
			for (var i = 0; i < particleNum; i++){
				new Particle();
			}
			for(var i in particles){
				particles[i].draw();
			}
		}, 30);
	};

// # Site for -SM_TECHNOLOGY-
// smtechnologyofficialcontact@gmail.com
// # Authors of the project:
// 1-MachnevEgor_https://vk.com/machnev_egor
// 2-NasekinEvgeniy_https://vk.com/nasek1n
// 3-DmitryShalimov_https://vk.com/lookatstat
// # Contacts in email:
// 1-meb.official.com@gmail.com
// 2-nasekinwhiteorblack@gmail.com
// 3-dmitriy-shalimov@yandex.ru
