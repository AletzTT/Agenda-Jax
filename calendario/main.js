window.addEventListener('load', () => {

    //DOM
    const topdf = document.getElementById('topdf');
    const btn = document.getElementById('save');
    const wrapper = document.getElementById('Enero')

    //Vars

    var months = {
        'january' : 31,
        'february' : 28,
        'march' : 31,
        'april' : 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    }

    var opt = {
        margin:       0,
        filename:     'test.pdf',
        image: { 
            type: 'jpeg', 
            quality: 0.98 
        },
        html2canvas:  { 
            scale: 2,
            width: 1455,
            height: 1124,
            x: 222,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            windowWidth: 1500,
            windowHeight: 1500,
        },
        jsPDF: {
            unit: 'mm', 
            format: 'letter', 
            orientation: 'landscape'
        }
      };


    //Funcs

    function fillCalendar(month) {
        let len = months[month]

    }

    function isLeap(year) {
        return year % 100 !== 0 && year % 4 === 0;
    }

    function startDay(monthNumber) {
        let start = new Date()
    }



    btn.addEventListener('click', () => {
        html2pdf().set(opt).from(topdf).save();
    })

})