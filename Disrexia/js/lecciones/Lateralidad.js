var audioCount = 0;
function playSound(audio) {
          var audio = new Audio('../audios/' + audio + '.mp3');
          audio.play();
          audio.addEventListener('ended', function() {
              audioCount++;
              if (audioCount == 4) {
                  window.location.href = 'identifica letra.html';
              }
          });
        }