#pragma strict
import UnityEngine.UI;

var s = 0;
var pipe : GameObject;
var score = 0;
var highscore = 0;
var tempScore = 0;
var scoreT : UnityEngine.UI.Text;
var scoreAD : UnityEngine.UI.Text;
var highscoreAD : UnityEngine.UI.Text;
var newHigh : UnityEngine.UI.Text;
var dead = false;
var startS : GameObject;
var endS : GameObject;
var playing = false;
var touched = false;

function Start () {
	menu();
	highscore = PlayerPrefs.GetInt("high",0);
}

function Update () {
	if( playing) {
	s += 1;
	if( transform.position.x < -3) {
		DIE();
	}
	if( s > 200) {
		s = 0;
		Instantiate (pipe, Vector3(7, Random.Range(2, -2), 2), Quaternion.identity);
	}
	scoreT.text = score.ToString();
	scoreAD.text = score.ToString();
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	if( Input.GetMouseButtonDown(0)) {
		flap();
	}
	if (Input.touchCount > 0 && touched == false) {
		touched = true;
		flap();
	}
	if(Input.touchCount < 1) {
		touched = false;
	}
	} else {
		transform.position.y = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
}
function AddScore () {
	score += 1;
}
function DIE () {
	dead = true;
	endS.SetActive(true);
	playing = false;
	tempScore = score;
	if(score > highscore) {
		highscore = score;
		newHigh.text = "NEW";
	} else {
		newHigh.text = "";
	}
	highscoreAD.text = highscore.ToString();
	scoreAD.text = score.ToString();
	PlayerPrefs.SetInt("high", highscore);
}
function startGame () {
	dead = false;
	s = 0;
	score = 0;
	transform.position.y = 0;
	startS.SetActive(false);
	endS.SetActive(false);
	playing = true;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = -1;
}
function menu () {
	startS.SetActive(true);
	endS.SetActive(false);
	playing = false;
}
function OnCollisionEnter2D(coll: Collision2D) {
	DIE();
}
function flap () {
	if( dead == false) {
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<Rigidbody2D>().AddForce(Vector2.up * 100);
		}
}