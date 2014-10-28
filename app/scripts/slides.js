window.slides = [
    { title: 'Web performance optimization' },
    { title: 'Što optimizirati?', bullets: ['Prvi render', 'Smooth experience'] },
    { title: 'Critical Path Rendering' },
    { title: 'Proces renderiranja', bullets: ['Primi html', 'DOM', 'CSSOM', 'Render tree', 'Layout', 'Crtanje'] },
    { title: 'Kreiranje DOM-a (ili kod susjeda)', bullets: ['Znakovlje HTML-a', 'Tokeni', 'Nodeovi', 'DOM']},
    { image: '../img/full-process.png' },
    { title: 'CSSOM', image: '../cssom-tree.png' },
    { quote: 'Ti si pjesma moje duše...', cite: 'MMK'},
    { title: 'Render tree', image: '../img/render-tree-construction.png' },
    { title: 'Render tree', code: '../snippets/layout.html' },
    { title: 'Render blocking css', code: '../snippets/renderblockingcss.html' },
    { title: 'Critical Path Rendering Anal-iza', bullets: ['Critical resources', 'Critical Path Lenght', 'Critical bytes']},
    { title: 'Critical Path Rendering jednostavan primjer', code: '../snippets/cpr_nostyle.html' },
    { title: 'Critical Path Rendering jednostavan primjer', image: '../img/analysis-dom.png' },
    { title: 'Critical Path Rendering - eksterni css', code: '../snippets/analiza_css.html' },
    { title: 'Critical Path Rendering - eksterni css', image: '../img/analysis-dom-css.png' },
    { title: 'Critical Path Rendering - eksterni js (render blocking)', code: '../snippets/analysis_with_css_js.html' },
    { title: 'Critical Path Rendering - eksterni js (render blocking)', image: '../img/analysis-dom-css-js.png' },
    { title: 'Critical Path Rendering - eksterni js (async)', code: '../snippets/analysis_with_css_js_async.html' },
    { title: 'Critical Path Rendering - eksterni js (async)', image: '../img/analysis-dom-css-js-async.png' },
    { title: 'Kako optimizirati?', bullets: ['Smanjiti broj kritičnih fileova', 'Smanjiti količinu kritičnih byteova', 'Smanjiti minimalnu duljinu CRP-a'] },
    { title: 'Strategija za optimizaciju', bullets: ['Analizirati CRP', 'Minificirati fileove', 'Inlineati kritičan css', 'Koristiti media querye', 'Concatenate css/js fileova', '...'] },
    { title: 'Smooth (lubricated) experience' },
    { title: 'Što čini glatko iskustvo?', bullets: ['Visoki fps (konstantno > 30)', 'glatko skrolanje', 'glatke animacije'] },
    { title: 'Što je fps?' },
    { title: 'fps', image: '../img/fps_auto.png' },
    { title: 'Ako želimo 60fps koliko vremena imamo?', image: '../img/fps_graf.png' },
    { title: 'Koliko je stvarno fps bitan?' },
    { title: 'Što uzrokuje mali fps?', bullets: ['previše posla unutar event handlera', 'DOM manipulacija za vrijeme scrolla', 'Dekodiranje slika', 'Nepotrebno velike slike', 'JS animacije', 'Teški CSS'] },
    { title: 'Top lista skupog css-a?', bullets: ['border-radius', 'box-shadow', 'transforms', 'linear-gradient', 'background-position: fixed'] },
    { title: 'Paint i Repaint', bullets: ['Paint: Prvi render DOM Render objekta', 'Repaint: Ponovno crtanje dijela ili cijele stranice. Skupa operacija!'] },
    { title: 'Što uzrokuje repaint?', bullets: ['Hover', 'DOM manipulacija koja uzrokuje recalc layouta', 'Skrivanje prikazivanje layouta'] },
    { title: 'Optimizacija za napredne', bullets: ['GPU Hacks', 'DevTools Analiza', 'CSS trickovi', 'Grunt taskovi'] },
    { quote: 'Dižem ruku, a vi pjevate...', cite: 'MMK'}

]