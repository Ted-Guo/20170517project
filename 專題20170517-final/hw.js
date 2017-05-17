$(document).ready(function(){

			var user_X=50;
			var user_Y=50;
			var user_Xmove = 45;
			var user_Ymove = 45;
			var user_Control_Image = new Image();
			user_Control_Image.src="4.png";
			var canvas = document.getElementById("mycanvas");
			var context ;
			var  gameLoop;
			var changeEmey =1;
			var x1 = 200;
			var x2 = 150;
			var t1= 0;
			var myswitch = true;
			var score = 0;
			var count = 0;

			
			var draw_User_Move = function(){

				context = canvas.getContext("2d");
				var h = user_Control_Image.height *0.4;//設定等等要載入canvas的img高
				var w = user_Control_Image.width *0.4;//設定等等要載入canvas的img寬

				context.clearRect(user_X-200, user_Y-200, h*5, w*5);
				
				draw_background();
				context.drawImage(user_img,user_X,user_Y,w,h);
				draw_Enemy();
				draw_Enemy2();
				if(count>5){
					draw_Enemy3();
				}
				writeScore();
				 
			
			
				/*參數分別為圖片src x位置 y位置  寬 高*/
			}

			var writeScore = function(){
				var gradient=context.createLinearGradient(400,10,450,150);
				gradient.addColorStop(0,"magenta");
				gradient.addColorStop(0.5,"blue");
				gradient.addColorStop(1.0,"red");
				context.font="50px Verdana";
				context.fillStyle=gradient;
				context.fillText("Score: "+score,480,50);
				
			}
			
			$(document).keydown(function(e){
				gameLoop = setInterval(animate,400);
				myswitch = true;
				if(e.keyCode == 37){
					user_X = user_X-user_Xmove;
					if(user_X<0){
						user_X = 0;
					}
					
				}
				else if(e.keyCode == 38){
					user_Y = user_Y-user_Ymove;
					if(user_Y<0){
						user_Y = 0;
					}
					
				}
				else if(e.keyCode == 39){
					user_X = user_X+user_Xmove;
					if(user_X+(user_Control_Image.width)*0.4>canvas.width){
						user_X = user_X-user_Xmove;
						
					}
					
				}
				else if(e.keyCode == 40){
					user_Y= user_Y+user_Ymove;
					if(user_Y+(user_Control_Image.height)
						*0.47>canvas.height){
						user_Y = user_Y-user_Ymove;
					}
					
				}
				
			});
			
			
			
			var draw_Enemy = function(){
				
				var context2 = canvas.getContext("2d");
				var x = 0;
				var y = 0;
				if(myswitch){
					x = Math.floor(Math.random()*8);
					y = Math.floor(Math.random()*15);
				}
				
				x1 += x;
				if(y%2 == 0){x2 += y;}
				else{x2 -= y;}
				if(x2<0){
					x2 += y;
				}
				if (x2>canvas.height) {
					x2 -= 150;
				}
				
				var h = user_Control_Image.height *0.5;//設定等等要載入canvas的img高
				var w = user_Control_Image.width *0.5;//
				if(changeEmey == 1){
					t1 = canvas.width-x1;
					context2.drawImage(t3,t1,x2,100,100);
				}
				
				if(changeEmey == 2){
					t1 =canvas.width-x1;
					context2.drawImage(t4,t1,x2,100,100);
				}
				if(changeEmey == 3){
					t1 = canvas.width-x1;
					context2.drawImage(t5,t1,x2,100,100);
				}

				if(t1<0){
					
					var changeY = Math.floor(Math.random()*3+1);
					x1 = 200;
					if(changeY == 1){x2 = 50; x1 = 0; x=0; y=0;
						score += 10;
					}
					if(changeY == 2){x2 = 350; x1 = 0;x=0; y=0;
						score += 15;
					}
					if(changeY == 3){x2 = 200; x1 = 0;x=0; y=0;
						score += 20;
					}
					changeEmey = Math.floor(Math.random()*3+1);
					count++;
				}
			}
			
		
			var draw_background = function(){
				context.drawImage(background_img,0,0,canvas.width,
				canvas.height);
				
			}

			var animate = function(){
				
					draw_User_Move();
					beHinted();

			}
		
			var beHinted = function(){
				if(user_X>t1 && (user_X-t1)<50){
					if(user_Y >x2 && (user_Y-x2)<50){
 						// moveEnd();
						user_X = 50;
						user_Y = 50;
						x1 = 200;
					    x2 = 150;
					    enemy2_X = 140;
						enemy2_Y = 240;
					    score = 0;
					   	count = 0;
					    myswitch = false;
					    clearInterval(gameLoop);
					    alert("game over!");
					}
					//else if(user_Y >x2 && (x2-user_Y)<50){
					// 	user_X = 50;
					// 	user_Y = 50;
					// 	x1 = 200;
					//     x2 = 150;
					//     enemy2_X = 140;
					// 	enemy2_Y = 240;
					//     score = 0;
					//    	count = 0;
					//     myswitch = false;
					//     clearInterval(gameLoop);
					//     alert("game over!");

					// }
				}

				if(user_X>X && (user_X-X)<50){
					if(user_Y >enemy2_Y && (user_Y-enemy2_Y)<50){
						// moveEnd();
						user_X = 50;
						user_Y = 50;

						x1 = 200;
					    x2 = 150;
					    enemy2_X = 140;
						enemy2_Y = 240;
						
					    score = 0;
					    count = 0;
					    myswitch = false;
					    clearInterval(gameLoop);
					    alert("game over!");
					    moveMeun();
					}
					// else if(user_Y >enemy2_Y && (enemy2_Y-user_Y)<50){
					// 	user_X = 50;
					// 	user_Y = 50;
					// 	x1 = 200;
					//     x2 = 150;
					//     enemy2_X = 140;
					// 	enemy2_Y = 240;
					//     score = 0;
					//    	count = 0;
					//     myswitch = false;
					//     clearInterval(gameLoop);
					//     alert("game over!");

					// }
				}

				//ey3判斷
				if(user_X>X_3 && (user_X-X_3)<50){
					if(user_Y >enemy3_Y && (user_Y-enemy3_Y)<50){
						// moveEnd();
						user_X = 50;
						user_Y = 50;

						x1 = 200;
					    x2 = 150;
					    enemy3_X = 160;
						enemy3_Y = 300;
						
					    score = 0;
					    count = 0;
					    myswitch = false;
					    clearInterval(gameLoop);
					    alert("game over!");
					    moveMeun();
					}
					// else if(user_Y >enemy3_Y && (enemy3_Y-user_Y)<50){
					// 	user_X = 50;
					// 	user_Y = 50;
					// 	x1 = 200;
					//     x2 = 150;
					//     enemy2_X = 140;
					// 	enemy2_Y = 240;
					//     score = 0;
					//    	count = 0;
					//     myswitch = false;
					//     clearInterval(gameLoop);
					//     alert("game over!");

					// }
				}
				
			}	

			//功能表
			

			
			var moveMeun = function(){
				$("#star_div").animate({
					left:"35%",
					top:"40%"

				},2000);
					
			}

			$("#play_btn").click(function(){

				$("#star_div").animate({
					top:"-100%"
				},1000);

			});

			moveMeun();


			// var moveEnd = function(){
			// 	$("#end_div").animate({
			// 		left:"35%",
			// 		top:"40%"
			// 	},1000);
			// }
			
			

			var enemy2_X = 140;
			var enemy2_Y = 240;
			var changeEmey2 = 2;
			var X = 0;
			var draw_Enemy2 = function(){
				var context2 = canvas.getContext("2d");
				var move_x = 0;
				var move_y = 0;
				var h = user_Control_Image.height *0.5;
				var w = user_Control_Image.width *0.5;
				if(myswitch){
					move_x = Math.floor(Math.random()*12);
					move_y = Math.floor(Math.random()*25);
				}
				enemy2_X = enemy2_X+move_x;
				
				
				if(move_y%2 == 0){
					enemy2_Y = enemy2_Y+move_y;
				}
				else{
					enemy2_Y = enemy2_Y-move_y;	
				}

				if(enemy2_Y>canvas.height){
					enemy2_Y -= 150;
				}else if(enemy2_Y < 0){
					enemy2_Y += 150;
				}

				
				if(changeEmey2 == 1){
					
					X = canvas.width-enemy2_X;
						context2.drawImage(t4,X,enemy2_Y,100,100);
					}
					if(changeEmey2 == 2){
						X = canvas.width-enemy2_X;
						context2.drawImage(t5,X,enemy2_Y,100,100);
					}
					if(changeEmey2 == 3){
						X = canvas.width-enemy2_X;
						context2.drawImage(t3,X,enemy2_Y,100,100);
					}

					if (X < 0 ) {
						changeEmey2 = Math.floor(Math.random()*3+1);
						count++;
						if(changeEmey2 == 1){
							enemy2_Y = 50; enemy2_X = 0;
						    move_x=0; move_y=0;
							score += 10;
					}
						if(changeEmey2 == 2){
							enemy2_Y = 50; enemy2_X = 0;
						    move_x=0; move_y=0;
							
							score += 15;
					}
						if(changeEmey2 == 3){
							enemy2_Y = 50; enemy2_X = 0;
						    move_x=0; move_y=0;
							score += 20;
					}
				}

			}

			//Enemy3

				var enemy3_X = 240;
				var enemy3_Y = 340;
				var changeEmey3 = 3;
				var X_3 = 0; 
				var draw_Enemy3 = function(){
				var context2 = canvas.getContext("2d");
				var move_x = 0;
				var move_y = 0;
				var h = user_Control_Image.height *0.5;
				var w = user_Control_Image.width *0.5;
					if(myswitch){
						move_x = Math.floor(Math.random()*15);
						move_y = Math.floor(Math.random()*30);
					}
					enemy3_X = enemy3_X+move_x;
				
				
					if(move_y%2 == 0){
						enemy3_Y = enemy3_Y+move_y;
					}
					else{
						enemy3_Y = enemy3_Y-move_y;	
					}

					if(enemy3_Y>canvas.height){
						enemy3_Y -= 150;
					}else if(enemy3_Y < 0){
						enemy3_Y += 150;
					}

				
					if(changeEmey3 == 1){
						X_3 = canvas.width-enemy3_X;
							context2.drawImage(t4,X,enemy3_Y,100,100);
					}
					if(changeEmey3 == 2){
						X_3 = canvas.width-enemy3_X;
							context2.drawImage(t5,X,enemy3_Y,100,100);
					}
					if(changeEmey3 == 3){
						X_3 = canvas.width-enemy3_X;
							context2.drawImage(t3,X,enemy3_Y,100,100);
					}

					if (X_3 < 0 ) {
						changeEmey3 = Math.floor(Math.random()*3+1);
						if(changeEmey3 == 1){
							enemy3_Y = 50; enemy3_X = 0;
						    move_x=0; move_y=0;
							score += 10;
					}
						if(changeEmey3 == 2){
							enemy3_Y = 50; enemy3_X = 0;
						    move_x=0; move_y=0;
							score += 15;
					}
						if(changeEmey3 == 3){
							enemy3_Y = 50; enemy3_X = 0;
						    move_x=0; move_y=0;
							score += 20;
					}
				}

			}



			animate();
			
		});