// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Scene extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    diebgm: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.playBGM();
    }

    playBGM(){
        cc.audioEngine.playMusic(this.bgm, true);
    }

    stopBGM(){
        cc.audioEngine.playMusic(this.bgm, false);
    }

    playDieBGM(){
        cc.audioEngine.playMusic(this.diebgm, true);
    }

    stopDieBGM(){
        cc.audioEngine.playMusic(this.diebgm, false);
    }
    // update (dt) {}
}
