document.addEventListener('DOMContentLoaded', function() {
  let shelljs = new Shell('#typed',{
    typed:Typed,
    responsive:true,
    typeSpeed: 10,
    style: 'ubuntu',
    theme: 'dark',
    user: 'root',
    host: 'man344',
    commands:[
    "Hi recruiters !",
    {"input": "node helloRectruiter.js", "output":[ "I would be happy to join your company"]},
  ]
  });
});
