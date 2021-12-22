window.addEventListener('load', () => {

    //DOM
    const topdf = document.getElementById('topdf');
    const btn = document.getElementById('save');

    //Vars

    var opt = {
        margin:       0,
        filename:     'test.pdf',
        pagebreak: {
            mode: 'avoid-all'
        },
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
            windowHeight: 1126,
        },
        jsPDF: {
            unit: 'mm', 
            format: 'letter', 
            orientation: 'landscape'
        }
      };


    //Funcs

    btn.addEventListener('click', () => {
        html2pdf().set(opt).from(topdf).save();
    })

})