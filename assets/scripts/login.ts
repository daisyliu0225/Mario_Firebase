// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.Node)
    email: cc.Node = null;

    @property(cc.Node)
    password: cc.Node = null;

    public txtEmail: string = "";
    public txtPassword: string = "";

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    login(event, customEventData){
        this.txtEmail = this.email.getComponent(cc.EditBox).string;
        this.txtPassword = this.password.getComponent(cc.EditBox).string;
        firebase.auth().signInWithEmailAndPassword(this.txtEmail, this.txtPassword).then(function(user){
            cc.director.loadScene("level");
            console.log("Go to scene select");
        }).catch(function(error){
            alert(error);
            console.log("Login error");
        })
    }

    cancel(){
        alert("login cancelled");
        cc.director.loadScene("menu");
    }

    // update (dt) {}
}
