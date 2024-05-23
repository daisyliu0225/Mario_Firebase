// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Player from "./player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Camera extends cc.Component {

    @property(cc.Node)
    player: cc.Node = null;

    @property(cc.Node)
    map: cc.Node = null;

    @property(Player)
    P: Player = null;

    boundingBox: cc.Rect = null;
    screenMiddle: cc.Vec2 = null;

    minX: number = 0;
    maxX: number = 0;
    minY: number = 0;
    maxY: number = 0;

    private rebornPos = null;

    onLoad(): void {
        this.boundingBox = new cc.Rect(0, 0, this.map.width, this.map.height);
        let winsize = cc.winSize;
        this.screenMiddle = new cc.Vec2(winsize.width/2, winsize.height/2);
        this.minX = -(this.boundingBox.xMax + winsize.width/2 - 240);
        this.maxX = this.boundingBox.xMin - this.screenMiddle.x;
        this.minY = -(this.boundingBox.yMax - winsize.width);
        this.maxY = this.boundingBox.yMin;
        //console.log("minX: " + this.minX);
        //console.log("maxX: " + this.maxX);
        //console.log("screenmiddleX" + this.screenMiddle.x);
    }

    start(){
        this.rebornPos = this.node.position;
        //console.log("rebornX" + this.rebornPos.x);
    }

    update () {
        let targetPos = this.player.getPosition();

        let targetPosalt = cc.v2(targetPos.x + 200, 0);
        let curPos = this.node.getPosition();

        //console.log("playerX:" + curPos.x);
        //console.log("playerY:" + curPos.y);

        if(Math.abs(targetPos.x - 445) < Math.abs(this.minX))
            curPos.lerp(targetPosalt, 1, curPos);

        this.node.setPosition(curPos);
       
    }
}
