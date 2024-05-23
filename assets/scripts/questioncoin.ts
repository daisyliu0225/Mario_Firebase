// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class QuestionCoin extends cc.Component {

    @property(cc.Prefab)
    coinPrefabs: cc.Prefab = null;

    private coinSplit: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }

    // update (dt) {}

    splitCoin(){
        this.altercoinSplit();
        //console.log("split coin");
        var coin_split = cc.instantiate(this.coinPrefabs);
        coin_split.setPosition(this.node.position.x, this.node.position.y + 30);
        coin_split.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        cc.find("Canvas/Map").addChild(coin_split);
    }

    onBeginContact(contact, self, other){
        if(other.tag == 0 && this.coinSplit == false){
            let playerBoundingBox = other.node.getBoundingBoxToWorld();
            let coinBoundingBox = self.node.getBoundingBoxToWorld();

            let playerMargin = playerBoundingBox.yMin;
            let coinMargin = coinBoundingBox.yMax;

            //console.log("playerBottom " + playerMargin);
            //console.log("enemy " + enemyMargin);

            if (playerMargin < coinMargin) {
                //console.log("Player's bottom margin is higher than enemy's top margin.");
                // Handle the logic for this condition
                this.splitCoin();
            }
        }
    }

    altercoinSplit(){
        this.coinSplit = true;
    }
}
