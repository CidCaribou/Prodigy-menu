javascript:(function(){fetch('https://gitlab.com/blooket/blooket-cheats/-/raw/main/cheats/gui.js?ref_type=heads')
.then(function(response){return response.text();})
.then(function(scriptContent){eval(scriptContent);})
