// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Flag extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    winbgm: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
    }

    // update (dt) {}

    onBeginContact(contact, self, other){
        if(other.tag == 0) this.loadWinScene();
    }

    loadWinScene(){
        this.playwinBGM();
        cc.director.loadScene("win", () => {
            // Once Scene1 is loaded, schedule the transition to Scene2
            this.scheduleOnce(this.loadLevelScene, 3); // 3 second delay
        });
    }

    loadLevelScene(){
        cc.director.loadScene("level");
    }

    playwinBGM(){
        cc.audioEngine.playMusic(this.winbgm, true);
    }
}
