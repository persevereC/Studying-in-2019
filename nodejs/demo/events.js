const EventEmitter = require('events').EventEmitter;
const AudioDevicce = {
    play(track){
        console.log(`play ${track}`);
    },
    stop(){
        console.log('stop');
    }
}

class MusicPlayer extends EventEmitter {
    constructor(){
        super();
        this.playing = false;
    }
}

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', track => {
    this.playing = true;
    AudioDevicce.play(track);
})
musicPlayer.on('stop', track => {
    this.playing = true;
    AudioDevicce.stop(track);
})
musicPlayer.emit('play', 'the roots - the fire');
setTimeout(() => {
    musicPlayer.emit('stop');
}, 2000);

musicPlayer.on('error', err => {
    console.err(`Error: ${err}`);
})
