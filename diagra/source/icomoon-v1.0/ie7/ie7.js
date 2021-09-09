/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-fax-solid': '&#xe900;',
		'icon-arrow-circle-right-solid': '&#xe901;',
		'icon-facebook-brands': '&#xe902;',
		'icon-mobile-alt-solid': '&#xe903;',
		'icon-envelope-regular': '&#xe904;',
		'icon-envelope-solid': '&#xe905;',
		'icon-chevron-circle-down-solid': '&#xe906;',
		'icon-caret-up-solid': '&#xe907;',
		'icon-caret-right-solid': '&#xe908;',
		'icon-caret-square-up-solid': '&#xe909;',
		'icon-caret-square-down-regular': '&#xe90a;',
		'icon-map-marker-alt-solid': '&#xe90b;',
		'icon-clock-regular': '&#xe90c;',
		'icon-phone-solid': '&#xe90d;',
		'icon-checkmark': '&#xe90e;',
		'icon-cheveron-down': '&#xe911;',
		'icon-cheveron-right': '&#xe90f;',
		'icon-close': '&#xe910;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
