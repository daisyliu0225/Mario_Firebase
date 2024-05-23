// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Player from "./player";
import info from "./Info";
import Scene from "./scene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Turtle extends cc.Component {

    @property(cc.AudioClip)
    stomp: cc.AudioClip = null;

    private turtleSpeed: number = 0;
    private canMove: boolean = true;
    private turtleRebornPos = null;

    //animation
    private anim: cc.Animation = null;
    private idleFrame: cc.SpriteFrame = null;

    @property(Player)
    player: Player = null;

    @property(info)
    Info: info = null;

    @property(Scene)
    scene: Scene = null;

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        this.turtleSpeed = -100;
        this.node.scaleX = 1;
        this.turtleRebornPos = this.node.position;

        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
        this.anim = this.getComponent(cc.Animation);
    }

    update (dt) {
        this.turtleMovement(dt);
        
        if(this.player.isDead == true){
            this.resetPos();
        }
    }

    private turtleMovement(dt){
        this.node.x += this.turtleSpeed * dt;
        this.turtleAnimation();
    }

    onBeginContact(contact, self, other){
        if(other.tag == 3 || other.tag == 1){ //fixed objects
            this.turtleSpeed = this.turtleSpeed * (-1);  
            this.node.scaleX = this.node.scaleX * (-1);
        }else if(other.tag == 0){
            //console.log("touch enemy");

            let playerBoundingBox = other.node.getBoundingBoxToWorld();
            let enemyBoundingBox = self.node.getBoundingBoxToWorld();

            let playerMargin = playerBoundingBox.yMin;
            let enemyMargin = enemyBoundingBox.yMax;

            if (playerMargin > enemyMargin && this.canMove == true) {
                //console.log("Player's bottom margin is higher than enemy's top margin.");
                // Handle the logic for this condition
                this.playStompEffect();
                this.todie();
                this.Info.updateScore(100);
            }else{
                console.log("this height");
                if (!this.player.isInvincible){
                    if (this.player.checkpowerstatus() == false) {
                        console.log("player is dead");
                        this.player.updateStatus();
                    } else {
                        console.log("power" + this.player.checkpowerstatus());
                        this.player.updatefalsepower();
                        // Make player invincible for a short duration
                        this.player.isInvincible = true;
                        this.scheduleOnce(function() {
                            this.player.isInvincible = false;
                        }.bind(this), 2); // 2 seconds of invincibility
                    }
                }
            }
        }else if(other.tag == 7 || other.tag == 6){ //enemies
            this.disablePhy();
            this.scheduleOnce(function(){
                this.enablePhy();
            }, 0.1);
        }
    }

    todie(){
        console.log("died");
        this.falsecanMove();
        if(this.turtleSpeed > 0) this.turtleSpeed = 260;
        else this.turtleSpeed = -260;
    }

    resetPos(){
        this.node.position = this.turtleRebornPos;
        this.node.scaleX = 1;
        this.turtleSpeed = -100;
        this.truecanMove();
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-100, 0);
    }

    disablePhy(){
        cc.director.getPhysicsManager().enabled = false;
    }

    enablePhy(){
        cc.director.getPhysicsManager().enabled = true;
    }

    private turtleAnimation(){
        if(this.canMove == true){
            if(!this.anim.getAnimationState("turtlewalk").isPlaying)
                this.anim.play("turtlewalk");
        }else{
            if(!this.anim.getAnimationState("turtleroll").isPlaying)
                this.anim.play("turtleroll");
        }
        
    }

    falsecanMove(){
        console.log("false can move");
        this.canMove = false;
    }

    truecanMove(){
        this.canMove = true;
    }

    playStompEffect(){
        cc.audioEngine.playEffect(this.stomp, false);
    }

}