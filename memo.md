// 配列を表示するボタンにつける関数
function addElement () {
	rmSchedule(); //今の配列を削除
	let p1 = document.querySelector("#pomoList");
	let p1_li = document.createElement("li");
	let p1_t = document.createTextNode("pomo1");
	p1_li.appendChild(p1_t);
	console.log(p1_li);

	p1.appendChild(p1_li);
	console.log(p1);

	arrayMilestones = makePomoArray(new Date());
	arrayMilestones.forEach(function(milestone){
		// 新しい要素を作成します
		let pomoSchedule = document.createElement("span");
		//　１つずつの要素をnewContentに格納
		let newContent = document.createTextNode(milestone);
		// 挿入する要素の参照を取得
		let Parent = document.getElementById("p1");
		// テキストノードを新規作成した h2 に追加します
		pomoSchedule.appendChild(newContent);
		// DOM に新しく作られた要素とその内容を追加します
		console.log(pomoSchedule);
		// Parent.insertBefore(pomoSchedule, );


	});
