const chime = new Audio('./audio/school_bell.mp3')
var startFlag = false
// const nowMsec = Date.now();
// const msecArray = makeMsecArray(nowMsec);
// const textArray = makePomoArray(msecArray);
// const objArray = makeObj(msecArray, textArray)

setInterval(time, 1000);

// 今の時刻表示
function time(){
	//　時計表示
	let now_text = new Date();
	let nowMsec = +now_text;
	document.querySelector("#now").innerHTML = now_text.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'});

	//　startFlagがtrueのとき、切替時にチャイム鳴らす
	if(startFlag){
		if(isSwitchTime()) {
			// chime.play();
			// chime.pause();
			console.log('Ring the Chime!');
		}

	}
}


// console.log(nowT ==tt );

function isSwitchTime() {
	nowTime = new Date();
	nowTimeText = nowTime.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'});

	var isSwitchTime



		return isSwitchTime;
	// if(nowTimeText == pomoTime){
	// 	console.log('true');
	// }else{
	// 	console.log('false');
	// }
};

console.log(isSwitchTime());

// setIntervalのコールバック関数
// 時間が来たら音楽鳴らす
// pomoTimeに応じて、トマトマークをつける

// 配列を表示するボタンにつける関数
function addElement () {
	rmSchedule(); //今の配列を削除
	startFlag = true;
	const nowMsec = Date.now();
	// // object 生成-----------
	// // const nowMsec = Date.now();
	// const time_arr = [];
	const msecArray = makeMsecArray(nowMsec);
	const textArray = makePomoArray(msecArray);
	const objArray = makeObj(msecArray, textArray)
	console.log(objArray);
	// ---------------------
	addTextNode(objArray); // テキストノードを挿入

	chime.play();
}

function addTextNode(objArray){
	// div#pomoList > div#pomo$(1~8)
	console.log(objArray);
	counter = 1;
	objArray.forEach(obj => {
		let target = `#pomo${counter}`
		let pomoElem = document.querySelector(target);
		let pomoP = document.createElement("p");
		let pomoText = document.createTextNode(obj.textTime);
		pomoP.appendChild(pomoText);
		pomoElem.appendChild(pomoP);
		counter = counter + 1;
	});
}

function makeElement(){
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
}


// オブジェクト　（msecTime, textTime, isWorkTime, time)
function makeObj(msecArray, textArray){

  // let stateObj = {};
  const objArray = [];
  let counter = 0;
  let pomoTimes = 1;

  while(true){
		if(objArray.length > 8) break;
			// console.log(textArray[counter]);
			let stateObj = {};
      stateObj.msecTime = msecArray[counter];
      stateObj.textTime = textArray[counter];
      stateObj.time = pomoTimes;

      if(counter % 2 == 0){
        stateObj.isWorkTime = true;
      } else {
        stateObj.isWorkTime = false;
        pomoTimes = pomoTimes + 1;
      }
      objArray.push(stateObj);
      counter = counter + 1;
  }

  return objArray;

}

// 予定時刻をいれたMSEC配列を作成
function makeMsecArray(startTime){
	// const stateArray = []; //
  // const stateObj = {}
	// console.log(startTime);
  const TO_MINUTES = 1000 * 60; // ミリ秒を分に変換

	// let startTime_msec = startTime;　// 時刻をミリ秒に変換
	let time_arr = [];
  time_arr.push(startTime);
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

function rmSchedule () {

	let pomoList = document.querySelectorAll('#pomoList > div');

	pomoList.forEach(pomo =>{
		if(pomo.firstChild) pomo.removeChild(pomo.firstChild);
	})
}


function ringTheChime() {

	chime.play();
}

function stopTheChime(){
	chime.pause();
	chime.currentTime = 0;
}
