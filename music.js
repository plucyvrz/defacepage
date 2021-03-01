                    var listmusik = {
                                    "name":["ThisLove","StayWithMe","CanYouHearMyHeart","WeWereInLove"],
                                    "img":["This_Love.jpg","Stay_With_Me.jpg","Can_You_Hear_My_Heart.jpg","We_Were_In_Love.jpg"]
                    };
                    var value = 0;
                    function show(){
                                    $("#display").html(`<img src="https://raw.githubusercontent.com/plucyvrz/playlist/main/Kpop/img/${listmusik.img[value]}" width="300" height="300"/>
                                             <h2><font color="#c128c9">${listmusik.name[value]}</font><h2>`);
                                    $("#audio").attr("src",`https://raw.githubusercontent.com/plucyvrz/playlist/main/Kpop/audio/${listmusik.name[value]}.mp3`);
                    }
                    show();
                    var audio = document.getElementById("audio");
                    // next
                    function nextAudio() {
                                    if (value < 3) {
                                                    value++;
                                                    show();
                                                    playAudio();
                                    audio.currentTime = 0; 
                        } 
                    }
                    // prev
                    function prevAudio() {
                                    if (value > 0) {
                                                    value--;
                                                    show();
                                                    playAudio();
                                    audio.currentTime = 0; 
                        } 
                    }
                    // play
                    function playAudio() {
                      audio.play();
                    }
                    // pause
                    function pauseAudio() {
                      audio.pause();
                    }
