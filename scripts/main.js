// 今の時刻表示

function time(){
	let now = new Date();
	document.querySelector("#now").innerHTML = now.toLocaleTimeString();
}
setInterval('time()',1000);

// ポモドーロスタート

function startPomo(){
	const start_time = new Date();

	document.querySelector('#start_time').innerHTML = start_time.toLocaleTimeString();

	const msec_first_pomo = toTimeMsec(start_time, 25);

	const first_pomo = new Date();
	first_pomo.setTime(msec_first_pomo);

	document.querySelector('#first_pomo').innerHTML = first_pomo.toLocaleTimeString();

	//　テキスト時間表示をミリセカンドに変換
	function toTimeMsec(timeStr, min){
		return timeStr.getTime() + min * 1000 * 60
	}
}
