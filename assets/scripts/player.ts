// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import info from "./Info";
import Scene from "./scene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.AudioClip)
    jumpbgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    losebgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    coinEffect: cc.AudioClip = null;

    @property(cc.AudioClip)
    dieEffect: cc.AudioClip = null;

    @property(cc.AudioClip)
    powerUp: cc.AudioClip = null;

    @property(cc.AudioClip)
    powerDown: cc.AudioClip = null;

    @property(info)
    infomation: info = null;

    @property(Scene)
    scene: Scene = null;

    //control parameters
    private upDown: boolean = false;
    private onGround: boolean = true;
    private leftDown: boolean = false;
    private rightDown: boolean = false;
    private spaceDown: boolean = false;
    private playerSpeed: number = 0;
    private playerRebornPos = null;
    
    public isDead: boolean = false;
    public isInvincible: boolean = false;

    //animation
    private anim: cc.Animation = null;
    private idleFrame: cc.SpriteFrame = null;

    //mushroom
    private power: boolean = false;
    private mushroomtimer: number = 5;

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {
        this.playerRebornPos = this.node.position;
        //console.log("rebornPos" + this.playerRebornPos);
        this.updatefalseStatus();

        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
        this.anim = this.getComponent(cc.Animation);
    }

    update(dt){
        this.playerMovement(dt);
    }
    
    onKeyDown(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                //console.log("left pressed");
                this.leftDown = true;
                break;
            case cc.macro.KEY.right:
                //console.log("right pressed");
                this.rightDown = true;
                break;
            case cc.macro.KEY.up:
                //console.log("up pressed");
                this.upDown = true;
                break;
        }
    }

    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                //console.log("left released");
                this.leftDown = false;
                break;
            case cc.macro.KEY.right:
                //console.log("right released");
                this.rightDown = false;
                break;
            case cc.macro.KEY.up:
                //console.log("up released");
                this.upDown = false;
                break;
        }
    }

    onBeginContact(contact, self, other){
        if(other.tag == 2){ //ground tag
            if (contact.getWorldManifold().normal.y !== -1) return;
            //console.log("hit ground");
            this.onGround = true;

        }else if(other.tag == 3){ //fixed objects
            //console.log("hit fixed objects");
            if (contact.getWorldManifold().normal.y !== -1) return;
            //console.log("hit ground");
            this.onGround = true;

        }else if(other.tag == 4){ //coin
            this.playCoinEffect();
            //console.log("touch coin");
            other.node.destroy();
            this.infomation.updateCoin(1);
            this.infomation.updateScore(10);
        }else if(other.tag == 5){ //die ground
            this.updateStatus();
            //console.log("other tag 5 status " + this.isDead);
            //console.log("deadQQ");
            this.checkStatus();
            this.scene.stopBGM();
            this.scene.playDieBGM();
            this.infomation.updateLive(1);
        }else if(other.tag == 8){
            //console.log("hit question boxes");
            if (contact.getWorldManifold().normal.y !== -1) return;
            //console.log("hit ground");
            this.onGround = true;
        }//6 and 7 are enemies 8 is question box with coin 10 is flag
        else if(other.tag == 11){
            this.schedule(this.updatemushroomcountdown, 1);
            this.updatetruepower();
            other.node.destroy();
            this.infomation.updateScore(50);
        }
    }
    

    onEndContact(contact, self, other){
        if(other.tag == 2 && this.upDown == true){
            //console.log("leave ground");
            this.onGround = false;
        }else if(other.tag == 3 && this.upDown == true){
            //console.log("leave ground");
            this.onGround = false;
        }else if(other.tag == 8 && this.upDown == true){
            this.onGround = false;
        }
    }
    
    private playerMovement(dt){
        //console.log("player movement");
        this.playerSpeed = 0;
        //console.log("player" + this.node.getPosition());
        if(this.checkStatus()){
            if(this.infomation.checkLive() == 0){
                //console.log("check live dead");
                this.loadDieScene();
            }else{
                //console.log("player dead");
                this.scene.stopBGM();
                this.scene.playDieBGM();
                this.scheduleOnce(function () {
                    this.scene.stopDieBGM();
                }, 2);
                this.scheduleOnce(function () {
                    this.scene.playBGM();
                }, 2);
                this.playerSpeed = 0;
                this.node.setPosition(this.playerRebornPos);
                this.infomation.updateLive(1);
                this.updatefalseStatus();
                return;
            }
        }else if(this.infomation.checkTimer() == 0){
            //console.log("check timer dead");
            this.loadDieScene();
        }else{
            this.playerAnimation();
            if(this.leftDown == true){
                this.node.scaleX = -1;
                this.playerSpeed = -260;
            }else if(this.rightDown == true){
                this.node.scaleX = 1;
                this.playerSpeed = 260;
            }
            this.node.x += this.playerSpeed * dt;
    
            if(this.upDown == true && this.onGround == true) this.jump();
            else if(this.spaceDown == true && this.onGround == true) this.jump();

            if(this.checkmushroomtimer() == 0 && this.checkpowerstatus() == true) this.updatefalsepower();
        }        
    }

    private jump(){
        this.playEffect();
        this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0, 120000), true);
    }

    playEffect(){
        cc.audioEngine.playEffect(this.jumpbgm, false);
    }

    playCoinEffect(){
        cc.audioEngine.playEffect(this.coinEffect, false);
    }

    updateStatus(){
        this.isDead = true;
    }

    updatefalseStatus(){  
        this.isDead = false;
    }

    updatetruepower(){
        cc.audioEngine.playEffect(this.powerUp, false);
        this.power = true;
    }

    updatefalsepower(){
        this.mushroomtimer = 5;
        cc.audioEngine.playEffect(this.powerDown, false);
        this.power = false;
    }

    checkStatus(){
        //console.log("status " + this.isDead);
        return this.isDead;
    }

    checkpowerstatus(){
        return this.power;
    }

    loadDieScene(){
        this.playLoseBGM();
        cc.director.loadScene("gameover", () => {
            // Once Scene1 is loaded, schedule the transition to Scene2
            this.scheduleOnce(this.loadLevelScene, 3.5); // 1 second delay
        });
    }

    playLoseBGM(){
        cc.audioEngine.playMusic(this.losebgm, true);
    }

    loadLevelScene(){
        cc.director.loadScene("level");
    }

    updatemushroomcountdown() {
        if (this.mushroomtimer > 0) {
            this.mushroomtimer = this.mushroomtimer - 1;
        } else {
            this.unschedule(this.updatemushroomcountdown);
            // Countdown has finished, you can add additional logic here
            //console.log('Countdown finished!');
        }
    }

    checkmushroomtimer(){
        return this.mushroomtimer;
    }

    private playerAnimation(){
        if(this.isDead == false){
            if(this.power == false){
                if(this.onGround == false){
                    if(!this.anim.getAnimationState("mariojump").isPlaying)
                        this.anim.play("mariojump");
                }else{
                    if(this.leftDown == true || this.rightDown == true){
                        if(!this.anim.getAnimationState("mariorun").isPlaying)
                            this.anim.play("mariorun");
                    }
                    else if(this.leftDown == false && this.rightDown == false){
                        if(!this.anim.getAnimationState("marioidle").isPlaying)
                            this.anim.play("marioidle");
                    }
                }
            }else{
                if(this.onGround == false){
                    console.log("big mario jump");
                    if(!this.anim.getAnimationState("bigmariojump").isPlaying)
                        this.anim.play("bigmariojump");
                }else{
                    if(this.leftDown == true || this.rightDown == true){
                        console.log("big mario run");
                        if(!this.anim.getAnimationState("bigmariowalk").isPlaying)
                            this.anim.play("bigmariowalk");
                    }
                    else if(this.leftDown == false && this.rightDown == false){
                        console.log("big mario idle");
                        if(!this.anim.getAnimationState("bigmarioidle").isPlaying)
                            this.anim.play("bigmarioidle");
                    }
                }
            }
        }else{
            this.anim.stop();
        }
    }
}
