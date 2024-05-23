// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Signup extends cc.Component {

    @property(cc.Node)
    email: cc.Node = null;

    @property(cc.Node)
    password: cc.Node = null;

    public txtEmail: string = "";
    public txtPassword: string = "";

    signup(event , customEventData){
        this.txtEmail = this.email.getComponent(cc.EditBox).string;
        this.txtPassword = this.password.getComponent(cc.EditBox).string;
        console.log("email" + this.txtEmail);
        console.log("pass" + this.txtPassword);
        var signupemail = this.txtEmail;
        var signuppassword = this.txtPassword;
        firebase.auth().createUserWithEmailAndPassword(signupemail, signuppassword).then(function(){
            cc.director.loadScene("level");
            console.log("signup go into scene");
        }).catch(function(error){
            alert(error);
            console.log("error!");
        })
    }

    cancel(){
        alert("signup cancelled");
        cc.director.loadScene("menu");
    }
}
