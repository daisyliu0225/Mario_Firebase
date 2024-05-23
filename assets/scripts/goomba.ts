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
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    stomp: cc.AudioClip = null;

    private goombaSpeed: number = 0;
    private canMove: boolean = true;
    private goombaRebornPos = null;
    private minus: boolean = false;

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
        this.goombaSpeed = -100;
        this.node.scaleX = 1;
        this.goombaRebornPos = this.node.position;
    }

    update (dt) {
        if(this.canMove){
            this.turtleMovement(dt);
        }
        
        if(this.player.isDead == true){
            this.resetPos();
        }
    }

    private turtleMovement(dt){
        this.node.x += this.goombaSpeed * dt;
        this.node.scaleX = this.node.scaleX * (-1);
    }

    onBeginContact(contact, self, other){
        if(other.tag == 3 || other.tag == 1){ //fixed objects
            this.goombaSpeed = this.goombaSpeed * (-1);  
        }else if(other.tag == 0){
            console.log("touch enemy");
            // Get the colliders' world bounding boxes

            let playerBoundingBox = other.node.getBoundingBoxToWorld();
            let enemyBoundingBox = self.node.getBoundingBoxToWorld();

            let playerMargin = playerBoundingBox.yMin;
            let enemyMargin = enemyBoundingBox.yMax;

            if (playerMargin > enemyMargin) {
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
        this.canMove = false;
        this.node.height = this.node.height * 0.8;
        this.node.runAction(cc.fadeOut(0.5));
        this.scheduleOnce(function () {
            // 这里的 this 指向 component
            this.node.destroy();
        }, 0.5); 
    }

    resetPos(){
        this.node.position = this.goombaRebornPos;
        this.node.scaleX = -1;
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-100, 0);
    }

    disablePhy(){
        cc.director.getPhysicsManager().enabled = false;
    }

    enablePhy(){
        cc.director.getPhysicsManager().enabled = true;
    }

    playStompEffect(){
        cc.audioEngine.playEffect(this.stomp, false);
    }
}
