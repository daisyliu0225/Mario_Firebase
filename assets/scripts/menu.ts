// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class menu extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    start () {
        this.playBGM();
    // =========================== TODO 1-1 ============================
    // 1. Add dynamic click event to StartButton to call this function  
        let StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "menu";
        StartButton.handler = "loadGameScene";
        
        cc.find("Canvas/login").getComponent(cc.Button).clickEvents.push(StartButton);
    }
    // ===============================================================

    loadGameScene(){
    // =========================== TODO 1-2 ============================
    // 1. Load main scene by cc.director
        cc.director.loadScene("level"); 
    // ===============================================================
    }
    // update (dt) {}

    playBGM(){
        cc.audioEngine.playMusic(this.bgm, true);
    }
}
