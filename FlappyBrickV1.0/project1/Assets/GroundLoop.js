#pragma strict

function Start () {

}

function Update () {
	transform.position.x -= 0.05;
	if( transform.position.x < -7) {
		transform.position.x = 7;
	}
}