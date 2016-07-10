/**
 * Created by wxb on 2016/7/10.
 */

console.log("load 3 moduleC ");

$("div").css("color", "#F00");

window.modC = {};
modC.name="modCname";
modC.funCB = funC_b;

function funC_a() {
    console.log("funC_a");
}

function funC_b() {
    console.log("exec funC_b");
}

