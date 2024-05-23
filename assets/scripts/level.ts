// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Level extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    start () {
        this.playBGM();
    // =========================== TODO 1-1 ============================
    // 1. Add dynamic click event to StartButton to call this function  
        let LevelButton1 = new cc.Component.EventHandler();
        LevelButton1.target = this.node;
        LevelButton1.component = "level";
        LevelButton1.handler = "loadLevel1";
        
        cc.find("Canvas/btn1").getComponent(cc.Button).clickEvents.push(LevelButton1);

        let logoutButton = new cc.Component.EventHandler();
        logoutButton.target = this.node;
        logoutButton.component = "";
        logoutButton.handler = "logout";

        cc.find("Canvas/logout").getComponent(cc.Button).clickEvents.push(logoutButton);

    }
    // ===============================================================

    loadLevel1(){
    // =========================== TODO 1-2 ============================
    // 1. Load main scene by cc.director
        cc.director.loadScene("gamestart", () => {
            // Once Scene1 is loaded, schedule the transition to Scene2
            this.scheduleOnce(this.loadScene1, 1); // 1 second delay
        });
        
    // ===============================================================
    }


    loadScene1(){
        cc.director.loadScene("level1");
    }

    playBGM(){
        cc.audioEngine.playMusic(this.bgm, true);
    }

    logout(){

    }


    // update (dt) {}
}
