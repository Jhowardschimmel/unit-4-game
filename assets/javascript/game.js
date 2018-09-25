
//game object
var crystalCollecter = {
    goal: Math.floor((Math.random() * 101) + 19),
    wins: 0,
    losses: 0,
    score: 0,
    kokiriEmerald: Math.floor((Math.random() * 12) + 1),
    goronsRuby: Math.floor((Math.random() * 12) + 1),
    zorasSapphire: Math.floor((Math.random() * 12) + 1),
    triforce: Math.floor((Math.random() * 12) + 1),

    reset: function () {
        this.goal = Math.floor((Math.random() * 101) + 19);
        this.score = 0;

        //screen reset
        $('#goalnumber').text(crystalCollecter.goal);
        $('#scorenumber').append(crystalCollecter.score);

    },

    checkWinLose: function () {
        if (crystalCollecter.score === crystalCollecter.goal) {
            crystalCollecter.wins++;
            $('#wins').text(crystalCollecter.wins);
            alert('You Win!');
            crystalCollecter.reset();
        }

        else if (crystalCollecter.score > crystalCollecter.goal) {
            crystalCollecter.losses++;
            $('#losses').text(crystalCollecter.losses);
            alert('You Lose!');
            crystalCollecter.reset();
        }
    }
}

//gemstones
var kokiriEmerald = { random: Math.floor((Math.random() * 12) + 1) }
var goronsRuby = { random: Math.floor((Math.random() * 12) + 1) }
var zorasSapphire = { random: Math.floor((Math.random() * 12) + 1) }
var triforce = { random: Math.floor((Math.random() * 12) + 1) }

window.onload = function () {
    $('#goalnumber').text(crystalCollecter.goal);
    $('#scorenumber').append(crystalCollecter.score);
};
$('#instructions').hide();
$('#helpbutton').on('click', function () {
    $('#helpbutton').text('Hide');
    $('#instructions').show();
    $('#helpbutton').on('click', () => {
        $('#instructions').hide();
        $('#helpbutton').hide();
    });
});

$('#kokiriemerald').on('click', function () {

    crystalCollecter.score += kokiriEmerald.random;
    crystalCollecter.checkWinLose();
    $('#scorenumber').text(crystalCollecter.score);
    console.log(crystalCollecter.score);


})
$('#goronsruby').on('click', function () {

    crystalCollecter.score += goronsRuby.random;
    crystalCollecter.checkWinLose();
    $('#scorenumber').text(crystalCollecter.score);
})
$('#zorassapphire').on('click', function () {

    crystalCollecter.score += zorasSapphire.random;
    crystalCollecter.checkWinLose();
    $('#scorenumber').text(crystalCollecter.score);
})

$('#triforce').on('click', function () {

    crystalCollecter.score += triforce.random;
    crystalCollecter.checkWinLose();
    $('#scorenumber').text(crystalCollecter.score);
})
console.log(crystalCollecter.score);