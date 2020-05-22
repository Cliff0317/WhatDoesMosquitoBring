var score = 0
var answer = document.getElementById("answer")
var question = document.getElementById("question")
var q = ["1.防治登革熱最根本的方法是？",
"2.重複感染登革熱會引起出血性登革熱，嚴重的話會？", 
"3.埃及斑蚊和白線斑蚊叮咬人的時間是在？",
"4.蚊子的幼蟲住在",
"5.為了防治登革熱，每個人都要注意居家清潔、清除積水容器。",
"6.不用的花盆、水桶平日可以用來承接雨水，以備不時之需。",
"7.哪項是有效防止孑孓生長的方法?",
"8.以下哪個不是登革熱的症狀？"
]
var a = [["防止病媒蚊孳生", "增強抵抗力"],
["會有生命危險", "不會有生命危險"], 
["白天", "晚上"],
["水裡","土裡","大腸裡"],
["是","否"],
["是","否"],
["水缸中養會吃孑孓的小魚","種水草"],
["發燒頭痛","骨頭、關節、肌肉及後眼窩疼","發燒4～6天後皮膚出現紅疹","拉肚子"]]
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
var i = 0;
var result = [0, 0, 0, 0, 0, 1, 0, 3]
for (var counter = 0; counter < result.length; counter++) {
    result[counter]++
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function initialize() {
    let currentQ = q[i]
    let currentA = a[i]
    question.innerText = currentQ
    removeOptions(answer);
    answer.selectedIndex = 0
    var option = document.createElement("option")
    option.text = "選擇答案"
    answer.add(option)
    for (var index = 0; index < currentA.length; index++) {
        var option = document.createElement("option")
        option.text = currentA[index]
        answer.add(option)
    }
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function check() {
    let A = result[i]
    let userInput = answer.selectedIndex
    if (userInput == A) {
        document.getElementById("correct").play()
        alert("正確答案！做得好！")
        score++
    } else if (userInput == 0) {
        alert("您沒有選擇任何答案。")
        return
    } else {
        document.getElementById("wrong").play()
        alert(`嗯...您的答案不正確。 答案實際上是答案${A}: ${a[i][A-1]}。`)
    }
    i++
    if (i == q.length) {
        alert(`您完成了考試並獲得了${score}分；在所有答案中，您有${score}個問題是正確的，而您有${q.length - score}個問題是不正確的。`)
        window.location.reload()
        return
    }
    initialize()
}

function next() {
    i++
    if (i == q.length) {
        i = 0
        initialize()
    } else {
        initialize()
    }
}

function last() {
    i--
    if (i == -1) {
        i = q.length - 1
        initialize()
    }
    else {
        initialize()
    }
}

initialize()