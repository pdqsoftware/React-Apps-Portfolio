// console.log('copytext.js has loaded');

function copyToClipboard(containerId) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerId));
    window.getSelection().removeAllRanges();   // Clear current selection
    window.getSelection().addRange(range);     // To select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();   // To deselect

    // alert('Text copied to clipboard')
}
