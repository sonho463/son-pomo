let now = Date.now();
// 今の時刻表示
function time(){
	let now_text = new Date();
	document.querySelector("#now").innerHTML = now_text.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'});
	alarmSetting();
}
setInterval('time()',1000);

// 現在のポモドーロを取得、
// それに応じて現在時刻と比較する対象を更新していく
// 現在の状況 nowState = {pomoTimes(integer), isWorkTime(boolean)}

function nowState(){
	let nowState = {pomoTimes: 1, isWorkTime: true};
	const time_arr = makePomoArrayMSEC(Date.now());
	// 現在のミリ秒がどことどこの間かで値をセット
	let now = Date.now();
	console.log(Date(now));
	if(now > time_arr[0] && now <time_arr[1]){
		nowState.pomoTimes = 1;
		nowState.isWorkTime = true;
	} else if (now > time_arr[1] && now < time_arr[2]){
		nowState.pomoTimes = 1;
		nowState.isWorkTime = false;
	} else if (now > time_arr[2] && now < time_arr[3]){
		nowState.pomoTimes = 2;
		nowState.isWorkTime = true;
	} else if (now > time_arr[3] && now < time_arr[4]){
		nowState.pomoTimes = 2;
		nowState.isWorkTime = false;
	} else if (now > time_arr[4] && now < time_arr[5]){
		nowState.pomoTimes = 3;
		nowState.isWorkTime = true;
	} else if (now > time_arr[5] && now < time_arr[6]){
		nowState.pomoTimes = 3;
		nowState.isWorkTime = false;
	} else if (now > time_arr[6] && now < time_arr[7]){
		nowState.pomoTimes = 4;
		nowState.isWorkTime = true;
	} else if (now > time_arr[7] && now < time_arr[8]){
		nowState.pomoTimes = 4;
		nowState.isWorkTime = false;
	} else {
		console.log('end');
	}

	return nowState;
}

// アラーム判定関数
function alarmSetting(){
	let state
	switch(nowState){
		case { pomoTimes:1, isWorkTime: true} : state = 'ポモドーロ１';
		case { pomoTimes:1, isWorkTime: false} : state = '休憩１';
		case { pomoTimes:2, isWorkTime: true} : state = 'ポモドーロ2';
		case { pomoTimes:2, isWorkTime: false} : state = '休憩2';
		case { pomoTimes:3, isWorkTime: true} : state = 'ポモドーロ3';
		case { pomoTimes:3, isWorkTime: false} : state = '休憩3';
		case { pomoTimes:4, isWorkTime: true} : state = 'ポモドーロ4';
		case { pomoTimes:4, isWorkTime: false} : state = '休憩4';
	}
	console.log(state);
}

// 予定時刻をいれたMSEC配列を作成
function makePomoArrayMSEC(startTime){
	const time_arr = []; // 配列定義
	// console.log(startTime);
	const TO_MINUTES = 1000 * 60; // ミリ秒を分に変換
	// let startTime_msec = startTime;　// 時刻をミリ秒に変換
	time_arr.push(startTime); // スタート時刻プッシュ

	// ２５−５のサイクルを３回配列にプッシュ
	for(let i = 1; i<8; i++){
		i % 2 != 0 ?
			startTime = startTime + 25 * TO_MINUTES:
			startTime = startTime + 5 * TO_MINUTES ;
		time_arr.push(startTime);
	};
	// 長めの休み
	let long_break = startTime + 15 * TO_MINUTES;
	time_arr.push(long_break);
	return time_arr;
	} //関数終わり

	// mapで時刻表示にして配列にセットする関数
	function makePomoArray(time_arr){
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

	// pomoList以下にpを追加
	pomoArray.forEach((pomo)=>{
		pomoList.appendChild(pomo);
	})

	// schedule にpomoListを追加
	schedule.appendChild(pomoList);

	// スケジュールを設定
	const time_arr = makePomoArrayMSEC(now);
	const scheduleTime = makePomoArray(time_arr);
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
