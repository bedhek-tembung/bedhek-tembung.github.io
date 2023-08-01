function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wLevjoKtiZ":
        Script1();
        break;
      case "62Jn5ZD0Ioj":
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

