let secretCode = [' + -- + - + - ', ' + --- + - + ', ' + -- + - + - ', ' + - + - + - + '];

let solvedCode = '';
for (var eachCode of secretCode) {
    var replacedCode = eachCode.replace(/ /g, '').replace(/-/g, 0).replace(/\+/g, 1);
    console.log(replacedCode);
    var changed2Num = parseInt(replacedCode, 2)
    console.log(changed2Num);
    var transform2Char = String.fromCharCode(changed2Num);
    console.log(transform2Char);
    solvedCode += transform2Char;
};

console.log("해석된 암호:"+solvedCode);


console.log("-----------------------------------------------------------------------")

let 돌의내구도 = [1, 2, 1, 4]
let 더많은돌의내구도 = [5, 3, 4, 1, 3, 8, 3]
const 독 = [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
]

function 징검다리건너기(돌의내구도, 독){
    let answer = [];

    for (var each of 독){
        let location = 0;
        let fail = false;
        while (location < 돌의내구도.length-1){
            location += parseInt(each['점프력'], 10);
            돌의내구도[location-1] -= parseInt(each['몸무게'], 10);
            if (돌의내구도[location-1] < 0){
                fail = true;
                break;
            }
        }
        if (!fail){
            answer.push(each['이름']);
        }
    }
    return answer;
}

console.log("생존자 : " + 징검다리건너기(돌의내구도, 독))
console.log("생존자 : " + 징검다리건너기(더많은돌의내구도, 독))

console.log("-----------------------------------------------------------------------")

let 대기인원 = 14000605;

/*
시간        탑승인원    누적인원
9시         25          25
9시 10분    15          40
9시 20분    15          55
9시 30분    15          70
9시 40분    15          85
9시 50분    15          100

(오전 9시 00분 ~ 오후 8시 59분) 
12시간 100명 = 1200명
*/


function 배를건너는시간(대기인원){
    let 년 = 0, 월 = 0, 일 = 0, 시 = 0, 분 = 0;

    let 걸린일수 = 대기인원/1200;

    let 일년일수 = 0;
    for (var i = 10; i > 0; i--){
        일년일수 +=  2 ** i;
    }
    
    년 = parseInt(걸린일수/일년일수, 10);

    let 나머지일수 = 걸린일수%일년일수;
    let 걸린월수 = 0;
    for (var i = 10; i > 0; i--){
        걸린월수 ++;
        if(나머지일수 < 2**i){
            break
        }
        나머지일수 = 나머지일수 - 2**i;
    }

    일 = parseInt(나머지일수, 10);
    월 = parseInt(걸린월수 - 1, 10);

    
    let 누적인원 = [25, 40, 55, 70, 85, 100];
    let 분단위 = 0;

    for (var 분당누적인원 in 누적인원){
        if(누적인원[분당누적인원] > (대기인원%1200)%100){
            분단위 = 분당누적인원 * 10;
            break;
        }
    }

    시 = parseInt((대기인원%1200)/100 + 9, 10);

    let date = new Date();

    console.log(date)

    let finalMin = 분단위 + date.getMinutes();
    if (finalMin > 60) {
        finalMin = finalMin - 60;
        시 += 1;
    }

    분 = parseInt(finalMin, 10);

    return `
    ${년}년
    ${월}월
    ${일}일
    ${시}시
    ${분}분
    `
}

console.log(배를건너는시간(대기인원))

console.log("-----------------------------------------------------------------------")

let 동물 = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류'];

function 페이지교환(동물, 자리){

    let 의자 = [];
    let answer = 0;

    for (var 개별동물 of 동물){
        if (의자.length < 3){
            if(의자.includes(개별동물)){
                의자.splice(의자.indexOf(개별동물), 1);
                의자.push(개별동물);
                answer += 1;
            } else {
                의자.push(개별동물);
                answer += 60;
            }
        } else {
            if(의자.includes(개별동물)){
                의자.splice(의자.indexOf(개별동물), 1);
                의자.push(개별동물)
                answer += 1;
            } else {
                의자.shift()
                의자.push(개별동물);
                answer += 60;
            }
        }
        console.log(의자)
    }
    return `${parseInt(answer/60,10)}분 ${parseInt(answer%60)}초 걸렸고 의자에는 ${의자}가 앉아있습니다`
}

console.log(페이지교환(동물, 3));

