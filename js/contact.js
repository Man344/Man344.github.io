let textToOutput = "Hello World";

let shelljs = new Shell('#typed',{
  typed:Typed,
  loop:true,
  responsive:true,
  typeSpeed: 10,
  style: 'ubuntu',
  theme: 'dark',
  user: 'root',
  host: 'man344',
  commands: [{"input":"cat hello.js", "output": "hello"},]
});
