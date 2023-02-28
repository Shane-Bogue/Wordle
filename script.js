const wordArr = [
'Taste','Tough','Pride','Rapid',
'Rural', 'Allow','Aside','Begun',
'Bench', 'Fixed','Grade','Index',
'About','Alert','Argue','Beach',
'Above','Alike','Arise','Began',
'Abuse','Alive','Begin','Actor',
'Acute','Alone','Asset','Being',
'Admit','Along','Below','Adopt',
'Adult','Among','Avoid','Billy',
'After','Anger','Award','Birth',
'Again','Angle','Aware','Black',
'Agent','Angry','Badly','Blame',
'Agree','Apart','Baker','Blind',
'Ahead','Apple','Bases','Block',
'Alarm','Apply','Basic','Blood',
'Album','Arena','Basis','Board',
'Boost','Buyer','China','Cover',
'Booth','Cable','Chose','Craft',
'Bound','Calif','Civil','Crash',
'Brain','Carry','Claim','Cream',
'Brand','Catch','Class','Crime',
'Bread','Cause','Clean','Cross',
'Break','Chain','Clear','Crowd',
'Breed','Chair','Click','Crown',
'Brief','Chart','Clock','Curve',
'Bring','Chase','Close','Cycle',
'Broad','Cheap','Coach','Daily',
'Broke','Check','Coast','Dance',
'Brown','Chest','Could','Dated',
'Build','Chief','Count','Dealt',
'Built','Child','Court','Death',
'Debut','Entry','Forth','Group',
'Delay','Equal','Forty','Grown',
'Depth','Forum','Guard','Doing',
'Dozen','Exact','Frank','Guide',
'Draft','Exist','Fraud','Happy',
'Drama','Extra','Fresh','Harry',
'Drawn','Faith','Front','Heart',
'Dream','False','Fruit','Heavy',
'Dress','Fault','Fully','Hence',
'Drill','Fiber','Funny','Night',
'Drink','Field','Giant','Horse',
'Drive','Fifth','Given','Hotel',
'Drove','Fifty','Glass','House',
'Dying','Fight','Globe','Human',
'Eager','Final','Going','Ideal',
'Early','First','Grace','Earth',
'Eight','Flash','Grand','Inner',
'Elite','Fleet','Grant','Input',
'Empty','Floor','Grass','Issue',
'Enemy','Fluid','Great','Irony',
'Enjoy','Focus','Green','Juice',
'Enter','Force','Gross','Joint',
'Judge','Metal','Media','Newly',
'Known','Local','Might','Noise',
'Label','Logic','Minor','North',
'Large','Loose','Minus','Noted',
'Laser','Lower','Mixed','Novel',
'Later','Lucky','Model','Nurse',
'Laugh','Lunch','Money','Occur',
'Layer','Lying','Month','Ocean',
'Learn','Magic','Moral','Offer',
'Lease','Major','Motor','Often',
'Least','Maker','Mount','Order',
'Leave','March','Mouse','Other',
'Legal','Music','Mouth','Ought',
'Level','Match','Movie','Paint',
'Light','Mayor','Needs','Paper',
'Limit','Meant','Never','Party',
'Peace','Power','Radio','Round',
'Panel','Press','Raise','Route',
'Phase','Price','Royal','Phone',
'Photo','Prime','Ratio','Scale',
'Piece','Print','Reach','Scene',
'Pilot','Prior','Ready','Scope',
'Pitch','Prize','Refer','Score',
'Place','Proof','Right','Sense',
'Plain','Proud','Rival','Serve',
'Plane','Prove','River','Seven',
'Plant','Queen','Quick','Shall',
'Plate','Sixth','Stand','Shape',
'Point','Quiet','Roman','Share',
'Pound','Quite','Rough','Sharp',
'Sheet','Spare','Style','Times',
'Shelf','Speak','Sugar','Tired',
'Shell','Speed','Suite','Title',
'Shift','Spend','Super','Today',
'Shirt','Spent','Sweet','Topic',
'Shock','Split','Table','Total',
'Shoot','Spoke','Taken','Sport',
'Shown','Staff','Taxes','Tower',
'Sight','Stage','Teach','Track',
'Since','Stake','Teeth','Trade',
'Sixty','Start','Texas','Treat',
'Sized','State','Thank','Trend',
'Skill','Steam','Theft','Trial',
'Sleep','Steel','Their','Tried',
'Slide','Stick','Theme','Tries',
'Small','Still','There','Truck',
'Smart','Stock','These','Truly',
'Smile','Stone','Thick','Trust',
'Smith','Stood','Thing','Truth',
'Smoke','Store','Think','Twice',
'Solid','Storm','Third','Under',
'Solve','Story','Those','Undue',
'Sorry','Strip','Three','Union',
'Sound','Stuck','Threw','Unity',
'South','Study','Throw','Until',
'Space','Stuff','Tight','Upper',
'Upset','Whole','Waste','Wound',
'Urban','Whose','Watch','Write',
'Usage','Woman','Water','Wrong',
'Usual','Train','Wheel','Wrote',
'Valid','World','Where','Yield',
'Value','Worry','Which','Young',
'Video','Worse','While','Youth',
'Virus','Worst','White','Worth',
'Visit','Would','Vital','Voice',
'Found','Guess','Every','Frame',
]

let UI = {
    section: document.createElement('section'),
    paragraph: document.createElement('p'),
    div: document.createElement('div'),
    inputs: []
}

class Display {
    static FormatPage() {
        UI.section.append(UI.paragraph,UI.div)
        document.body.append(UI.section,Words.correctAnswer)
    }

    static ListWords() {
        UI.paragraph.textContent = Words.displayed.join(', ')
    }
}

class WordValues {
    constructor(displayed) {
        this.displayed = displayed;
        this.correctAnswer = getRanIndex(this.displayed).toLowerCase()
    }
}

const getRanIndex = (arr) => arr[~~(Math.random()*arr.length)]

const wordCompare = (w1,w2) => {let total = 0; [...w1].forEach((e,i)=> e == [...w2][i]? total++ : null); return total;}

let displayedWords = []
for (i = 0; i < 40; i++) {
    displayedWords.unshift(getRanIndex(wordArr))
}

const Words = new WordValues(displayedWords)

Words.correctAnswer.split('').forEach(() => {
    const input = document.createElement('input')
    input.type = 'text'
    input.maxLength = '1'
    UI.inputs.push(input)
})

UI.inputs.forEach((input,i,arr) => {
    UI.div.append(input)
    input.addEventListener('input', function() {
        (arr[i+1] || arr[i]).focus()
    })
    input.addEventListener('keydown', function(key) {
        if (arr[i].value.length == 0 && key.keyCode == 46 ){
            arr[i-1].focus()
            arr[i-1].value = ''
        } else if ( key.keyCode == 46 ) {
            arr[i].value = ''
            arr[i-1].focus()
        } else if (arr[i].value.length == 1){
            (arr[i+1] || arr[i]).focus()
        }
    })
})

Display.FormatPage()
Display.ListWords()

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        let submittedWord = ''
        UI.inputs.forEach(input => submittedWord += input.value)
        submittedWord.toLowerCase();
        submittedWord  == Words.correctAnswer? alert('Correct'): alert(`${wordCompare(submittedWord.toLowerCase(),Words.correctAnswer)}/5`)
    }
})

