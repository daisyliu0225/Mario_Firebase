// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class info extends cc.Component {

    lives: number;
    timer: number;
    coin: number;
    score: number;

    @property(cc.Node)
    liveNumbers = null;

    @property(cc.Node)
    timerNumber = null;

    @property(cc.Node)
    coinNumber = null;

    @property(cc.Node)
    scoreNumber = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        this.initialCoin(0);
        this.initialLive(5);
        this.initialTimer(100);
        this.initialScore();
        this.lives = 5;
        this.coin = 0;
        this.timer = 100;
        this.score = 0;
        this.schedule(this.updateCountdown, 1);
    }

    start () {
    }

    //update () {}

    initialCoin(number){
        this.coin = number;
        this.coinNumber.getComponent(cc.Label).string = this.coin.toString();
    }

    initialLive(number){
        this.lives = number;
        this.liveNumbers.getComponent(cc.Label).string = this.lives.toString();
    }

    initialTimer(number){
        this.timer = number;
        this.timerNumber.getComponent(cc.Label).string = this.timer.toString();
    }

    initialScore(){
        this.score = 0;
        this.scoreNumber.getComponent(cc.Label).string = this.score.toString();
    }


    updateLive(number){
        this.lives -= number;
        this.liveNumbers.getComponent(cc.Label).string = this.lives.toString();
    }

    updateCoin(number){
        this.coin = this.coin + number;
        this.coinNumber.getComponent(cc.Label).string = this.coin.toString();
    }

    updateLabel(){
        this.timerNumber.getComponent(cc.Label).string = this.timer.toString();
    }

    updateScore(number){
        this.score = this.score + number;
        this.scoreNumber.getComponent(cc.Label).string = this.score.toString();
    }

    updateCountdown() {
        if (this.timer > 0) {
            this.timer = this.timer - 1;
            this.updateLabel();
        } else {
            this.unschedule(this.updateCountdown);
            // Countdown has finished, you can add additional logic here
            //console.log('Countdown finished!');
        }
    }

    checkLive(){
        //console.log("lives" + this.lives);
        return this.lives;
    }

    checkTimer(){
        return this.timer;
    }
}
