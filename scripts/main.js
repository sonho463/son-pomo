// タイマーの基本仕様としては超小さいもの
// 休憩時間になると、ウィンドウがでかくなって通知
// あるいは、音楽を流す？

// nowで開始時刻を取得してその差を使うというアイディア

//　開始時刻取得

function getStartTime(){
	const startTime = new Date();

	console.log(`${startTime}に始まりました`);
}


function getEndTime(){
	const endTime = new Date();
	console.log(`${endTime}に終了`);
}

function getElapsedTime(start,end){
	let elapsedTime = end.getTime() - start.getTime()
	console.log(elapsedTime);
}


function Message () {
	console.log('25');
}

function Timer() {
	let counter = 6

	counter % 3 != 0 ?
	window.setTimeout( Message, 2*1000 ) : alert('3の倍数')

}

// setTimeoutの第1引数は関数　ー＞　記載するときに（）はいらないけど、関数として認識されている？
