#pragma strict
import UnityEngine.UI;

var sliderL : UnityEngine.UI.Scrollbar;

function Start () {
	sliderL.size = 0;
}

function Update () {
	sliderL.size += 0.01;
	if(sliderL.size > 0.99) {
		Application.LoadLevel("main");
	}
}