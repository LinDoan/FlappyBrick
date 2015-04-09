#pragma strict

var notpassed = true;
var player : GameObject;

function Start () {
	player = GameObject.Find("brick");
}

function Update () {
	transform.position.x -= 0.05;
	if( transform.position.x < -7) {
		Destroy(this.gameObject);
	}
	if( transform.position.x < -1 && notpassed) {
		notpassed = false;
		player.SendMessage ("AddScore");
	}
}