//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; //stream from getUserMedia()
var rec; //Recorder.js object
var input; //MediaStreamAudioSourceNode we'll be recording
var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");

// shim for AudioContext when it's not avb.
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record


//add events to those 2 buttons
if (recordButton && stopButton) {
    recordButton.addEventListener("click", startRecording);
    stopButton.addEventListener("click", stopRecording);
}

function startRecording() {
    console.log(1);
    var constraints = { audio: true, video: false }

    recordButton.disabled = true;
    stopButton.disabled = false;

    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        audioContext = new AudioContext();
        gumStream = stream;

        input = audioContext.createMediaStreamSource(stream);

        rec = new Recorder(input, { numChannels: 1 })

        rec.record()
        $("#pop_tk_gnoi").show();
    }).catch(function(err) {
        recordButton.disabled = false;
        stopButton.disabled = true;
    });
}

function stopRecording() {
    stopButton.disabled = true;
    recordButton.disabled = false;

    rec.stop();

    gumStream.getAudioTracks()[0].stop();

    rec.exportWAV(createDownloadLink);
    $("#pop_tk_gnoi").hide();

}

$(".close_ghiam").click(function() {
    $(".pop_tk_gnoi").hide();
    stopButton.disabled = true;
    recordButton.disabled = false;
    rec.stop();
    gumStream.getAudioTracks()[0].stop();
})

function createDownloadLink(blob) {
    var filename = new Date().toISOString();
    var fd = new FormData();
    fd.append("audio_data", blob, filename);
    $.ajax({
        url: '/ajax/upload_audio.php',
        type: 'POST',
        data: fd,
        contentType: false,
        processData: false,
        success: function(e) {
            $("#fts_id").val(e);
            $(".btn_search").click();
            $(".btn_search_uv").click();
            $(".search_online").click();
        },
    })

}