console.log("-----------------------------------------------------------------------")

    graph = {100: new Set([67, 66]),
        67: new Set([100, 82, 63]),
        66: new Set([100, 73, 69]),
        82: new Set([67, 61, 79]),
        63: new Set([67]),
        73: new Set([66]),
        69: new Set([66, 65, 81]),
        61: new Set([82]),
        79: new Set([82, 87, 77]),
        65: new Set([69, 84, 99]),
        81: new Set([69]),
        87: new Set([79, 31, 78]),
        77: new Set([79]),
        84: new Set([65]),
        99: new Set([65]),
        31: new Set([87]),
        78: new Set([87])};

    function 깊이우선탐색최대값(graph, start){
        let 방문 = [];
        let stack = [start];

        while (stack){

            let n = 0;
            n = stack.pop();

            if(!방문.includes(n)){
                방문.push(n);
                let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
                if ([...차집합].length == 0){
                    break;
                }

                stack.push(Math.max(...차집합));
                
                // for (var v of 차집합) {
                //     stack.push(v);
                // }

                console.log(`방문 : ${방문}`);
                console.log(`스택 : ${stack}`);

            }

            if (stack.length == 0){
                break;
            }

        }
        return 방문;
    }

    function 깊이우선탐색최소값(graph, start){
        let 방문 = [];
        let stack = [start];

        while (stack){

            let n = 0;
            n = stack.pop();

            if(!방문.includes(n)){
                방문.push(n);
                let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
                if ([...차집합].length == 0){
                    break;
                }

                stack.push(Math.min(...차집합));
                
                // for (var v of 차집합) {
                //     stack.push(v);
                // }

                console.log(`방문 : ${방문}`);
                console.log(`스택 : ${stack}`);

            }

            if (stack.length == 0){
                break;
            }

        }
        return 방문;
    }
    
    let maxResult = 깊이우선탐색최대값(graph, 100);
    let minResult = 깊이우선탐색최소값(graph, 100)
    let charMax ='';
    let charMin = '';
    for (var v of maxResult){
        charMax += String.fromCharCode(v)
    }
    for (var v of minResult){
        charMin += String.fromCharCode(v)
    }
    console.log(charMax, charMin)

    console.log("-----------------------------------------------------------------------")

    let sample = [];

    let 첫번째밭 = [
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 1],
    ]

    let 두번째밭 = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 3],
        [0, 0, 0, 0, 4],
        [0, 2, 0, 0, 2],
        [4, 5, 0, 2, 0],
    ]

    for (var i = 0; i < 첫번째밭.length; i++){
        sample[i] = (new Array(첫번째밭[0].length));
    }

    for (var i = 0; i < 두번째밭.length; i++){
        for (var j = 0; j < 두번째밭[0].length; j++){
            sample[i][j] = 두번째밭[j][두번째밭[0].length-1-i];
            sample[i][j] += 첫번째밭[i][j];
        }
    }

    console.log(sample);

    let solvedString = '';
    for (var row of sample){
        solvedString += String.fromCharCode(parseInt(row.join(''), 8));
    }

    console.log(solvedString);

    console.log("-----------------------------------------------------------------------")

    // let cross = [
    //                [
    //                 [1, 5, 0, 1, 0],
	// 		 	    [0, 1, 6, 7, 0],
	// 			    [6, 2, 3, 2, 1],
	// 			    [1, 0, 1, 1, 1],
    //                 [0, 2, 0, 1, 0]
    //               ],
    //               [
    //                 [0, 3, 0, 1, 0],
	// 		 	    [1, 2, 5, 4, 4],
	// 			    [0, 0, 3, 0, 0],
	// 			    [1, 2, 5, 0, 1],
    //                 [0, 0, 0, 0, 0]
    //               ],
	// 		 	  [
    //                 [3, 0, 1, 1, 8],
	// 		 	    [5, 0, 4, 5, 4],
	// 			    [1, 5, 0, 5, 1],
	// 			    [1, 2, 1, 0, 1],
    //                 [0, 2, 5, 1, 1]
    //               ],
	// 			  [
    //                 [1, 0, 3, 3, 3],
	// 		 	    [5, 1, 2, 2, 4],
	// 			    [1, 5, 1, 2, 4],
	// 			    [4, 4, 1, 1, 1],
    //                 [4, 4, 1, 1, 1]
    //               ],
	// 			  [
    //                 [1, 2, 0, 3, 3],
	// 		 	    [1, 2, 0, 2, 4],
	// 			    [1, 2, 0, 2, 4],
	// 			    [4, 2, 0, 0, 1],
	// 			    [8, 4, 1, 1, 0]],
	// 			 [
    //                 [1, 0, 3, 0, 0],
	// 		 	    [1, 1, 0, 2, 4],
	// 			    [0, 0, 1, 2, 4],
	// 			    [4, 0, 1, 0, 1],
    //                 [0, 0, 1, 0, 1]
    //              ]
    //             ]

    let c = [
        [3, 0, 1, 1, 8],
        [5, 0, 4, 5, 4],
        [1, 5, 0, 5, 1],
        [1, 2, 1, 0, 1],
        [8, 2, 5, 1, 1]
    ]

    let acc = Array(5).fill(0).map(() => Array(5).fill(0));
   

    for (var i = 0; i < c.length; i++){
        for (var j = 0; j < 5; j++){
            if (i == 0 && j == 0){
                acc[0][0] = c[0][0];
            } else if (i == 0){
                acc[i][j] = acc[i][j-1] + c[i][j];
            } else if (j == 0){
                acc[i][j] = acc[i-1][j] + c[i][j];
            } else {
                acc[i][j] = Math.min(acc[i][j-1], acc[i-1][j]) + c[i][j]
            }
        }
    }

    console.log(acc)

    let axis = Array(c.length).fill(0).map(() => Array(c.length).fill(0).map(() => Array(2).fill(0)));
    console.log(axis)
