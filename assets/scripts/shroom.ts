// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Shroom extends cc.Component {

    private shroomSpeed: number = -50;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-50, 0);
    }

    start () {

    }

    update (dt) {
        this.shroommove(dt);
    }

    shroommove(dt){
        this.node.x += this.shroomSpeed * dt;
    }
}
