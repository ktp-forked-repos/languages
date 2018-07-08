// Generated by CoffeeScript 2.2.1
(function() {
  this.COLORS = {
    // GitHub colors
    '1C Enterprise': '#814CCC',
    'ABAP': '#E8274B',
    'AGS Script': '#B9D9FF',
    'AMPL': '#E6EFBB',
    'ANTLR': '#9DC3FF',
    'APL': '#5A8164',
    'ASP': '#6A40FD',
    'ATS': '#1AC620',
    'ActionScript': '#882B0F',
    'Ada': '#02F88C',
    'Agda': '#315665',
    'Alloy': '#64C800',
    'AngelScript': '#C7D7DC',
    'AppleScript': '#101F1F',
    'Arc': '#AA2AFE',
    'AspectJ': '#A957B0',
    'Assembly': '#6E4C13',
    'AutoHotkey': '#6594B9',
    'AutoIt': '#1C3552',
    'Ballerina': '#FF5000',
    'Batchfile': '#C1F12E',
    'BlitzMax': '#CD6400',
    'Boo': '#D4BEC1',
    'Brainfuck': '#2F2530',
    'C': '#555555',
    'C#': '#178600',
    'C++': '#F34B7D',
    'Ceylon': '#DFA535',
    'Chapel': '#8DC63F',
    'Cirru': '#CCCCFF',
    'Clarion': '#DB901E',
    'Clean': '#3F85AF',
    'Click': '#E4E6F3',
    'Clojure': '#DB5855',
    'CoffeeScript': '#244776',
    'ColdFusion': '#ED2CD6',
    'Common Lisp': '#3FB68B',
    'Common Workflow Language': '#B5314C',
    'Component Pascal': '#B0CE4E',
    'Crystal': '#776791',
    'Cuda': '#3A4E3A',
    'D': '#BA595E',
    'DM': '#447265',
    'Dart': '#00B4AB',
    'DataWeave': '#003A52',
    'Dockerfile': '#0DB7ED',
    'Dogescript': '#CCA760',
    'Dylan': '#6C616E',
    'E': '#CCCE35',
    'ECL': '#8A1267',
    'EQ': '#A78649',
    'Eiffel': '#946D57',
    'Elixir': '#6E4A7E',
    'Elm': '#60B5CC',
    'Emacs Lisp': '#C065DB',
    'EmberScript': '#FFF4F3',
    'Erlang': '#B83998',
    'F#': '#B845FC',
    'FLUX': '#88CCFF',
    'Factor': '#636746',
    'Fancy': '#7B9DB4',
    'Fantom': '#14253C',
    'Forth': '#341708',
    'Fortran': '#4D41B1',
    'FreeMarker': '#0050B2',
    'Frege': '#00CAFE',
    'Game Maker Language': '#8FB200',
    'Genie': '#FB855D',
    'Gherkin': '#5B2063',
    'Glyph': '#C1AC7F',
    'Gnuplot': '#F0A9F0',
    'Go': '#375EAB',
    'Golo': '#88562A',
    'Gosu': '#82937F',
    'Grammatical Framework': '#79AA7A',
    'Groovy': '#E69F56',
    'Hack': '#878787',
    'Harbour': '#0E60E3',
    'Haskell': '#5E5086',
    'Haxe': '#DF7900',
    'HiveQL': '#DCE200',
    'Hy': '#7790B2',
    'IDL': '#A3522F',
    'Idris': '#B30000',
    'Io': '#A9188D',
    'Ioke': '#078193',
    'Isabelle': '#FEFE00',
    'J': '#9EEDFF',
    'JSONiq': '#40D47E',
    'Java': '#B07219',
    'JavaScript': '#F1E05A',
    'Jolie': '#843179',
    'Julia': '#A270BA',
    'KRL': '#28430A',
    'Kotlin': '#F18E33',
    'LFE': '#4C3023',
    'LLVM': '#185619',
    'LOLCODE': '#CC9900',
    'LSL': '#3D9970',
    'Lasso': '#999999',
    'Lex': '#DBCA00',
    'LiveScript': '#499886',
    'LookML': '#652B81',
    'Lua': '#000080',
    'MAXScript': '#00A6A6',
    'MQL4': '#62A8D6',
    'MQL5': '#4A76B8',
    'Makefile': '#427819',
    'Matlab': '#E16737',
    'Max': '#C4A79C',
    'Mercury': '#FF2B2B',
    'Meson': '#007800',
    'Metal': '#8F14E9',
    'Mirah': '#C7A938',
    'NCL': '#28431F',
    'Nearley': '#990000',
    'Nemerle': '#3D3C6E',
    'NetLinx': '#0AA0FF',
    'NetLinx+ERB': '#747FAA',
    'NetLogo': '#FF6375',
    'NewLisp': '#87AED7',
    'Nextflow': '#3AC486',
    'Nim': '#37775B',
    'Nit': '#009917',
    'Nix': '#7E7EFF',
    'Nu': '#C9DF40',
    'OCaml': '#3BE133',
    'Objective-C': '#438EFF',
    'Objective-C++': '#6866FB',
    'Objective-J': '#FF0C5A',
    'Omgrofl': '#CABBFF',
    'Opal': '#F7EDE0',
    'Oxygene': '#CDD0E3',
    'Oz': '#FAB738',
    'P4': '#7055B5',
    'PAWN': '#DBB284',
    'PHP': '#4F5D95',
    'PLSQL': '#DAD8D8',
    'Pan': '#CC0000',
    'Papyrus': '#6600CC',
    'Parrot': '#F3CA0A',
    'Pascal': '#E3F171',
    'Pep8': '#C76F5B',
    'Perl': '#0298C3',
    'Perl 6': '#0000FB',
    'PigLatin': '#FCD7DE',
    'Pike': '#005390',
    'PogoScript': '#D80074',
    'PowerBuilder': '#8F0F8D',
    'PowerShell': '#012456',
    'Processing': '#0096D8',
    'Prolog': '#74283C',
    'Propeller Spin': '#7FA2A7',
    'Puppet': '#302B6D',
    'PureBasic': '#5A6986',
    'PureScript': '#1D222D',
    'Python': '#3572A5',
    'QML': '#44A51C',
    'R': '#198CE7',
    'Racket': '#22228F',
    'Ragel': '#9D5200',
    'Rascal': '#FFFAA0',
    'Rebol': '#358A5B',
    'Red': '#F50000',
    "Ren'Py": '#FF7F7F',
    'Ring': '#2D54CB',
    'Rouge': '#CC0088',
    'Ruby': '#701516',
    'Rust': '#DEA584',
    'SAS': '#B34936',
    'SQF': '#3F3F3F',
    'SaltStack': '#646464',
    'Scala': '#C22D40',
    'Scheme': '#1E4AEC',
    'Self': '#0579AA',
    'Shell': '#89E051',
    'Shen': '#120F14',
    'Slash': '#007EFF',
    'Smalltalk': '#596706',
    'Solidity': '#AA6746',
    'SourcePawn': '#5C7611',
    'Squirrel': '#800000',
    'Stan': '#B2011D',
    'Standard ML': '#DC566D',
    'SuperCollider': '#46390B',
    'Swift': '#FFAC45',
    'SystemVerilog': '#DAE1C2',
    'TI Program': '#A0AA87',
    'Tcl': '#E4CC98',
    'Terra': '#00004C',
    'Turing': '#CF142B',
    'TypeScript': '#2B7489',
    'UnrealScript': '#A54C4D',
    'VCL': '#148AA8',
    'VHDL': '#ADB2CB',
    'Vala': '#FBE5CD',
    'Verilog': '#B2B7F8',
    'Vim script': '#199F4B',
    'Visual Basic': '#945DB7',
    'Volt': '#1F1F1F',
    'WebAssembly': '#04133B',
    'X10': '#4B6BEF',
    'XC': '#99DA07',
    'XQuery': '#5232E7',
    'XSLT': '#EB8CEB',
    'Yacc': '#4B6C4B',
    'Zephir': '#118F9E',
    'eC': '#913960',
    'nesC': '#94B0C7',
    'ooc': '#B0B77E',
    'q': '#0040CD',
    'sed': '#64B970',
    'wdl': '#42F1F4',
    'wisp': '#7582D1',
    'xBase': '#403A40',
    // Custom colors
    'Visual Basic .NET': '#945DB7',
    'Machine Code': '#000000',
    'Java Bytecode': '#222222',
    'CIL': '#222222',
    'LLVM IR': '#222222'
  };

}).call(this);

//# sourceMappingURL=colors.js.map
