// 今の時刻表示

function time(){
	let now = new Date();
	document.querySelector("#now").innerHTML = now.toLocaleTimeString();
}
setInterval('time()',1000);

function makePomoArray(startTime){

	let time_arr = []; // 配列定義
	console.log(startTime);
	const TO_MINUTES = 1000 * 60; // ミリ秒を分に変換定数

	let startTime_msec = startTime.getTime();　// 時刻をミリ秒に変換
	time_arr.push(startTime_msec); // スタート時刻プッシュ

	// ２５−５のサイクルを３回配列にプッシュ
	for(let i = 1; i<8; i++){
		i % 2 != 0 ?
			startTime_msec = startTime_msec + 25 * TO_MINUTES:
			startTime_msec = startTime_msec + 5 * TO_MINUTES ;
		time_arr.push(startTime_msec);
	};

	// 長めの休み
	let long_break = startTime_msec + 15 * TO_MINUTES;
	time_arr.push(long_break);

	// mapで時刻表示にして配列にセット
	let arr = [];
	arr = time_arr.map(time => {
		let date = new Date(time);
		let hh = date.getHours();
		let mm = date.getMinutes();
		mm < 10 ? mm = '0' + date.getMinutes() : mm;
		return `${hh}:${mm}`;
	});
	return arr;
	}


function addElement () {
	rmSchedule(); //今の配列を削除
	arr = makePomoArray(new Date());
	arr.forEach(function(a){
		// 新しい要素を作成します
		let pomoSchedule = document.createElement("h2");
		//　１つずつの要素をnewContentに格納
		let newContent = document.createTextNode(a);
		// 挿入する要素の参照を取得
		let Parent = document.getElementById("schedule");
		// テキストノードを新規作成した h2 に追加します
		pomoSchedule.appendChild(newContent);
		// DOM に新しく作られた要素とその内容を追加します
		let currentDiv = document.getElementById("div1");
		Parent.insertBefore(pomoSchedule, currentDiv);
	});
}

function rmSchedule () {

	let schedule = document.querySelector('#schedule');

	while(schedule.firstChild){
		schedule.removeChild(schedule.firstChild);
	}
	// let h2 = schedule.querySelectorAll('h2');
	// h2.forEach(function(h){
	// 	schedule.removeChild(h);
	// })
}
