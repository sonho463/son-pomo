// 今の時刻表示

function time(){
	let now = new Date();
	document.querySelector("#now").innerHTML = now.toLocaleTimeString();
}
setInterval('time()',1000);

// 予定時刻をいれた配列を作成
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

// 配列を表示するボタンにつける関数
function addElement () {
	rmSchedule(); //今の配列を削除

	//表示する ul#pomoList を作成
	pomoList = document.createElement('div');
	pomoList.setAttribute('id', 'pomoList');

	// pomoArrayを設定して、li#pomo$ を設定
	let pomoArray = [];
	let counter = 1
	while(true){
		if(pomoArray.length >= 8) break;
		p = document.createElement('div');
		p.setAttribute('id', `pomo${counter}`);
		pomoArray.push(p);
		console.log(pomoArray);
		console.log(pomoArray.length);
		counter += 1;
	}

	// pomoList以下にliを追加
	pomoArray.forEach((pomo)=>{
		pomoList.appendChild(pomo);
	})

	// schedule にpomoListを追加
	schedule.appendChild(pomoList);

	// スケジュールを設定
	const scheduleTime = makePomoArray(new Date());
	console.log (scheduleTime);
	let count = 0;
	while(count < 8){
		let text = document.createTextNode(scheduleTime[count]);
		let pText = document.createElement('p');
			pText.appendChild(text);
			document.querySelector(`#pomo${count + 1}`).appendChild(pText);
			count += 1;
	}

	// 小見出し
	

}

function rmSchedule () {

	let schedule = document.querySelector('#schedule');

	while(schedule.firstChild){
		schedule.removeChild(schedule.firstChild);
	}
}
