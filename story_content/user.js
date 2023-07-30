function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65PMwR9ZAcM":
        Script1();
        break;
      case "5WC0UMoAhZ2":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src = "bgSongTembang.mp3";
audio.onload();
audio.onplay();
audio.onvolumechange = 0,4;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src = "bgSongTembang.mp3";
audio.onload();
audio.onplay();
audio.onvolumechange = 0,4;
}

