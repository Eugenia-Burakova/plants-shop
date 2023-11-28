slidr.create('slidr-id', {
    after: function(e) {console.log('in: ' + e.in.slidr);},
    before: function(e) {console.log('out: ' + e.out.slidr);},
    bredcrumbs: false,
    controls: 'border',
    direction: 'horizontal',
    fade: false,
    keyboard: true,
    overflow: true,
    theme: rgba(0, 0, 0, 0.96),
    timing: {'cube': '0,5s ease-in'},
    touch: true,
    transition: 'cube'
}).start();

  