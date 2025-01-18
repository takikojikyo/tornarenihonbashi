// jQuery(document).ready(function($) {
//     $('.popup-youtube').magnificPopup({
//         type: 'iframe',
//         iframe: {
//             patterns: {
//                 youtube: {
//                     index: 'youtube.com/',
//                     id: 'v=',
//                     src: 'https://www.youtube.com/embed/%id%?autoplay=1'
//                 }
//             },
//             srcAction: 'iframe_src',
//         }
//     });
// });
jQuery(document).ready(function($) {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});