const playList = [
    {
      title: 'Brother Louie',
      artist: 'Modern Talking',
      img: 'https://i.scdn.co/image/ab67616d0000b2737653d6ef3caa9fa2e9af615d',
      song:'/audio/y2mate.com - Modern Talking  Brother Louie 98 Video  New Version.mp3'
    },
    {
      title: 'Thriller',
      artist: 'Michael',
      img: 'https://m.media-amazon.com/images/I/71wntRXPjcL._SY200_QL15_.jpg',
      song: '/audio/y2mate.com - Michael Jackson  Thriller Lyrics.mp3'
    },
    {
      title: 'Danza Kuduro',
      artist: 'Don Omar',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUSULuFkqZSSJtVxTM2rIRlz-1h7cZ3ZMTg&s',
      song: '/audio/y2mate.com - Don Omar  Danza Kuduro Lyrics ft Lucenzo.mp3'
    },
    {
      title: 'Get down',
      artist: 'Backstreet boys',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYem5tZKNTY9Hiq9P3LPJnZu9TR7Hg6f9lg&s',
      song: '/audio/y2mate.com - Backstreet Boys  Get Down Youre The One For Me Official HD Video.mp3'
    },
    {
      title: 'Bye-Bye-Bye',
      artist: 'Nsync',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzcEnOfzv_kPOPme-bKJHaVHLzQc1xO39IQ&s',
      song: '/audio/y2mate.com - NSYNC  Bye Bye Bye Lyrics Deadpool 3 Soundtrack.mp3'
    }
  ];
  
  const audio = document.getElementById('audio');
  const audioSource = document.getElementById('audio-source');
  const albumImg = document.getElementById('album-img');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const stop = document.getElementById('stop');
  
  let currentTrackIndex = 0;
  
  function loadTrack(index) {
    const track = playList[index];
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    albumImg.src = track.img;
    audioSource.src = track.song;
    audio.load(); 
  }
  
  function playAudio() {
    audio.play();
    play.style.display = 'none';
    pause.style.display = 'inline';
  }
  
  function pauseAudio() {
    audio.pause();
    pause.style.display = 'none';
    play.style.display = 'inline';
  }
  
  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    pause.style.display = 'none';
    play.style.display = 'inline';
  }
  
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playList.length) % playList.length;
    loadTrack(currentTrackIndex);
    playAudio();
  }
  
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playList.length;
    loadTrack(currentTrackIndex);
    playAudio();
  }
  
  play.addEventListener('click', playAudio);
  pause.addEventListener('click', pauseAudio);
  stop.addEventListener('click', stopAudio);
  prev.addEventListener('click', prevTrack);
  next.addEventListener('click', nextTrack);
  
  window.addEventListener('DOMContentLoaded', () => {
    loadTrack(currentTrackIndex);
    pause.style.display = 'none'; 
  });