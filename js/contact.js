document.addEventListener('DOMContentLoaded', function() {
  let shelljs = new Shell('#typed',{
    typed:Typed,
    responsive:true,
    typeSpeed: 15,
    style: 'ubuntu',
    theme: 'dark',
    user: 'root',
    host: 'kali',
    commands:[
      {"input": "cat mathis.txt", "output":["A l'écoute d'opportunités pouvant satisfaire ma soif d'apprendre :)"]},
      {"input": "nmap dans-quel-domaine-je-veux-travailler.com", "output": [["STATE   SERVICE"],["open   cyber"],["open   dev backend (avec lien cyber)"]]}
  ]
  });
});
