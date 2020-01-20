//require jQuery

(function($){
    $(document).ready(function() {
       var styles = "<style type='text/css'>" +
           "#footer-message-wrapper {\n" +
           "    background-color: #6b6b6b;\n" +
           "}" +
           "#footer-message-wrapper {\n" +
           "    font-size: 95%;\n" +
           "}" +
           "#header-top-wrapper, #header-group-wrapper, #preface-top-wrapper, #main-wrapper, #preface-bottom, #content-top, #content-region, #content-bottom, #postscript-top, #postscript-bottom-wrapper, #footer-wrapper, #footer-message-wrapper {\n" +
           "    clear: both;\n" +
           "}" +
           "body, div.full-width {\n" +
           "    min-width: 984px;\n" +
           "}\n" +
           "\n" +
           "div.full-width {\n" +
           "    width: 100%;\n" +
           "}" +
           ".grid12-12 {\n" +
           "    width: 984px;\n" +
           "}" +
           ".row, .nested, .block {\n" +
           "    overflow: hidden;\n" +
           "}" +
           ".page, .row {\n" +
           "    margin: 0 auto;\n" +
           "}" +
           ".footer-message-text {\n" +
           "    color: #aaa;\n" +
           "    text-align: center;\n" +
           "    margin-top: 10px;\n" +
           "    margin-bottom: 10px;\n" +
           "}" +
           "#footer-message-text .inner {\n" +
           "    padding: 0px 10px;\n" +
           "}" +
           "#footer-links {\n" +
           "    float: left;\n" +
           "    width: 900px;\n" +
           "}" +
           "#footer-row1 {\n" +
           "    margin-top: 30px;\n" +
           "}" +
           "#footer-popular-categories {\n" +
           "    float: left;\n" +
           "}" +
           "#footer-related-sites {\n" +
           "    clear: both;\n" +
           "}" +
           "" +
           "#footer-social-icons {\n" +
           "    float: right;\n" +
           "    width: 50px;\n" +
           "    margin-top: 50px;\n" +
           "}" +
           "#footer-bottom {\n" +
           "    border-top: 1px dotted #888;\n" +
           "    clear: both;\n" +
           "    padding-top: 20px;\n" +
           "    letter-spacing: 1px;\n" +
           "}" +
           "#footer-popular-categories ul {\n" +
           "    float: left;\n" +
           "}\n" +
           "#footer-message ul {\n" +
           "    padding: 5px 30px 5px 20px;\n" +
           "}" +
           "#footer-message ul li {\n" +
           "    text-align: left;\n" +
           "    line-height: 19px;\n" +
           "    letter-spacing: 1px;\n" +
           "    font-size: 1em;\n" +
           "    padding-left: 5px;\n" +
           "    color: red;\n" +
           "}" +
           ".footer-message-text a, a:link, a:visited {\n" +
           "    color: #aaa;\n" +
           "    text-decoration: none;\n" +
           "}" +
           "#footer-message h2 {\n" +
           "    text-align: left;\n" +
           "    color: orange;\n" +
           "    font-size: 1em;\n" +
           "    letter-spacing: 1px;\n" +
           "    text-transform: uppercase;\n" +
           "}" +
           "#footer-quick-links ul {\n" +
           "    float: left;\n" +
           "}" +
           "#footer-related-sites ul {\n" +
           "    float: left;\n" +
           "}" +
           "#footer-bottom a {\n" +
           "    color: orange;\n" +
           "    padding: 0px 5px;\n" +
           "}" +
           "#footer-address {\n" +
           "    margin-top: 10px;\n" +
           "}\n" +
           "#footer-links a:hover {\n" +
           "    color: orange;\n" +
           "}" +
           "#footer-bottom a:hover {\n" +
           "    color: #d94103;\n" +
           "}" +

           "</style>";

       $("head").append(styles);

       var commonFooter = '<div id="footer-message-wrapper" class="footer-message-wrapper full-width">\n' +
           '\t\t\t\t<div id="footer-message" class="footer-message row grid12-12">\n' +
           '\t\t\t\t\t<div id="footer-message-inner" class="footer-message-inner inner clearfix">\n' +
           '\t\t\t\t\t\t<div class="footer-message-text" id="footer-message-text">\n' +
           '\t\t\t\t\t\t\t<div class="inner">    \n' +
           '\t\t\t\t\t\t\t\t<div id="scrollPage">\n' +
           '\t\t\t\t\t\t\t\t\t<a href="#page" class="scrollPage">TOP</a>\n' +
           '\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t\t<div id="footer-links">\n' +
           '\t\t\t\t\t\t\t\t\t<div id="footer-related-sites">\n' +
           '\t\t\t\t\t\t\t\t\t\t<h2>Related Sites</h2>\n' +
           '\t\t\t\t\t\t\t\t\t\t<ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://innerawakening.org" target="_blank">Inner Awakening</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://yoga.nithyananda.org" target="_blank">Yoga</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://meditation.nithyananda.org" target="_blank">Meditation</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vedic-temples.nithyananda.org" target="_blank">Vedic Temples</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vidyapeetam.nithyananda.org" target="_blank">Vidya Peetam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://enpublishers.com/" target="_blank">eN-Publishers</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t<ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://lifeblissgalleria.com" target="_blank">Life Bliss Galleria</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://engalleria.com" target="_blank">eN Galleria</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://dhyanapeetam.org/web/ap" target="_blank">Hydrabad Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://lifeblissfoundation.org" target="_blank">Life Bliss Foundation USA</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t<ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://nithyanandavedictemple.org/" target="_blank">Los Angeles Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vedictempleohio.org/" target="_blank">Ohio Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vedictempleseattle.org/" target="_blank">Seattle Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vedictemplebayarea.org/" target="_blank">San Jose Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://vedictemplephoenix.org/" target="_blank">Phoenix Aadheenam</a></li>\n' +
           '                                                                                        <li><a href="http://www.nithyananda.ca/" target="_blank">Toronto Aadheenam</a></li>\n' +
           '\n' +
           '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t<ul>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="http://lifebliss-singapore.org/" target="_blank">Singapore Aadheenam</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href="http://www.nithyanandamalaysia.org/" target="_blank">Malaysia Aadheenam</a></li> -->\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="https://innereserwachen.blogspot.com/" target="_blank">German Site</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="https://innerawakeningfrance.blogspot.com/" target="_blank">French Site</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t\t<li><a href="https://lifeblissespanol.blogspot.com/" target="_blank">Spanish Site</a></li>\n' +
           '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
           '\t\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t\t<div id="footer-social-icons">\n' +
           '\t\t\t\t\t\t\t\t\t<a href="https://www.facebook.com/srinithyananda.swami" target="_blank"><img src="/sites/all/themes/bliss/images/facebook.png" alt="f" hidden="" style="display: none !important;"></a>\n' +
           '\t\t\t\t\t\t\t\t\t<a href="https://twitter.com/SriNithyananda" target="_blank"><img src="/sites/all/themes/bliss/images/twitter.png" alt="t" hidden="" style="display: none !important;"></a>\n' +
           '\t\t\t\t\t\t\t\t\t<a href="http://nithyananda.org/rss.xml" target="_blank"><img src="/sites/all/themes/bliss/images/rssfeed.png" alt="rss" hidden="" style="display: none !important;"></a>\n' +
           '\t\t\t\t\t\t\t\t\t<a href="https://youtube.com/lifeblissfoundation" target="_blank"><img src="/sites/all/themes/bliss/images/youtube.png" alt="youtube" hidden="" style="display: none !important;"></a>\n' +
           '\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t\t\n' +
           '\t\t\t\t\t\t\t\t<div id="footer-bottom">\n' +
           '\t\t\t\t\t\t\t\t\t<a href="/contact">Contact Us</a> | <a href="/page/terms-conditions">\n' +
           '                                        Terms &amp; Conditions</a> | <a href="/page/privacy-policy">Privacy Policiy</a><br>\n' +
           '\t\t\t\t\t\t\t\t\tCopyright © Nithyananda Dhyanapeetam 2015. All Rights Reserved<br>\n' +
           '\t\t\t\t\t\t\t\t\t<div id="footer-address">\n' +
           '\t\t\t\t\t\t\t\t\t\tAddress: Nithyananda Dhyanapeetam, Kallugopahalli, Off Mysore Road, Bidadi, Bangalore - 562109 <br>\n' +
           '\t\t\t\t\t\t\t\t\t\tContact No: +91 80 28022100,  +91 80 2727 9999;  Fax: +91 80 28022123;  Email: webmaster@nithyananda.org\n' +
           '\t\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t</div>\n' +
           '\t\t\t\t\t<!-- /footer-message-inner -->\n' +
           '\t\t\t\t</div>\n' +
           '\t\t\t\t<!-- /footer-message -->\n' +
           '\t\t\t</div>';

       $('body').append(commonFooter);
    });
})(jQuery);