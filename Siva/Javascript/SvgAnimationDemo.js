var s = new Snap('.snap'),
    els = s.selectAll('.animate'),
    translateAnim;

translateAnim = function (el) {
  console.log( el.node.dataset.easing)
  el.animate({
    transform:'t200,0'
  }, 2000, mina[el.node.dataset.easing],  function () {
    el.animate({
      transform:'t0,0'
    }, 2000, mina[el.node.dataset.easing]);
  });
};

function run () {
  for (var i = els.length - 1; i >= 0; i--) {
    translateAnim(els[i]);
  }
  
  setTimeout(run, 5000);
};

run();