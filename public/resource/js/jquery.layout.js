!(function ($) {
	var min = Math.min,
		max = Math.max,
		round = Math.floor,
		isStr = function (e) {
			return 'string' === $.type(e)
		},
		runPluginCallbacks = function (Instance, a_fn) {
			function g(e) {
				return e
			}
			if ($.isArray(a_fn))
				for (var i = 0, c = a_fn.length; c > i; i++) {
					var fn = a_fn[i]
					try {
						isStr(fn) && (fn = eval(fn)), $.isFunction(fn) && g(fn)(Instance)
					} catch (ex) {}
				}
		}
	;($.layout = {
		version: '1.4.3',
		revision: 1.0403,
		browser: {},
		effects: {
			slide: {
				all: { duration: 'fast' },
				north: { direction: 'up' },
				south: { direction: 'down' },
				east: { direction: 'right' },
				west: { direction: 'left' },
			},
			drop: {
				all: { duration: 'slow' },
				north: { direction: 'up' },
				south: { direction: 'down' },
				east: { direction: 'right' },
				west: { direction: 'left' },
			},
			scale: { all: { duration: 'fast' } },
			blind: {},
			clip: {},
			explode: {},
			fade: {},
			fold: {},
			puff: {},
			size: { all: { easing: 'swing' } },
		},
		config: {
			optionRootKeys: 'effects,panes,north,south,west,east,center'.split(','),
			allPanes: 'north,south,west,east,center'.split(','),
			borderPanes: 'north,south,west,east'.split(','),
			oppositeEdge: { north: 'south', south: 'north', east: 'west', west: 'east' },
			offscreenCSS: { left: '-99999px', right: 'auto' },
			offscreenReset: 'offscreenReset',
			hidden: { visibility: 'hidden' },
			visible: { visibility: 'visible' },
			resizers: {
				cssReq: {
					position: 'absolute',
					padding: 0,
					margin: 0,
					fontSize: '1px',
					textAlign: 'left',
					overflow: 'hidden',
				},
				cssDemo: { background: '#DDD', border: 'none' },
			},
			togglers: {
				cssReq: {
					position: 'absolute',
					display: 'block',
					padding: 0,
					margin: 0,
					overflow: 'hidden',
					textAlign: 'center',
					fontSize: '1px',
					cursor: 'pointer',
					zIndex: 1,
				},
				cssDemo: { background: '#AAA' },
			},
			content: {
				cssReq: { position: 'relative' },
				cssDemo: { overflow: 'auto', padding: '10px' },
				cssDemoPane: { overflow: 'hidden', padding: 0 },
			},
			panes: {
				cssReq: { position: 'absolute', margin: 0 },
				cssDemo: {
					padding: '10px',
					background: '#FFF',
					border: '1px solid #BBB',
					overflow: 'auto',
				},
			},
			north: {
				side: 'top',
				sizeType: 'Height',
				dir: 'horz',
				cssReq: { top: 0, bottom: 'auto', left: 0, right: 0, width: 'auto' },
			},
			south: {
				side: 'bottom',
				sizeType: 'Height',
				dir: 'horz',
				cssReq: { top: 'auto', bottom: 0, left: 0, right: 0, width: 'auto' },
			},
			east: {
				side: 'right',
				sizeType: 'Width',
				dir: 'vert',
				cssReq: { left: 'auto', right: 0, top: 'auto', bottom: 'auto', height: 'auto' },
			},
			west: {
				side: 'left',
				sizeType: 'Width',
				dir: 'vert',
				cssReq: { left: 0, right: 'auto', top: 'auto', bottom: 'auto', height: 'auto' },
			},
			center: {
				dir: 'center',
				cssReq: {
					left: 'auto',
					right: 'auto',
					top: 'auto',
					bottom: 'auto',
					height: 'auto',
					width: 'auto',
				},
			},
		},
		callbacks: {},
		getParentPaneElem: function (e) {
			var t = $(e),
				i = t.data('layout') || t.data('parentLayout')
			if (i) {
				var s = i.container
				if (s.data('layoutPane')) return s
				var n = s.closest('.' + $.layout.defaults.panes.paneClass)
				if (n.data('layoutPane')) return n
			}
			return null
		},
		getParentPaneInstance: function (e) {
			var t = $.layout.getParentPaneElem(e)
			return t ? t.data('layoutPane') : null
		},
		getParentLayoutInstance: function (e) {
			var t = $.layout.getParentPaneElem(e)
			return t ? t.data('parentLayout') : null
		},
		getEventObject: function (e) {
			return 'object' == typeof e && e.stopPropagation ? e : null
		},
		parsePaneName: function (e) {
			var t = $.layout.getEventObject(e),
				i = e
			return (
				t && (t.stopPropagation(), (i = $(this).data('layoutEdge'))),
				i &&
					!/^(west|east|north|south|center)$/.test(i) &&
					($.layout.msg('LAYOUT ERROR - Invalid pane-name: "' + i + '"'), (i = 'error')),
				i
			)
		},
		plugins: {
			draggable: !!$.fn.draggable,
			effects: {
				core: !!$.effects,
				slide: $.effects && ($.effects.slide || ($.effects.effect && $.effects.effect.slide)),
			},
		},
		onCreate: [],
		onLoad: [],
		onReady: [],
		onDestroy: [],
		onUnload: [],
		afterOpen: [],
		afterClose: [],
		scrollbarWidth: function () {
			return window.scrollbarWidth || $.layout.getScrollbarSize('width')
		},
		scrollbarHeight: function () {
			return window.scrollbarHeight || $.layout.getScrollbarSize('height')
		},
		getScrollbarSize: function (e) {
			var t = $(
					'<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; border: 0; overflow: scroll;"></div>'
				).appendTo('body'),
				i = { width: t.outerWidth - t[0].clientWidth, height: 100 - t[0].clientHeight }
			return (
				t.remove(),
				(window.scrollbarWidth = i.width),
				(window.scrollbarHeight = i.height),
				e.match(/^(width|height)$/) ? i[e] : i
			)
		},
		disableTextSelection: function () {
			var e = $(document),
				t = 'textSelectionDisabled',
				i = 'textSelectionInitialized'
			$.fn.disableSelection &&
				(e.data(i) || e.on('mouseup', $.layout.enableTextSelection).data(i, !0),
				e.data(t) || e.disableSelection().data(t, !0))
		},
		enableTextSelection: function () {
			var e = $(document),
				t = 'textSelectionDisabled'
			$.fn.enableSelection && e.data(t) && e.enableSelection().data(t, !1)
		},
		showInvisibly: function (e, t) {
			if (e && e.length && (t || 'none' === e.css('display'))) {
				var i = e[0].style,
					s = { display: i.display || '', visibility: i.visibility || '' }
				return e.css({ display: 'block', visibility: 'hidden' }), s
			}
			return {}
		},
		getElementDimensions: function (e, t) {
			var i,
				s,
				n,
				o = { css: {}, inset: {} },
				a = o.css,
				r = { bottom: 0 },
				l = $.layout.cssNum,
				d = Math.round,
				c = e.offset()
			return (
				(o.offsetLeft = c.left),
				(o.offsetTop = c.top),
				t || (t = {}),
				$.each('Left,Right,Top,Bottom'.split(','), function (l, d) {
					;(i = a['border' + d] = $.layout.borderWidth(e, d)),
						(s = a['padding' + d] = $.layout.cssNum(e, 'padding' + d)),
						(n = d.toLowerCase()),
						(o.inset[n] = t[n] >= 0 ? t[n] : s),
						(r[n] = o.inset[n] + i)
				}),
				(a.width = d(e.width())),
				(a.height = d(e.height())),
				(a.top = l(e, 'top', !0)),
				(a.bottom = l(e, 'bottom', !0)),
				(a.left = l(e, 'left', !0)),
				(a.right = l(e, 'right', !0)),
				(o.outerWidth = d(e.outerWidth())),
				(o.outerHeight = d(e.outerHeight())),
				(o.innerWidth = max(0, o.outerWidth - r.left - r.right)),
				(o.innerHeight = max(0, o.outerHeight - r.top - r.bottom)),
				(o.layoutWidth = d(e.innerWidth())),
				(o.layoutHeight = d(e.innerHeight())),
				o
			)
		},
		getElementStyles: function (e, t) {
			var i,
				s,
				n,
				o,
				a,
				r,
				l = {},
				d = e[0].style,
				c = t.split(','),
				u = 'Top,Bottom,Left,Right'.split(','),
				p = 'Color,Style,Width'.split(',')
			for (o = 0; o < c.length; o++)
				if (((i = c[o]), i.match(/(border|padding|margin)$/)))
					for (a = 0; 4 > a; a++)
						if (((s = u[a]), 'border' === i))
							for (r = 0; 3 > r; r++) (n = p[r]), (l[i + s + n] = d[i + s + n])
						else l[i + s] = d[i + s]
				else l[i] = d[i]
			return l
		},
		cssWidth: function (e, t) {
			if (0 >= t) return 0
			var i = $.layout.browser,
				s = i.boxModel ? (i.boxSizing ? e.css('boxSizing') : 'content-box') : 'border-box',
				n = $.layout.borderWidth,
				o = $.layout.cssNum,
				a = t
			return (
				'border-box' !== s && (a -= n(e, 'Left') + n(e, 'Right')),
				'content-box' === s && (a -= o(e, 'paddingLeft') + o(e, 'paddingRight')),
				max(0, a)
			)
		},
		cssHeight: function (e, t) {
			if (0 >= t) return 0
			var i = $.layout.browser,
				s = i.boxModel ? (i.boxSizing ? e.css('boxSizing') : 'content-box') : 'border-box',
				n = $.layout.borderWidth,
				o = $.layout.cssNum,
				a = t
			return (
				'border-box' !== s && (a -= n(e, 'Top') + n(e, 'Bottom')),
				'content-box' === s && (a -= o(e, 'paddingTop') + o(e, 'paddingBottom')),
				max(0, a)
			)
		},
		cssNum: function (e, t, i) {
			e.jquery || (e = $(e))
			var s = $.layout.showInvisibly(e),
				n = $.css(e[0], t, !0),
				o = i && 'auto' == n ? n : Math.round(parseFloat(n) || 0)
			return e.css(s), o
		},
		borderWidth: function (e, t) {
			e.jquery && (e = e[0])
			var i = 'border' + t.substr(0, 1).toUpperCase() + t.substr(1)
			return 'none' === $.css(e, i + 'Style', !0)
				? 0
				: Math.round(parseFloat($.css(e, i + 'Width', !0)) || 0)
		},
		isMouseOverElem: function (e, t) {
			var i = $(t || this),
				s = i.offset(),
				n = s.top,
				o = s.left,
				a = o + i.outerWidth(),
				r = n + i.outerHeight(),
				l = e.pageX,
				d = e.pageY
			return ($.layout.browser.msie && 0 > l && 0 > d) || (l >= o && a >= l && d >= n && r >= d)
		},
		msg: function (e, t, i, s) {
			function n() {
				var e = $.support.fixedPosition ? 'fixed' : 'absolute',
					t = $(
						'<div id="layoutLogger" style="position: ' +
							e +
							'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;"><span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div><ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul></div>'
					).appendTo('body')
				return (
					t.css('left', $(window).width() - t.outerWidth() - 5),
					$.ui.draggable && t.draggable({ handle: ':first-child' }),
					t
				)
			}
			if ($.isPlainObject(e) && window.debugData) {
				'string' == typeof t ? ((s = i), (i = t)) : 'object' == typeof i && ((s = i), (i = null))
				var o = i || 'log( <object> )',
					a = $.extend({ sort: !1, returnHTML: !1, display: !1 }, s)
				t === !0 || a.display
					? debugData(e, o, a)
					: window.console && console.log(debugData(e, o, a))
			} else if (t) alert(e)
			else if (window.console) console.log(e)
			else {
				var r = '#layoutLogger',
					l = $(r)
				l.length || (l = n()),
					l
						.children('ul')
						.append(
							'<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">' +
								e.replace(/\</g, '&lt;').replace(/\>/g, '&gt;') +
								'</li>'
						)
			}
		},
	}),
		(function () {
			var e = navigator.userAgent.toLowerCase(),
				t =
					/(chrome)[ \/]([\w.]+)/.exec(e) ||
					/(webkit)[ \/]([\w.]+)/.exec(e) ||
					/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
					/(msie) ([\w.]+)/.exec(e) ||
					(e.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
					[],
				i = t[1] || '',
				s = t[2] || 0,
				n = 'msie' === i,
				o = document.compatMode,
				a = $.support,
				r = void 0 !== a.boxSizing ? a.boxSizing : a.boxSizingReliable,
				l = !n || !o || 'CSS1Compat' === o || a.boxModel || !1,
				d = ($.layout.browser = {
					version: s,
					safari: 'webkit' === i,
					webkit: 'chrome' === i,
					msie: n,
					isIE6: n && 6 == s,
					boxModel: l,
					boxSizing: !!('function' == typeof r ? r() : r),
				})
			i && (d[i] = !0),
				l ||
					o ||
					$(function () {
						d.boxModel = a.boxModel
					})
		})(),
		($.layout.defaults = {
			name: '',
			containerClass: 'ui-layout-container',
			inset: null,
			scrollToBookmarkOnLoad: !0,
			resizeWithWindow: !0,
			resizeWithWindowDelay: 200,
			resizeWithWindowMaxDelay: 0,
			maskPanesEarly: !1,
			onresizeall_start: null,
			onresizeall_end: null,
			onload_start: null,
			onload_end: null,
			onunload_start: null,
			onunload_end: null,
			initPanes: !0,
			showErrorMessages: !0,
			showDebugMessages: !1,
			zIndex: null,
			zIndexes: {
				pane_normal: 0,
				content_mask: 1,
				resizer_normal: 2,
				pane_sliding: 100,
				pane_animate: 1e3,
				resizer_drag: 1e4,
			},
			errors: {
				pane: 'pane',
				selector: 'selector',
				addButtonError: 'Error Adding Button\nInvalid ',
				containerMissing:
					'UI Layout Initialization Error\nThe specified layout-container does not exist.',
				centerPaneMissing:
					'UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element.',
				noContainerHeight:
					'UI Layout Initialization Warning\nThe layout-container "CONTAINER" has no height.\nTherefore the layout is 0-height and hence \'invisible\'!',
				callbackError: 'UI Layout Callback Error\nThe EVENT callback is not a valid function.',
			},
			panes: {
				applyDemoStyles: !1,
				closable: !0,
				resizable: !0,
				slidable: !0,
				initClosed: !1,
				initHidden: !1,
				contentSelector: '.ui-layout-content',
				contentIgnoreSelector: '.ui-layout-ignore',
				findNestedContent: !1,
				paneClass: 'ui-layout-pane',
				resizerClass: 'ui-layout-resizer',
				togglerClass: 'ui-layout-toggler',
				buttonClass: 'ui-layout-button',
				minSize: 0,
				maxSize: 0,
				spacing_open: 6,
				spacing_closed: 6,
				togglerLength_open: 50,
				togglerLength_closed: 50,
				togglerAlign_open: 'center',
				togglerAlign_closed: 'center',
				togglerContent_open: '',
				togglerContent_closed: '',
				resizerDblClickToggle: !0,
				autoResize: !0,
				autoReopen: !0,
				resizerDragOpacity: 1,
				maskContents: !1,
				maskObjects: !1,
				maskZindex: null,
				resizingGrid: !1,
				livePaneResizing: !1,
				liveContentResizing: !1,
				liveResizingTolerance: 1,
				sliderCursor: 'pointer',
				slideTrigger_open: 'click',
				slideTrigger_close: 'mouseleave',
				slideDelay_open: 300,
				slideDelay_close: 300,
				hideTogglerOnSlide: !1,
				preventQuickSlideClose: $.layout.browser.webkit,
				preventPrematureSlideClose: !1,
				tips: {
					Open: 'Open',
					Close: 'Close',
					Resize: 'Resize',
					Slide: 'Slide Open',
					Pin: 'Pin',
					Unpin: 'Un-Pin',
					noRoomToOpen: 'Not enough room to show this panel.',
					minSizeWarning: 'Panel has reached its minimum size',
					maxSizeWarning: 'Panel has reached its maximum size',
				},
				showOverflowOnHover: !1,
				enableCursorHotkey: !0,
				customHotkeyModifier: 'SHIFT',
				fxName: 'slide',
				fxSpeed: null,
				fxSettings: {},
				fxOpacityFix: !0,
				animatePaneSizing: !1,
				children: null,
				containerSelector: '',
				initChildren: !0,
				destroyChildren: !0,
				resizeChildren: !0,
				triggerEventsOnLoad: !1,
				triggerEventsDuringLiveResize: !0,
				onshow_start: null,
				onshow_end: null,
				onhide_start: null,
				onhide_end: null,
				onopen_start: null,
				onopen_end: null,
				onclose_start: null,
				onclose_end: null,
				onresize_start: null,
				onresize_end: null,
				onsizecontent_start: null,
				onsizecontent_end: null,
				onswap_start: null,
				onswap_end: null,
				ondrag_start: null,
				ondrag_end: null,
			},
			north: {
				paneSelector: '.ui-layout-north',
				size: 'auto',
				resizerCursor: 'n-resize',
				customHotkey: '',
			},
			south: {
				paneSelector: '.ui-layout-south',
				size: 'auto',
				resizerCursor: 's-resize',
				customHotkey: '',
			},
			east: {
				paneSelector: '.ui-layout-east',
				size: 200,
				resizerCursor: 'e-resize',
				customHotkey: '',
			},
			west: {
				paneSelector: '.ui-layout-west',
				size: 200,
				resizerCursor: 'w-resize',
				customHotkey: '',
			},
			center: { paneSelector: '.ui-layout-center', minWidth: 0, minHeight: 0 },
		}),
		($.layout.optionsMap = {
			layout:
				'name,instanceKey,stateManagement,effects,inset,zIndexes,errors,zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end'.split(
					','
				),
			center:
				'paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,showOverflowOnHover,maskContents,maskObjects,liveContentResizing,containerSelector,children,initChildren,resizeChildren,destroyChildren,onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end'.split(
					','
				),
			noDefault: 'paneSelector,resizerCursor,customHotkey'.split(','),
		}),
		($.layout.transformData = function (e, t) {
			var i,
				s,
				n,
				o,
				a,
				r,
				l,
				d = t ? { panes: {}, center: {} } : {}
			if ('object' != typeof e) return d
			for (s in e)
				for (i = d, a = e[s], n = s.split('__'), l = n.length - 1, r = 0; l >= r; r++)
					(o = n[r]),
						r === l
							? (i[o] = $.isPlainObject(a) ? $.layout.transformData(a) : a)
							: (i[o] || (i[o] = {}), (i = i[o]))
			return d
		}),
		($.layout.backwardCompatibility = {
			map: {
				applyDefaultStyles: 'applyDemoStyles',
				childOptions: 'children',
				initChildLayout: 'initChildren',
				destroyChildLayout: 'destroyChildren',
				resizeChildLayout: 'resizeChildren',
				resizeNestedLayout: 'resizeChildren',
				resizeWhileDragging: 'livePaneResizing',
				resizeContentWhileDragging: 'liveContentResizing',
				triggerEventsWhileDragging: 'triggerEventsDuringLiveResize',
				maskIframesOnResize: 'maskContents',
				useStateCookie: 'stateManagement.enabled',
				'cookie.autoLoad': 'stateManagement.autoLoad',
				'cookie.autoSave': 'stateManagement.autoSave',
				'cookie.keys': 'stateManagement.stateKeys',
				'cookie.name': 'stateManagement.cookie.name',
				'cookie.domain': 'stateManagement.cookie.domain',
				'cookie.path': 'stateManagement.cookie.path',
				'cookie.expires': 'stateManagement.cookie.expires',
				'cookie.secure': 'stateManagement.cookie.secure',
				noRoomToOpenTip: 'tips.noRoomToOpen',
				togglerTip_open: 'tips.Close',
				togglerTip_closed: 'tips.Open',
				resizerTip: 'tips.Resize',
				sliderTip: 'tips.Slide',
			},
			renameOptions: function (e) {
				function t(t, i) {
					for (
						var s, n = t.split('.'), o = n.length - 1, a = { branch: e, key: n[o] }, r = 0;
						o > r;
						r++
					)
						(s = n[r]),
							(a.branch = void 0 == a.branch[s] ? (i ? (a.branch[s] = {}) : {}) : a.branch[s])
					return a
				}
				var i,
					s,
					n,
					o = $.layout.backwardCompatibility.map
				for (var a in o)
					(i = t(a)),
						(n = i.branch[i.key]),
						void 0 !== n && ((s = t(o[a], !0)), (s.branch[s.key] = n), delete i.branch[i.key])
			},
			renameAllOptions: function (e) {
				var t = $.layout.backwardCompatibility.renameOptions
				return (
					t(e),
					e.defaults &&
						('object' != typeof e.panes && (e.panes = {}),
						$.extend(!0, e.panes, e.defaults),
						delete e.defaults),
					e.panes && t(e.panes),
					$.each($.layout.config.allPanes, function (i, s) {
						e[s] && t(e[s])
					}),
					e
				)
			},
		}),
		($.fn.layout = function (opts) {
			function keyDown(e) {
				if (!e) return !0
				var t = e.keyCode
				if (33 > t) return !0
				var i,
					s,
					n,
					o,
					a = { 38: 'north', 40: 'south', 37: 'west', 39: 'east' },
					r = (e.altKey, e.shiftKey),
					l = e.ctrlKey,
					d = l && t >= 37 && 40 >= t
				return (
					d && options[a[t]].enableCursorHotkey
						? (o = a[t])
						: (l || r) &&
						  $.each(_c.borderPanes, function (e, a) {
								return (
									(i = options[a]),
									(s = i.customHotkey),
									(n = i.customHotkeyModifier),
									((r && 'SHIFT' == n) || (l && 'CTRL' == n) || (l && r)) &&
									s &&
									t === (isNaN(s) || 9 >= s ? s.toUpperCase().charCodeAt(0) : s)
										? ((o = a), !1)
										: void 0
								)
						  }),
					o && $Ps[o] && options[o].closable && !state[o].isHidden
						? (toggle(o), e.stopPropagation(), (e.returnValue = !1), !1)
						: !0
				)
			}
			function allowOverflow(e) {
				if (isInitialized()) {
					this && this.tagName && (e = this)
					var t
					if (
						(isStr(e)
							? (t = $Ps[e])
							: $(e).data('layoutRole')
							? (t = $(e))
							: $(e)
									.parents()
									.each(function () {
										return $(this).data('layoutRole') ? ((t = $(this)), !1) : void 0
									}),
						t && t.length)
					) {
						var i = t.data('layoutEdge'),
							s = state[i]
						if ((s.cssSaved && resetOverflow(i), s.isSliding || s.isResizing || s.isClosed))
							return void (s.cssSaved = !1)
						var n = { zIndex: options.zIndexes.resizer_normal + 1 },
							o = {},
							a = t.css('overflow'),
							r = t.css('overflowX'),
							l = t.css('overflowY')
						'visible' != a && ((o.overflow = a), (n.overflow = 'visible')),
							r && !r.match(/(visible|auto)/) && ((o.overflowX = r), (n.overflowX = 'visible')),
							l && !l.match(/(visible|auto)/) && ((o.overflowY = r), (n.overflowY = 'visible')),
							(s.cssSaved = o),
							t.css(n),
							$.each(_c.allPanes, function (e, t) {
								t != i && resetOverflow(t)
							})
					}
				}
			}
			function resetOverflow(e) {
				if (isInitialized()) {
					this && this.tagName && (e = this)
					var t
					if (
						(isStr(e)
							? (t = $Ps[e])
							: $(e).data('layoutRole')
							? (t = $(e))
							: $(e)
									.parents()
									.each(function () {
										return $(this).data('layoutRole') ? ((t = $(this)), !1) : void 0
									}),
						t && t.length)
					) {
						var i = t.data('layoutEdge'),
							s = state[i],
							n = s.cssSaved || {}
						s.isSliding || s.isResizing || t.css('zIndex', options.zIndexes.pane_normal),
							t.css(n),
							(s.cssSaved = !1)
					}
				}
			}
			var browser = $.layout.browser,
				_c = $.layout.config,
				cssW = $.layout.cssWidth,
				cssH = $.layout.cssHeight,
				elDims = $.layout.getElementDimensions,
				styles = $.layout.getElementStyles,
				evtObj = $.layout.getEventObject,
				evtPane = $.layout.parsePaneName,
				options = $.extend(!0, {}, $.layout.defaults),
				effects = (options.effects = $.extend(!0, {}, $.layout.effects)),
				state = {
					id: 'layout' + $.now(),
					initialized: !1,
					paneResizing: !1,
					panesSliding: {},
					container: {
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0,
						layoutWidth: 0,
						layoutHeight: 0,
					},
					north: { childIdx: 0 },
					south: { childIdx: 0 },
					east: { childIdx: 0 },
					west: { childIdx: 0 },
					center: { childIdx: 0 },
				},
				children = { north: null, south: null, east: null, west: null, center: null },
				timer = {
					data: {},
					set: function (e, t, i) {
						timer.clear(e), (timer.data[e] = setTimeout(t, i))
					},
					clear: function (e) {
						var t = timer.data
						t[e] && (clearTimeout(t[e]), delete t[e])
					},
				},
				_log = function (e, t, i) {
					var s = options
					return (
						((s.showErrorMessages && !i) || (i && s.showDebugMessages)) &&
							$.layout.msg(s.name + ' / ' + e, t !== !1),
						!1
					)
				},
				_runCallbacks = function (evtName, pane, skipBoundEvents) {
					function g(e) {
						return e
					}
					var hasPane = pane && isStr(pane),
						s = hasPane ? state[pane] : state,
						o = hasPane ? options[pane] : options,
						lName = options.name,
						lng = evtName + (evtName.match(/_/) ? '' : '_end'),
						shrt = lng.match(/_end$/) ? lng.substr(0, lng.length - 4) : '',
						fn = o[lng] || o[shrt],
						retVal = 'NC',
						args = [],
						$P = hasPane ? $Ps[pane] : 0
					if (hasPane && !$P) return retVal
					if (
						(hasPane || 'boolean' !== $.type(pane) || ((skipBoundEvents = pane), (pane = '')), fn)
					)
						try {
							isStr(fn) &&
								(fn.match(/,/) ? ((args = fn.split(',')), (fn = eval(args[0]))) : (fn = eval(fn))),
								$.isFunction(fn) &&
									(retVal = args.length
										? g(fn)(args[1])
										: hasPane
										? g(fn)(pane, $Ps[pane], s, o, lName)
										: g(fn)(Instance, s, o, lName))
						} catch (ex) {
							_log(
								options.errors.callbackError.replace(/EVENT/, $.trim((pane || '') + ' ' + lng)),
								!1
							),
								'string' === $.type(ex) && string.length && _log('Exception:  ' + ex, !1)
						}
					return (
						skipBoundEvents ||
							retVal === !1 ||
							(hasPane
								? ((o = options[pane]),
								  (s = state[pane]),
								  $P.triggerHandler('layoutpane' + lng, [pane, $P, s, o, lName]),
								  shrt && $P.triggerHandler('layoutpane' + shrt, [pane, $P, s, o, lName]))
								: ($N.triggerHandler('layout' + lng, [Instance, s, o, lName]),
								  shrt && $N.triggerHandler('layout' + shrt, [Instance, s, o, lName]))),
						hasPane && 'onresize_end' === evtName && resizeChildren(pane + '', !0),
						retVal
					)
				},
				_fixIframe = function (e) {
					if (!browser.mozilla) {
						var t = $Ps[e]
						'IFRAME' === state[e].tagName
							? t.css(_c.hidden).css(_c.visible)
							: t.find('IFRAME').css(_c.hidden).css(_c.visible)
					}
				},
				cssSize = function (e, t) {
					var i = 'horz' == _c[e].dir ? cssH : cssW
					return i($Ps[e], t)
				},
				cssMinDims = function (e) {
					var t = $Ps[e],
						i = _c[e].dir,
						s = { minWidth: 1001 - cssW(t, 1e3), minHeight: 1001 - cssH(t, 1e3) }
					return (
						'horz' === i && (s.minSize = s.minHeight), 'vert' === i && (s.minSize = s.minWidth), s
					)
				},
				setOuterWidth = function (e, t, i) {
					var s,
						n = e
					isStr(e) ? (n = $Ps[e]) : e.jquery || (n = $(e)),
						(s = cssW(n, t)),
						n.css({ width: s }),
						s > 0
							? i &&
							  n.data('autoHidden') &&
							  n.innerHeight() > 0 &&
							  (n.show().data('autoHidden', !1),
							  browser.mozilla || n.css(_c.hidden).css(_c.visible))
							: i && !n.data('autoHidden') && n.hide().data('autoHidden', !0)
				},
				setOuterHeight = function (e, t, i) {
					var s,
						n = e
					isStr(e) ? (n = $Ps[e]) : e.jquery || (n = $(e)),
						(s = cssH(n, t)),
						n.css({ height: s, visibility: 'visible' }),
						s > 0 && n.innerWidth() > 0
							? i &&
							  n.data('autoHidden') &&
							  (n.show().data('autoHidden', !1),
							  browser.mozilla || n.css(_c.hidden).css(_c.visible))
							: i && !n.data('autoHidden') && n.hide().data('autoHidden', !0)
				},
				_parseSize = function (e, t, i) {
					if (
						(i || (i = _c[e].dir),
						isStr(t) && t.match(/%/) && (t = '100%' === t ? -1 : parseInt(t, 10) / 100),
						0 === t)
					)
						return 0
					if (t >= 1) return parseInt(t, 10)
					var s = options,
						n = 0
					if (
						('horz' == i
							? (n =
									sC.innerHeight -
									($Ps.north ? s.north.spacing_open : 0) -
									($Ps.south ? s.south.spacing_open : 0))
							: 'vert' == i &&
							  (n =
									sC.innerWidth -
									($Ps.west ? s.west.spacing_open : 0) -
									($Ps.east ? s.east.spacing_open : 0)),
						-1 === t)
					)
						return n
					if (t > 0) return round(n * t)
					if ('center' == e) return 0
					var o = 'horz' === i ? 'height' : 'width',
						a = $Ps[e],
						r = 'height' === o ? $Cs[e] : !1,
						l = $.layout.showInvisibly(a),
						d = a.css(o),
						c = r ? r.css(o) : 0
					return (
						a.css(o, 'auto'),
						r && r.css(o, 'auto'),
						(t = 'height' === o ? a.outerHeight() : a.outerWidth()),
						a.css(o, d).css(l),
						r && r.css(o, c),
						t
					)
				},
				getPaneSize = function (e, t) {
					var i = $Ps[e],
						s = options[e],
						n = state[e],
						o = t ? s.spacing_open : 0,
						a = t ? s.spacing_closed : 0
					return !i || n.isHidden
						? 0
						: n.isClosed || (n.isSliding && t)
						? a
						: 'horz' === _c[e].dir
						? i.outerHeight() + o
						: i.outerWidth() + o
				},
				setSizeLimits = function (e, t) {
					if (isInitialized()) {
						var i = options[e],
							s = state[e],
							n = _c[e],
							o = n.dir,
							a = (n.sizeType.toLowerCase(), void 0 != t ? t : s.isSliding),
							r = ($Ps[e], i.spacing_open),
							l = _c.oppositeEdge[e],
							d = state[l],
							c = $Ps[l],
							u =
								!c || d.isVisible === !1 || d.isSliding
									? 0
									: 'horz' == o
									? c.outerHeight()
									: c.outerWidth(),
							p =
								(!c || d.isHidden
									? 0
									: options[l][d.isClosed !== !1 ? 'spacing_closed' : 'spacing_open']) || 0,
							g = 'horz' == o ? sC.innerHeight : sC.innerWidth,
							h = cssMinDims('center'),
							f =
								'horz' == o
									? max(options.center.minHeight, h.minHeight)
									: max(options.center.minWidth, h.minWidth),
							m = g - r - (a ? 0 : _parseSize('center', f, o) + u + p),
							b = (s.minSize = max(_parseSize(e, i.minSize), cssMinDims(e).minSize)),
							v = (s.maxSize = min(i.maxSize ? _parseSize(e, i.maxSize) : 1e5, m)),
							y = (s.resizerPosition = {}),
							z = sC.inset.top,
							$ = sC.inset.left,
							C = sC.innerWidth,
							w = sC.innerHeight,
							S = i.spacing_open
						switch (e) {
							case 'north':
								;(y.min = z + b), (y.max = z + v)
								break
							case 'west':
								;(y.min = $ + b), (y.max = $ + v)
								break
							case 'south':
								;(y.min = z + w - v - S), (y.max = z + w - b - S)
								break
							case 'east':
								;(y.min = $ + C - v - S), (y.max = $ + C - b - S)
						}
					}
				},
				calcNewCenterPaneDims = function () {
					var e = {
						top: getPaneSize('north', !0),
						bottom: getPaneSize('south', !0),
						left: getPaneSize('west', !0),
						right: getPaneSize('east', !0),
						width: 0,
						height: 0,
					}
					return (
						(e.width = sC.innerWidth - e.left - e.right),
						(e.height = sC.innerHeight - e.bottom - e.top),
						(e.top += sC.inset.top),
						(e.bottom += sC.inset.bottom),
						(e.left += sC.inset.left),
						(e.right += sC.inset.right),
						e
					)
				},
				getHoverClasses = function (e, t) {
					var i = $(e),
						s = i.data('layoutRole'),
						n = i.data('layoutEdge'),
						o = options[n],
						a = o[s + 'Class'],
						r = '-' + n,
						l = '-open',
						d = '-closed',
						c = '-sliding',
						u = '-hover ',
						p = i.hasClass(a + d) ? d : l,
						g = p === d ? l : d,
						h = a + u + (a + r + u) + (a + p + u) + (a + r + p + u)
					return (
						t && (h += a + g + u + (a + r + g + u)),
						'resizer' == s && i.hasClass(a + c) && (h += a + c + u + (a + r + c + u)),
						$.trim(h)
					)
				},
				addHover = function (e, t) {
					var i = $(t || this)
					e && 'toggler' === i.data('layoutRole') && e.stopPropagation(),
						i.addClass(getHoverClasses(i))
				},
				removeHover = function (e, t) {
					var i = $(t || this)
					i.removeClass(getHoverClasses(i, !0))
				},
				onResizerEnter = function () {
					{
						var e = $(this).data('layoutEdge'),
							t = state[e]
						$(document)
					}
					t.isResizing ||
						state.paneResizing ||
						(options.maskPanesEarly && showMasks(e, { resizing: !0 }))
				},
				onResizerLeave = function (e, t) {
					{
						var i = t || this,
							s = $(i).data('layoutEdge'),
							n = s + 'ResizerLeave'
						$(document)
					}
					timer.clear(s + '_openSlider'),
						timer.clear(n),
						t
							? options.maskPanesEarly && !state.paneResizing && hideMasks()
							: timer.set(
									n,
									function () {
										onResizerLeave(e, i)
									},
									200
							  )
				},
				_create = function () {
					initOptions()
					var e = options,
						t = state
					return (
						(t.creatingLayout = !0),
						runPluginCallbacks(Instance, $.layout.onCreate),
						!1 === _runCallbacks('onload_start')
							? 'cancel'
							: (_initContainer(),
							  initHotkeys(),
							  $(window).bind('unload.' + sID, unload),
							  runPluginCallbacks(Instance, $.layout.onLoad),
							  e.initPanes && _initLayoutElements(),
							  delete t.creatingLayout,
							  state.initialized)
					)
				},
				isInitialized = function () {
					return state.initialized || state.creatingLayout ? !0 : _initLayoutElements()
				},
				_initLayoutElements = function (e) {
					var t = options
					if (!$N.is(':visible'))
						return (
							!e &&
								browser.webkit &&
								'BODY' === $N[0].tagName &&
								setTimeout(function () {
									_initLayoutElements(!0)
								}, 50),
							!1
						)
					if (!getPane('center').length) return _log(t.errors.centerPaneMissing)
					if (
						((state.creatingLayout = !0),
						$.extend(sC, elDims($N, t.inset)),
						initPanes(),
						t.scrollToBookmarkOnLoad)
					) {
						var i = self.location
						i.hash && i.replace(i.hash)
					}
					return (
						Instance.hasParentLayout
							? (t.resizeWithWindow = !1)
							: t.resizeWithWindow && $(window).bind('resize.' + sID, windowResize),
						delete state.creatingLayout,
						(state.initialized = !0),
						runPluginCallbacks(Instance, $.layout.onReady),
						_runCallbacks('onload_end'),
						!0
					)
				},
				createChildren = function (e, t) {
					var i = evtPane.call(this, e),
						s = $Ps[i]
					if (s) {
						var n = $Cs[i],
							o = state[i],
							a = options[i],
							r = options.stateManagement || {},
							l = t ? (a.children = t) : a.children
						if ($.isPlainObject(l)) l = [l]
						else if (!l || !$.isArray(l)) return
						$.each(l, function (e, t) {
							if ($.isPlainObject(t)) {
								var a = t.containerSelector ? s.find(t.containerSelector) : n || s
								a.each(function () {
									var e = $(this),
										s = e.data('layout')
									if (!s) {
										if (
											(setInstanceKey({ container: e, options: t }, o),
											r.includeChildren && state.stateData[i])
										) {
											var n = state.stateData[i].children || {},
												a = n[t.instanceKey],
												l = t.stateManagement || (t.stateManagement = { autoLoad: !0 })
											l.autoLoad === !0 &&
												a &&
												((l.autoSave = !1),
												(l.includeChildren = !0),
												(l.autoLoad = $.extend(!0, {}, a)))
										}
										;(s = e.layout(t)), s && refreshChildren(i, s)
									}
								})
							}
						})
					}
				},
				setInstanceKey = function (e, t) {
					var i = e.container,
						s = e.options,
						n = s.stateManagement,
						o = s.instanceKey || i.data('layoutInstanceKey')
					return (
						o || (o = (n && n.cookie ? n.cookie.name : '') || s.name),
						(o = o ? o.replace(/[^\w-]/gi, '_').replace(/_{2,}/g, '_') : 'layout' + ++t.childIdx),
						(s.instanceKey = o),
						i.data('layoutInstanceKey', o),
						o
					)
				},
				refreshChildren = function (e, t) {
					var i,
						s = $Ps[e],
						n = children[e],
						o = state[e]
					$.isPlainObject(n) &&
						($.each(n, function (e, t) {
							t.destroyed && delete n[e]
						}),
						$.isEmptyObject(n) && (n = children[e] = null)),
						t || n || (t = s.data('layout')),
						t &&
							((t.hasParentLayout = !0),
							(i = t.options),
							setInstanceKey(t, o),
							n || (n = children[e] = {}),
							(n[i.instanceKey] = t.container.data('layout'))),
						(Instance[e].children = children[e]),
						t || createChildren(e)
				},
				windowResize = function () {
					var e = options,
						t = Number(e.resizeWithWindowDelay)
					10 > t && (t = 100),
						timer.clear('winResize'),
						timer.set(
							'winResize',
							function () {
								timer.clear('winResize'), timer.clear('winResizeRepeater')
								var t = elDims($N, e.inset)
								;(t.innerWidth !== sC.innerWidth || t.innerHeight !== sC.innerHeight) && resizeAll()
							},
							t
						),
						timer.data.winResizeRepeater || setWindowResizeRepeater()
				},
				setWindowResizeRepeater = function () {
					var e = Number(options.resizeWithWindowMaxDelay)
					e > 0 &&
						timer.set(
							'winResizeRepeater',
							function () {
								setWindowResizeRepeater(), resizeAll()
							},
							e
						)
				},
				unload = function () {
					_runCallbacks('onunload_start'),
						runPluginCallbacks(Instance, $.layout.onUnload),
						_runCallbacks('onunload_end')
				},
				_initContainer = function () {
					var e,
						t,
						i = $N[0],
						s = $('html'),
						n = (sC.tagName = i.tagName),
						o = (sC.id = i.id),
						a = (sC.className = i.className),
						r = options,
						l = r.name,
						d = 'position,margin,padding,border',
						c = 'layoutCSS',
						u = {},
						p = 'hidden',
						g = $N.data('parentLayout'),
						h = $N.data('layoutEdge'),
						f = g && h,
						m = $.layout.cssNum
					;(sC.selector = $N.selector.split('.slice')[0]),
						(sC.ref =
							(r.name ? r.name + ' layout / ' : '') + n + (o ? '#' + o : a ? '.[' + a + ']' : '')),
						(sC.isBody = 'BODY' === n),
						f ||
							sC.isBody ||
							((e = $N.closest('.' + $.layout.defaults.panes.paneClass)),
							(g = e.data('parentLayout')),
							(h = e.data('layoutEdge')),
							(f = g && h)),
						$N.data({ layout: Instance, layoutContainer: sID }).addClass(r.containerClass)
					var b = { destroy: '', initPanes: '', resizeAll: 'resizeAll', resize: 'resizeAll' }
					for (l in b) $N.bind('layout' + l.toLowerCase() + '.' + sID, Instance[b[l] || l])
					f && ((Instance.hasParentLayout = !0), g.refreshChildren(h, Instance)),
						$N.data(c) ||
							(sC.isBody
								? ($N.data(
										c,
										$.extend(styles($N, d), {
											height: $N.css('height'),
											overflow: $N.css('overflow'),
											overflowX: $N.css('overflowX'),
											overflowY: $N.css('overflowY'),
										})
								  ),
								  s.data(
										c,
										$.extend(styles(s, 'padding'), {
											height: 'auto',
											overflow: s.css('overflow'),
											overflowX: s.css('overflowX'),
											overflowY: s.css('overflowY'),
										})
								  ))
								: $N.data(
										c,
										styles(
											$N,
											d + ',top,bottom,left,right,width,height,overflow,overflowX,overflowY'
										)
								  ))
					try {
						if (
							((u = { overflow: p, overflowX: p, overflowY: p }),
							$N.css(u),
							r.inset &&
								!$.isPlainObject(r.inset) &&
								((t = parseInt(r.inset, 10) || 0),
								(r.inset = { top: t, bottom: t, left: t, right: t })),
							sC.isBody)
						)
							r.outset
								? $.isPlainObject(r.outset) ||
								  ((t = parseInt(r.outset, 10) || 0),
								  (r.outset = { top: t, bottom: t, left: t, right: t }))
								: (r.outset = {
										top: m(s, 'paddingTop'),
										bottom: m(s, 'paddingBottom'),
										left: m(s, 'paddingLeft'),
										right: m(s, 'paddingRight'),
								  }),
								s.css(u).css({ height: '100%', border: 'none', padding: 0, margin: 0 }),
								browser.isIE6
									? ($N.css({
											width: '100%',
											height: '100%',
											border: 'none',
											padding: 0,
											margin: 0,
											position: 'relative',
									  }),
									  r.inset || (r.inset = elDims($N).inset))
									: ($N.css({ width: 'auto', height: 'auto', margin: 0, position: 'absolute' }),
									  $N.css(r.outset)),
								$.extend(sC, elDims($N, r.inset))
						else {
							var v = $N.css('position')
							;(v && v.match(/(fixed|absolute|relative)/)) || $N.css('position', 'relative'),
								$N.is(':visible') &&
									($.extend(sC, elDims($N, r.inset)),
									sC.innerHeight < 1 &&
										_log(r.errors.noContainerHeight.replace(/CONTAINER/, sC.ref)))
						}
						m($N, 'minWidth') && $N.parent().css('overflowX', 'auto'),
							m($N, 'minHeight') && $N.parent().css('overflowY', 'auto')
					} catch (y) {}
				},
				initHotkeys = function (e) {
					;(e = e ? e.split(',') : _c.borderPanes),
						$.each(e, function (e, t) {
							var i = options[t]
							return i.enableCursorHotkey || i.customHotkey
								? ($(document).bind('keydown.' + sID, keyDown), !1)
								: void 0
						})
				},
				initOptions = function () {
					function e(e) {
						var t = options[e],
							i = options.panes
						t.fxSettings || (t.fxSettings = {}),
							i.fxSettings || (i.fxSettings = {}),
							$.each(['_open', '_close', '_size'], function (s, n) {
								var o = 'fxName' + n,
									a = 'fxSpeed' + n,
									r = 'fxSettings' + n,
									l = (t[o] = t[o] || i[o] || t.fxName || i.fxName || 'none'),
									d = $.effects && ($.effects[l] || ($.effects.effect && $.effects.effect[l]))
								;('none' !== l && options.effects[l] && d) || (l = t[o] = 'none')
								var c = options.effects[l] || {},
									u = c.all || null,
									p = c[e] || null
								;(t[a] = t[a] || i[a] || t.fxSpeed || i.fxSpeed || null),
									(t[r] = $.extend(!0, {}, u, p, i.fxSettings, t.fxSettings, i[r], t[r]))
							}),
							delete t.fxName,
							delete t.fxSpeed,
							delete t.fxSettings
					}
					var t, i, s, n, o, a, r
					if (
						((opts = $.layout.transformData(opts, !0)),
						(opts = $.layout.backwardCompatibility.renameAllOptions(opts)),
						!$.isEmptyObject(opts.panes))
					) {
						for (t = $.layout.optionsMap.noDefault, o = 0, a = t.length; a > o; o++)
							(s = t[o]), delete opts.panes[s]
						for (t = $.layout.optionsMap.layout, o = 0, a = t.length; a > o; o++)
							(s = t[o]), delete opts.panes[s]
					}
					t = $.layout.optionsMap.layout
					var l = $.layout.config.optionRootKeys
					for (s in opts)
						(n = opts[s]),
							$.inArray(s, l) < 0 &&
								$.inArray(s, t) < 0 &&
								(opts.panes[s] || (opts.panes[s] = $.isPlainObject(n) ? $.extend(!0, {}, n) : n),
								delete opts[s])
					$.extend(!0, options, opts),
						$.each(_c.allPanes, function (n, o) {
							if (
								((_c[o] = $.extend(!0, {}, _c.panes, _c[o])),
								(i = options.panes),
								(r = options[o]),
								'center' === o)
							)
								for (t = $.layout.optionsMap.center, n = 0, a = t.length; a > n; n++)
									(s = t[n]), opts.center[s] || (!opts.panes[s] && r[s]) || (r[s] = i[s])
							else
								(r = options[o] = $.extend(!0, {}, i, r)),
									e(o),
									r.resizerClass || (r.resizerClass = 'ui-layout-resizer'),
									r.togglerClass || (r.togglerClass = 'ui-layout-toggler')
							r.paneClass || (r.paneClass = 'ui-layout-pane')
						})
					var d = opts.zIndex,
						c = options.zIndexes
					d > 0 &&
						((c.pane_normal = d),
						(c.content_mask = max(d + 1, c.content_mask)),
						(c.resizer_normal = max(d + 2, c.resizer_normal))),
						delete options.panes
				},
				getPane = function (e) {
					var t = options[e].paneSelector
					if ('#' === t.substr(0, 1)) return $N.find(t).eq(0)
					var i = $N.children(t).eq(0)
					return i.length ? i : $N.children('form:first').children(t).eq(0)
				},
				initPanes = function (e) {
					evtPane(e),
						$.each(_c.allPanes, function (e, t) {
							addPane(t, !0)
						}),
						initHandles(),
						$.each(_c.borderPanes, function (e, t) {
							$Ps[t] && state[t].isVisible && (setSizeLimits(t), makePaneFit(t))
						}),
						sizeMidPanes('center'),
						$.each(_c.allPanes, function (e, t) {
							afterInitPane(t)
						})
				},
				addPane = function (e, t) {
					if (t || isInitialized()) {
						var i,
							s,
							n,
							o = options[e],
							a = state[e],
							r = _c[e],
							l = r.dir,
							d = (a.fx, o.spacing_open || 0, 'center' === e),
							c = {},
							u = $Ps[e]
						if (
							(u ? removePane(e, !1, !0, !1) : ($Cs[e] = !1), (u = $Ps[e] = getPane(e)), !u.length)
						)
							return void ($Ps[e] = !1)
						if (!u.data('layoutCSS')) {
							var p =
								'position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border'
							u.data('layoutCSS', styles(u, p))
						}
						;(Instance[e] = {
							name: e,
							pane: $Ps[e],
							content: $Cs[e],
							options: options[e],
							state: state[e],
							children: children[e],
						}),
							u
								.data({
									parentLayout: Instance,
									layoutPane: Instance[e],
									layoutEdge: e,
									layoutRole: 'pane',
								})
								.css(r.cssReq)
								.css('zIndex', options.zIndexes.pane_normal)
								.css(o.applyDemoStyles ? r.cssDemo : {})
								.addClass(o.paneClass + ' ' + o.paneClass + '-' + e)
								.bind('mouseenter.' + sID, addHover)
								.bind('mouseleave.' + sID, removeHover)
						var g,
							h = {
								hide: '',
								show: '',
								toggle: '',
								close: '',
								open: '',
								slideOpen: '',
								slideClose: '',
								slideToggle: '',
								size: 'sizePane',
								sizePane: 'sizePane',
								sizeContent: '',
								sizeHandles: '',
								enableClosable: '',
								disableClosable: '',
								enableSlideable: '',
								disableSlideable: '',
								enableResizable: '',
								disableResizable: '',
								swapPanes: 'swapPanes',
								swap: 'swapPanes',
								move: 'swapPanes',
								removePane: 'removePane',
								remove: 'removePane',
								createChildren: '',
								resizeChildren: '',
								resizeAll: 'resizeAll',
								resizeLayout: 'resizeAll',
							}
						for (g in h) u.bind('layoutpane' + g.toLowerCase() + '.' + sID, Instance[h[g] || g])
						initContent(e, !1),
							d ||
								((i = a.size = _parseSize(e, o.size)),
								(s = _parseSize(e, o.minSize) || 1),
								(n = _parseSize(e, o.maxSize) || 1e5),
								i > 0 && (i = max(min(i, n), s)),
								(a.autoResize = o.autoResize),
								(a.isClosed = !1),
								(a.isSliding = !1),
								(a.isResizing = !1),
								(a.isHidden = !1),
								a.pins || (a.pins = [])),
							(a.tagName = u[0].tagName),
							(a.edge = e),
							(a.noRoom = !1),
							(a.isVisible = !0),
							setPanePosition(e),
							'horz' === l ? (c.height = cssH(u, i)) : 'vert' === l && (c.width = cssW(u, i)),
							u.css(c),
							'horz' != l && sizeMidPanes(e, !0),
							state.initialized && (initHandles(e), initHotkeys(e)),
							o.initClosed && o.closable && !o.initHidden
								? close(e, !0, !0)
								: o.initHidden || o.initClosed
								? hide(e)
								: a.noRoom || u.css('display', 'block'),
							u.css('visibility', 'visible'),
							o.showOverflowOnHover && u.hover(allowOverflow, resetOverflow),
							state.initialized && afterInitPane(e)
					}
				},
				afterInitPane = function (e) {
					var t = $Ps[e],
						i = state[e],
						s = options[e]
					t &&
						(t.data('layout') && refreshChildren(e, t.data('layout')),
						i.isVisible &&
							(state.initialized ? resizeAll() : sizeContent(e),
							s.triggerEventsOnLoad ? _runCallbacks('onresize_end', e) : resizeChildren(e, !0)),
						s.initChildren && s.children && createChildren(e))
				},
				setPanePosition = function (e) {
					;(e = e ? e.split(',') : _c.borderPanes),
						$.each(e, function (e, t) {
							var i = $Ps[t],
								s = $Rs[t],
								n = (options[t], state[t]),
								o = _c[t].side,
								a = {}
							if (i) {
								switch (t) {
									case 'north':
										;(a.top = sC.inset.top), (a.left = sC.inset.left), (a.right = sC.inset.right)
										break
									case 'south':
										;(a.bottom = sC.inset.bottom),
											(a.left = sC.inset.left),
											(a.right = sC.inset.right)
										break
									case 'west':
										a.left = sC.inset.left
										break
									case 'east':
										a.right = sC.inset.right
										break
									case 'center':
								}
								i.css(a),
									s && n.isClosed
										? s.css(o, sC.inset[o])
										: s && !n.isHidden && s.css(o, sC.inset[o] + getPaneSize(t))
							}
						})
				},
				initHandles = function (e) {
					;(e = e ? e.split(',') : _c.borderPanes),
						$.each(e, function (e, t) {
							var i = $Ps[t]
							if ((($Rs[t] = !1), ($Ts[t] = !1), i)) {
								var s = options[t],
									n = state[t],
									o = (_c[t], '#' === s.paneSelector.substr(0, 1) ? s.paneSelector.substr(1) : ''),
									a = s.resizerClass,
									r = s.togglerClass,
									l = (n.isVisible ? s.spacing_open : s.spacing_closed, '-' + t),
									d = (n.isVisible ? '-open' : '-closed', Instance[t]),
									c = (d.resizer = $Rs[t] = $('<div></div>')),
									u = (d.toggler = s.closable ? ($Ts[t] = $('<div></div>')) : !1)
								!n.isVisible &&
									s.slidable &&
									c.attr('title', s.tips.Slide).css('cursor', s.sliderCursor),
									c
										.attr('id', o ? o + '-resizer' : '')
										.data({
											parentLayout: Instance,
											layoutPane: Instance[t],
											layoutEdge: t,
											layoutRole: 'resizer',
										})
										.css(_c.resizers.cssReq)
										.css('zIndex', options.zIndexes.resizer_normal)
										.css(s.applyDemoStyles ? _c.resizers.cssDemo : {})
										.addClass(a + ' ' + a + l)
										.hover(addHover, removeHover)
										.hover(onResizerEnter, onResizerLeave)
										.mousedown($.layout.disableTextSelection)
										.mouseup($.layout.enableTextSelection)
										.appendTo($N),
									$.fn.disableSelection && c.disableSelection(),
									s.resizerDblClickToggle && c.bind('dblclick.' + sID, toggle),
									u &&
										(u
											.attr('id', o ? o + '-toggler' : '')
											.data({
												parentLayout: Instance,
												layoutPane: Instance[t],
												layoutEdge: t,
												layoutRole: 'toggler',
											})
											.css(_c.togglers.cssReq)
											.css(s.applyDemoStyles ? _c.togglers.cssDemo : {})
											.addClass(r + ' ' + r + l)
											.hover(addHover, removeHover)
											.bind('mouseenter', onResizerEnter)
											.appendTo(c),
										s.togglerContent_open &&
											$('<span>' + s.togglerContent_open + '</span>')
												.data({ layoutEdge: t, layoutRole: 'togglerContent' })
												.data('layoutRole', 'togglerContent')
												.data('layoutEdge', t)
												.addClass('content content-open')
												.css('display', 'none')
												.appendTo(u),
										s.togglerContent_closed &&
											$('<span>' + s.togglerContent_closed + '</span>')
												.data({ layoutEdge: t, layoutRole: 'togglerContent' })
												.addClass('content content-closed')
												.css('display', 'none')
												.appendTo(u),
										enableClosable(t)),
									initResizable(t),
									n.isVisible ? setAsOpen(t) : (setAsClosed(t), bindStartSlidingEvents(t, !0))
							}
						}),
						sizeHandles()
				},
				initContent = function (e, t) {
					if (isInitialized()) {
						var i,
							s = options[e],
							n = s.contentSelector,
							o = Instance[e],
							a = $Ps[e]
						n &&
							(i =
								o.content =
								$Cs[e] =
									s.findNestedContent ? a.find(n).eq(0) : a.children(n).eq(0)),
							i && i.length
								? (i.data('layoutRole', 'content'),
								  i.data('layoutCSS') || i.data('layoutCSS', styles(i, 'height')),
								  i.css(_c.content.cssReq),
								  s.applyDemoStyles && (i.css(_c.content.cssDemo), a.css(_c.content.cssDemoPane)),
								  a.css('overflowX').match(/(scroll|auto)/) && a.css('overflow', 'hidden'),
								  (state[e].content = {}),
								  t !== !1 && sizeContent(e))
								: (o.content = $Cs[e] = !1)
					}
				},
				initResizable = function (e) {
					var t = $.layout.plugins.draggable
					;(e = e ? e.split(',') : _c.borderPanes),
						$.each(e, function (e, s) {
							var n = options[s]
							if (!t || !$Ps[s] || !n.resizable) return (n.resizable = !1), !0
							var o,
								a,
								r = state[s],
								l = options.zIndexes,
								d = _c[s],
								c = 'horz' == d.dir ? 'top' : 'left',
								u = ($Ps[s], $Rs[s]),
								p = n.resizerClass,
								g = 0,
								h = p + '-drag',
								f = p + '-' + s + '-drag',
								m = p + '-dragging',
								b = p + '-' + s + '-dragging',
								v = p + '-dragging-limit',
								y = p + '-' + s + '-dragging-limit',
								z = !1
							r.isClosed || u.attr('title', n.tips.Resize).css('cursor', n.resizerCursor),
								u.draggable({
									containment: $N[0],
									axis: 'horz' == d.dir ? 'y' : 'x',
									delay: 0,
									distance: 1,
									grid: n.resizingGrid,
									helper: 'clone',
									opacity: n.resizerDragOpacity,
									addClasses: !1,
									zIndex: l.resizer_drag,
									start: function (e, t) {
										return (
											(n = options[s]),
											(r = state[s]),
											(a = n.livePaneResizing),
											!1 === _runCallbacks('ondrag_start', s)
												? !1
												: ((r.isResizing = !0),
												  (state.paneResizing = s),
												  timer.clear(s + '_closeSlider'),
												  setSizeLimits(s),
												  (o = r.resizerPosition),
												  (g = t.position[c]),
												  u.addClass(h + ' ' + f),
												  (z = !1),
												  void showMasks(s, { resizing: !0 }))
										)
									},
									drag: function (e, t) {
										z ||
											(t.helper
												.addClass(m + ' ' + b)
												.css({ right: 'auto', bottom: 'auto' })
												.children()
												.css('visibility', 'hidden'),
											(z = !0),
											r.isSliding && $Ps[s].css('zIndex', l.pane_sliding))
										var d = 0
										t.position[c] < o.min
											? ((t.position[c] = o.min), (d = -1))
											: t.position[c] > o.max && ((t.position[c] = o.max), (d = 1)),
											d
												? (t.helper.addClass(v + ' ' + y),
												  (window.defaultStatus =
														(d > 0 && s.match(/(north|west)/)) || (0 > d && s.match(/(south|east)/))
															? n.tips.maxSizeWarning
															: n.tips.minSizeWarning))
												: (t.helper.removeClass(v + ' ' + y), (window.defaultStatus = '')),
											a &&
												Math.abs(t.position[c] - g) >= n.liveResizingTolerance &&
												((g = t.position[c]), i(e, t, s))
									},
									stop: function (e, t) {
										$('body').enableSelection(),
											(window.defaultStatus = ''),
											u.removeClass(h + ' ' + f),
											(r.isResizing = !1),
											(state.paneResizing = !1),
											i(e, t, s, !0)
									},
								})
						})
					var i = function (e, t, i, s) {
						var n,
							o = t.position,
							a = _c[i],
							r = options[i],
							l = state[i]
						switch (i) {
							case 'north':
								n = o.top
								break
							case 'west':
								n = o.left
								break
							case 'south':
								n = sC.layoutHeight - o.top - r.spacing_open
								break
							case 'east':
								n = sC.layoutWidth - o.left - r.spacing_open
						}
						var d = n - sC.inset[a.side]
						if (s)
							!1 !== _runCallbacks('ondrag_end', i) && manualSizePane(i, d, !1, !0),
								hideMasks(!0),
								l.isSliding && showMasks(i, { resizing: !0 })
						else {
							if (Math.abs(d - l.size) < r.liveResizingTolerance) return
							manualSizePane(i, d, !1, !0), sizeMasks()
						}
					}
				},
				sizeMask = function () {
					var e = $(this),
						t = e.data('layoutMask'),
						i = state[t]
					'IFRAME' == i.tagName &&
						i.isVisible &&
						e.css({
							top: i.offsetTop,
							left: i.offsetLeft,
							width: i.outerWidth,
							height: i.outerHeight,
						})
				},
				sizeMasks = function () {
					$Ms.each(sizeMask)
				},
				showMasks = function (e, t) {
					var i,
						s,
						n = _c[e],
						o = ['center'],
						a = options.zIndexes,
						r = $.extend(
							{ objectsOnly: !1, animation: !1, resizing: !0, sliding: state[e].isSliding },
							t
						)
					r.resizing && o.push(e),
						r.sliding && o.push(_c.oppositeEdge[e]),
						'horz' === n.dir && (o.push('west'), o.push('east')),
						$.each(o, function (e, t) {
							;(s = state[t]),
								(i = options[t]),
								s.isVisible &&
									(i.maskObjects || (!r.objectsOnly && i.maskContents)) &&
									getMasks(t).each(function () {
										sizeMask.call(this),
											(this.style.zIndex = s.isSliding ? a.pane_sliding + 1 : a.pane_normal + 1),
											(this.style.display = 'block')
									})
						})
				},
				hideMasks = function (e) {
					if (e || !state.paneResizing) $Ms.hide()
					else if (!e && !$.isEmptyObject(state.panesSliding))
						for (var t, i, s = $Ms.length - 1; s >= 0; s--)
							(i = $Ms.eq(s)), (t = i.data('layoutMask')), options[t].maskObjects || i.hide()
				},
				getMasks = function (e) {
					for (var t, i = $([]), s = 0, n = $Ms.length; n > s; s++)
						(t = $Ms.eq(s)), t.data('layoutMask') === e && (i = i.add(t))
					return i.length ? i : createMasks(e)
				},
				createMasks = function (e) {
					var t,
						i,
						s,
						n,
						o,
						a = $Ps[e],
						r = state[e],
						l = options[e],
						d = options.zIndexes
					if (!l.maskContents && !l.maskObjects) return $([])
					for (o = 0; o < (l.maskObjects ? 2 : 1); o++)
						(t = l.maskObjects && 0 == o),
							(i = document.createElement(t ? 'iframe' : 'div')),
							(s = $(i).data('layoutMask', e)),
							(i.className = 'ui-layout-mask ui-layout-mask-' + e),
							(n = i.style),
							(n.background = '#FFF'),
							(n.position = 'absolute'),
							(n.display = 'block'),
							t
								? ((i.src = 'about:blank'),
								  (i.frameborder = 0),
								  (n.border = 0),
								  (n.opacity = 0),
								  (n.filter = "Alpha(Opacity='0')"))
								: ((n.opacity = 0.001), (n.filter = "Alpha(Opacity='1')")),
							'IFRAME' == r.tagName
								? ((n.zIndex = d.pane_normal + 1), $N.append(i))
								: (s.addClass('ui-layout-mask-inside-pane'),
								  (n.zIndex = l.maskZindex || d.content_mask),
								  (n.top = 0),
								  (n.left = 0),
								  (n.width = '100%'),
								  (n.height = '100%'),
								  a.append(i)),
							($Ms = $Ms.add(i))
					return $Ms
				},
				destroy = function (e, t) {
					$(window).unbind('.' + sID),
						$(document).unbind('.' + sID),
						'object' == typeof e ? evtPane(e) : (t = e),
						$N
							.clearQueue()
							.removeData('layout')
							.removeData('layoutContainer')
							.removeClass(options.containerClass)
							.unbind('.' + sID),
						$Ms.remove(),
						$.each(_c.allPanes, function (e, i) {
							removePane(i, !1, !0, t)
						})
					var i = 'layoutCSS'
					$N.data(i) && !$N.data('layoutRole') && $N.css($N.data(i)).removeData(i),
						'BODY' === sC.tagName && ($N = $('html')).data(i) && $N.css($N.data(i)).removeData(i),
						runPluginCallbacks(Instance, $.layout.onDestroy),
						unload()
					for (var s in Instance) s.match(/^(container|options)$/) || delete Instance[s]
					return (Instance.destroyed = !0), Instance
				},
				removePane = function (e, t, i, s) {
					if (isInitialized()) {
						var n = evtPane.call(this, e),
							o = $Ps[n],
							a = $Cs[n],
							r = $Rs[n],
							l = $Ts[n]
						o && $.isEmptyObject(o.data()) && (o = !1),
							a && $.isEmptyObject(a.data()) && (a = !1),
							r && $.isEmptyObject(r.data()) && (r = !1),
							l && $.isEmptyObject(l.data()) && (l = !1),
							o && o.stop(!0, !0)
						var d = options[n],
							c = state[n],
							u = 'layout',
							p = 'layoutCSS',
							g = children[n],
							h = $.isPlainObject(g) && !$.isEmptyObject(g),
							f = void 0 !== s ? s : d.destroyChildren
						if (
							(h &&
								f &&
								($.each(g, function (e, t) {
									t.destroyed || t.destroy(!0), t.destroyed && delete g[e]
								}),
								$.isEmptyObject(g) && ((g = children[n] = null), (h = !1))),
							o && t && !h)
						)
							o.remove()
						else if (o && o[0]) {
							var m = d.paneClass,
								b = m + '-' + n,
								v = '-open',
								y = '-sliding',
								z = '-closed',
								C = [m, m + v, m + z, m + y, b, b + v, b + z, b + y]
							$.merge(C, getHoverClasses(o, !0)),
								o
									.removeClass(C.join(' '))
									.removeData('parentLayout')
									.removeData('layoutPane')
									.removeData('layoutRole')
									.removeData('layoutEdge')
									.removeData('autoHidden')
									.unbind('.' + sID),
								h && a
									? (a.width(a.width()),
									  $.each(g, function (e, t) {
											t.resizeAll()
									  }))
									: a && a.css(a.data(p)).removeData(p).removeData('layoutRole'),
								o.data(u) || o.css(o.data(p)).removeData(p)
						}
						l && l.remove(),
							r && r.remove(),
							(Instance[n] = $Ps[n] = $Cs[n] = $Rs[n] = $Ts[n] = !1),
							(c = { removed: !0 }),
							i || resizeAll()
					}
				},
				_hidePane = function (e) {
					var t = $Ps[e],
						i = options[e],
						s = t[0].style
					i.useOffscreenClose
						? (t.data(_c.offscreenReset) ||
								t.data(_c.offscreenReset, { left: s.left, right: s.right }),
						  t.css(_c.offscreenCSS))
						: t.hide().removeData(_c.offscreenReset)
				},
				_showPane = function (e) {
					var t = $Ps[e],
						i = options[e],
						s = _c.offscreenCSS,
						n = t.data(_c.offscreenReset),
						o = t[0].style
					t.show().removeData(_c.offscreenReset),
						i.useOffscreenClose &&
							n &&
							(o.left == s.left && (o.left = n.left), o.right == s.right && (o.right = n.right))
				},
				hide = function (e, t) {
					if (isInitialized()) {
						var i = evtPane.call(this, e),
							s = options[i],
							n = state[i],
							o = $Ps[i],
							a = $Rs[i]
						'center' !== i &&
							o &&
							!n.isHidden &&
							((state.initialized && !1 === _runCallbacks('onhide_start', i)) ||
								((n.isSliding = !1),
								delete state.panesSliding[i],
								a && a.hide(),
								!state.initialized || n.isClosed
									? ((n.isClosed = !0),
									  (n.isHidden = !0),
									  (n.isVisible = !1),
									  state.initialized || _hidePane(i),
									  sizeMidPanes('horz' === _c[i].dir ? '' : 'center'),
									  (state.initialized || s.triggerEventsOnLoad) && _runCallbacks('onhide_end', i))
									: ((n.isHiding = !0), close(i, !1, t))))
					}
				},
				show = function (e, t, i, s) {
					if (isInitialized()) {
						{
							var n = evtPane.call(this, e),
								o = (options[n], state[n]),
								a = $Ps[n]
							$Rs[n]
						}
						'center' !== n &&
							a &&
							o.isHidden &&
							!1 !== _runCallbacks('onshow_start', n) &&
							((o.isShowing = !0),
							(o.isSliding = !1),
							delete state.panesSliding[n],
							t === !1 ? close(n, !0) : open(n, !1, i, s))
					}
				},
				toggle = function (e, t) {
					if (isInitialized()) {
						var i = evtObj(e),
							s = evtPane.call(this, e),
							n = state[s]
						i && i.stopImmediatePropagation(),
							n.isHidden ? show(s) : n.isClosed ? open(s, !!t) : close(s)
					}
				},
				_closePane = function (e, t) {
					var i = ($Ps[e], state[e])
					_hidePane(e), (i.isClosed = !0), (i.isVisible = !1), t && setAsClosed(e)
				},
				close = function (e, t, i, s) {
					function n() {
						;(p.isMoving = !1), bindStartSlidingEvents(o, !0)
						var e = _c.oppositeEdge[o]
						state[e].noRoom && (setSizeLimits(e), makePaneFit(e)),
							s ||
								(!state.initialized && !u.triggerEventsOnLoad) ||
								(r || _runCallbacks('onclose_end', o),
								r && _runCallbacks('onshow_end', o),
								l && _runCallbacks('onhide_end', o))
					}
					var o = evtPane.call(this, e)
					if ('center' !== o) {
						if (!state.initialized && $Ps[o]) return void _closePane(o, !0)
						if (isInitialized()) {
							{
								var a,
									r,
									l,
									d,
									c = $Ps[o],
									u = ($Rs[o], $Ts[o], options[o]),
									p = state[o]
								_c[o]
							}
							$N.queue(function (e) {
								if (
									!c ||
									(!u.closable && !p.isShowing && !p.isHiding) ||
									(!t && p.isClosed && !p.isShowing)
								)
									return e()
								var s = !p.isShowing && !1 === _runCallbacks('onclose_start', o)
								return (
									(r = p.isShowing),
									(l = p.isHiding),
									(d = p.isSliding),
									delete p.isShowing,
									delete p.isHiding,
									s
										? e()
										: ((a = !i && !p.isClosed && 'none' != u.fxName_close),
										  (p.isMoving = !0),
										  (p.isClosed = !0),
										  (p.isVisible = !1),
										  l ? (p.isHidden = !0) : r && (p.isHidden = !1),
										  p.isSliding
												? bindStopSlidingEvents(o, !1)
												: sizeMidPanes('horz' === _c[o].dir ? '' : 'center', !1),
										  setAsClosed(o),
										  void (a
												? (lockPaneForFX(o, !0),
												  c.hide(u.fxName_close, u.fxSettings_close, u.fxSpeed_close, function () {
														lockPaneForFX(o, !1), p.isClosed && n(), e()
												  }))
												: (_hidePane(o), n(), e())))
								)
							})
						}
					}
				},
				setAsClosed = function (e) {
					if ($Rs[e]) {
						var t = ($Ps[e], $Rs[e]),
							i = $Ts[e],
							s = options[e],
							n = state[e],
							o = _c[e].side,
							a = s.resizerClass,
							r = s.togglerClass,
							l = '-' + e,
							d = '-open',
							c = '-sliding',
							u = '-closed'
						t
							.css(o, sC.inset[o])
							.removeClass(a + d + ' ' + a + l + d)
							.removeClass(a + c + ' ' + a + l + c)
							.addClass(a + u + ' ' + a + l + u),
							n.isHidden && t.hide(),
							s.resizable &&
								$.layout.plugins.draggable &&
								t
									.draggable('disable')
									.removeClass('ui-state-disabled')
									.css('cursor', 'default')
									.attr('title', ''),
							i &&
								(i
									.removeClass(r + d + ' ' + r + l + d)
									.addClass(r + u + ' ' + r + l + u)
									.attr('title', s.tips.Open),
								i.children('.content-open').hide(),
								i.children('.content-closed').css('display', 'block')),
							syncPinBtns(e, !1),
							state.initialized && sizeHandles()
					}
				},
				open = function (e, t, i, s) {
					function n() {
						;(c.isMoving = !1),
							_fixIframe(r),
							c.isSliding || sizeMidPanes('vert' == _c[r].dir ? 'center' : '', !1),
							setAsOpen(r)
					}
					if (isInitialized()) {
						{
							var o,
								a,
								r = evtPane.call(this, e),
								l = $Ps[r],
								d = ($Rs[r], $Ts[r], options[r]),
								c = state[r]
							_c[r]
						}
						'center' !== r &&
							$N.queue(function (e) {
								if (
									!l ||
									(!d.resizable && !d.closable && !c.isShowing) ||
									(c.isVisible && !c.isSliding)
								)
									return e()
								if (c.isHidden && !c.isShowing) return e(), void show(r, !0)
								c.autoResize && c.size != d.size
									? sizePane(r, d.size, !0, !0, !0)
									: setSizeLimits(r, t)
								var u = _runCallbacks('onopen_start', r)
								return 'abort' === u
									? e()
									: ('NC' !== u && setSizeLimits(r, t),
									  c.minSize > c.maxSize
											? (syncPinBtns(r, !1),
											  !s && d.tips.noRoomToOpen && alert(d.tips.noRoomToOpen),
											  e())
											: (t
													? bindStopSlidingEvents(r, !0)
													: c.isSliding
													? bindStopSlidingEvents(r, !1)
													: d.slidable && bindStartSlidingEvents(r, !1),
											  (c.noRoom = !1),
											  makePaneFit(r),
											  (a = c.isShowing),
											  delete c.isShowing,
											  (o = !i && c.isClosed && 'none' != d.fxName_open),
											  (c.isMoving = !0),
											  (c.isVisible = !0),
											  (c.isClosed = !1),
											  a && (c.isHidden = !1),
											  void (o
													? (lockPaneForFX(r, !0),
													  l.show(d.fxName_open, d.fxSettings_open, d.fxSpeed_open, function () {
															lockPaneForFX(r, !1), c.isVisible && n(), e()
													  }))
													: (_showPane(r), n(), e()))))
							})
					}
				},
				setAsOpen = function (e, t) {
					var i = $Ps[e],
						s = $Rs[e],
						n = $Ts[e],
						o = options[e],
						a = state[e],
						r = _c[e].side,
						l = o.resizerClass,
						d = o.togglerClass,
						c = '-' + e,
						u = '-open',
						p = '-closed',
						g = '-sliding'
					s
						.css(r, sC.inset[r] + getPaneSize(e))
						.removeClass(l + p + ' ' + l + c + p)
						.addClass(l + u + ' ' + l + c + u),
						a.isSliding
							? s.addClass(l + g + ' ' + l + c + g)
							: s.removeClass(l + g + ' ' + l + c + g),
						removeHover(0, s),
						o.resizable && $.layout.plugins.draggable
							? s.draggable('enable').css('cursor', o.resizerCursor).attr('title', o.tips.Resize)
							: a.isSliding || s.css('cursor', 'default'),
						n &&
							(n
								.removeClass(d + p + ' ' + d + c + p)
								.addClass(d + u + ' ' + d + c + u)
								.attr('title', o.tips.Close),
							removeHover(0, n),
							n.children('.content-closed').hide(),
							n.children('.content-open').css('display', 'block')),
						syncPinBtns(e, !a.isSliding),
						$.extend(a, elDims(i)),
						state.initialized && (sizeHandles(), sizeContent(e, !0)),
						!t &&
							(state.initialized || o.triggerEventsOnLoad) &&
							i.is(':visible') &&
							(_runCallbacks('onopen_end', e),
							a.isShowing && _runCallbacks('onshow_end', e),
							state.initialized && _runCallbacks('onresize_end', e))
				},
				slideOpen = function (e) {
					function t() {
						n.isClosed ? n.isMoving || open(s, !0) : bindStopSlidingEvents(s, !0)
					}
					if (isInitialized()) {
						var i = evtObj(e),
							s = evtPane.call(this, e),
							n = state[s],
							o = options[s].slideDelay_open
						'center' !== s &&
							(i && i.stopImmediatePropagation(),
							n.isClosed && i && 'mouseenter' === i.type && o > 0
								? timer.set(s + '_openSlider', t, o)
								: t())
					}
				},
				slideClose = function (e) {
					function t() {
						o.isClosed ? bindStopSlidingEvents(s, !1) : o.isMoving || close(s)
					}
					if (isInitialized()) {
						var i = evtObj(e),
							s = evtPane.call(this, e),
							n = options[s],
							o = state[s],
							a = o.isMoving ? 1e3 : 300
						if ('center' !== s && !o.isClosed && !o.isResizing)
							if ('click' === n.slideTrigger_close) t()
							else {
								if (n.preventQuickSlideClose && o.isMoving) return
								if (n.preventPrematureSlideClose && i && $.layout.isMouseOverElem(i, $Ps[s])) return
								i ? timer.set(s + '_closeSlider', t, max(n.slideDelay_close, a)) : t()
							}
					}
				},
				slideToggle = function (e) {
					var t = evtPane.call(this, e)
					toggle(t, !0)
				},
				lockPaneForFX = function (e, t) {
					var i = $Ps[e],
						s = state[e],
						n = options[e],
						o = options.zIndexes
					t
						? (showMasks(e, { animation: !0, objectsOnly: !0 }),
						  i.css({ zIndex: o.pane_animate }),
						  'south' == e
								? i.css({ top: sC.inset.top + sC.innerHeight - i.outerHeight() })
								: 'east' == e && i.css({ left: sC.inset.left + sC.innerWidth - i.outerWidth() }))
						: (hideMasks(),
						  i.css({ zIndex: s.isSliding ? o.pane_sliding : o.pane_normal }),
						  'south' == e
								? i.css({ top: 'auto' })
								: 'east' != e || i.css('left').match(/\-99999/) || i.css({ left: 'auto' }),
						  browser.msie &&
								n.fxOpacityFix &&
								'slide' != n.fxName_open &&
								i.css('filter') &&
								1 == i.css('opacity') &&
								i[0].style.removeAttribute('filter'))
				},
				bindStartSlidingEvents = function (e, t) {
					var i = options[e],
						s = ($Ps[e], $Rs[e]),
						n = i.slideTrigger_open.toLowerCase()
					!s ||
						(t && !i.slidable) ||
						(n.match(/mouseover/)
							? (n = i.slideTrigger_open = 'mouseenter')
							: n.match(/(click|dblclick|mouseenter)/) || (n = i.slideTrigger_open = 'click'),
						i.resizerDblClickToggle &&
							n.match(/click/) &&
							s[t ? 'unbind' : 'bind']('dblclick.' + sID, toggle),
						s[t ? 'bind' : 'unbind'](n + '.' + sID, slideOpen)
							.css('cursor', t ? i.sliderCursor : 'default')
							.attr('title', t ? i.tips.Slide : ''))
				},
				bindStopSlidingEvents = function (e, t) {
					function i(t) {
						timer.clear(e + '_closeSlider'), t.stopPropagation()
					}
					var s = options[e],
						n = state[e],
						o = (_c[e], options.zIndexes),
						a = s.slideTrigger_close.toLowerCase(),
						r = t ? 'bind' : 'unbind',
						l = $Ps[e],
						d = $Rs[e]
					timer.clear(e + '_closeSlider'),
						t
							? ((n.isSliding = !0), (state.panesSliding[e] = !0), bindStartSlidingEvents(e, !1))
							: ((n.isSliding = !1), delete state.panesSliding[e]),
						l.css('zIndex', t ? o.pane_sliding : o.pane_normal),
						d.css('zIndex', t ? o.pane_sliding + 2 : o.resizer_normal),
						a.match(/(click|mouseleave)/) || (a = s.slideTrigger_close = 'mouseleave'),
						d[r](a, slideClose),
						'mouseleave' === a &&
							(l[r]('mouseleave.' + sID, slideClose),
							d[r]('mouseenter.' + sID, i),
							l[r]('mouseenter.' + sID, i)),
						t
							? 'click' !== a ||
							  s.resizable ||
							  (d.css('cursor', t ? s.sliderCursor : 'default'),
							  d.attr('title', t ? s.tips.Close : ''))
							: timer.clear(e + '_closeSlider')
				},
				makePaneFit = function (e, t, i, s) {
					var n = options[e],
						o = state[e],
						a = _c[e],
						r = $Ps[e],
						l = $Rs[e],
						d = 'vert' === a.dir,
						c = !1
					if (
						(('center' === e || (d && o.noVerticalRoom)) &&
							((c = o.maxHeight >= 0),
							c && o.noRoom
								? (_showPane(e),
								  l && l.show(),
								  (o.isVisible = !0),
								  (o.noRoom = !1),
								  d && (o.noVerticalRoom = !1),
								  _fixIframe(e))
								: c ||
								  o.noRoom ||
								  (_hidePane(e), l && l.hide(), (o.isVisible = !1), (o.noRoom = !0))),
						'center' === e)
					);
					else if (o.minSize <= o.maxSize) {
						if (((c = !0), o.size > o.maxSize)) sizePane(e, o.maxSize, i, !0, s)
						else if (o.size < o.minSize) sizePane(e, o.minSize, i, !0, s)
						else if (l && o.isVisible && r.is(':visible')) {
							var u = o.size + sC.inset[a.side]
							$.layout.cssNum(l, a.side) != u && l.css(a.side, u)
						}
						o.noRoom &&
							(o.wasOpen && n.closable
								? n.autoReopen
									? open(e, !1, !0, !0)
									: (o.noRoom = !1)
								: show(e, o.wasOpen, !0, !0))
					} else
						o.noRoom ||
							((o.noRoom = !0),
							(o.wasOpen = !o.isClosed && !o.isSliding),
							o.isClosed || (n.closable ? close(e, !0, !0) : hide(e, !0)))
				},
				manualSizePane = function (e, t, i, s, n) {
					if (isInitialized()) {
						var o = evtPane.call(this, e),
							a = options[o],
							r = state[o],
							l = n || (a.livePaneResizing && !r.isResizing)
						'center' !== o && ((r.autoResize = !1), sizePane(o, t, i, s, l))
					}
				},
				sizePane = function (e, t, i, s, n) {
					function o() {
						for (
							var e = 'width' === h ? u.outerWidth() : u.outerHeight(),
								s = [
									{
										pane: l,
										count: 1,
										target: t,
										actual: e,
										correct: t === e,
										attempt: t,
										cssSize: r,
									},
								],
								o = s[0],
								d = {},
								m = 'Inaccurate size after resizing the ' + l + '-pane.';
							!(
								o.correct ||
								((d = { pane: l, count: o.count + 1, target: t }),
								(d.attempt =
									o.actual > t
										? max(0, o.attempt - (o.actual - t))
										: max(0, o.attempt + (t - o.actual))),
								(d.cssSize = cssSize(l, d.attempt)),
								u.css(h, d.cssSize),
								(d.actual = 'width' == h ? u.outerWidth() : u.outerHeight()),
								(d.correct = t === d.actual),
								1 === s.length && (_log(m, !1, !0), _log(o, !1, !0)),
								_log(d, !1, !0),
								s.length > 3)
							);

						)
							s.push(d), (o = s[s.length - 1])
						;(c.size = t),
							$.extend(c, elDims(u)),
							c.isVisible && u.is(':visible') && (p && p.css(g, t + sC.inset[g]), sizeContent(l)),
							!i && !f && state.initialized && c.isVisible && _runCallbacks('onresize_end', l),
							i ||
								(c.isSliding || sizeMidPanes('horz' == _c[l].dir ? '' : 'center', f, n),
								sizeHandles())
						var b = _c.oppositeEdge[l]
						a > t && state[b].noRoom && (setSizeLimits(b), makePaneFit(b, !1, i)),
							s.length > 1 && _log(m + '\nSee the Error Console for details.', !0, !0)
					}
					if (isInitialized()) {
						var a,
							r,
							l = evtPane.call(this, e),
							d = options[l],
							c = state[l],
							u = $Ps[l],
							p = $Rs[l],
							g = _c[l].side,
							h = _c[l].sizeType.toLowerCase(),
							f = c.isResizing && !d.triggerEventsDuringLiveResize,
							m = s !== !0 && d.animatePaneSizing
						'center' !== l &&
							$N.queue(function (e) {
								if (
									(setSizeLimits(l),
									(a = c.size),
									(t = _parseSize(l, t)),
									(t = max(t, _parseSize(l, d.minSize))),
									(t = min(t, c.maxSize)),
									t < c.minSize)
								)
									return e(), void makePaneFit(l, !1, i)
								if (!n && t === a) return e()
								if (
									((c.newSize = t),
									!i && state.initialized && c.isVisible && _runCallbacks('onresize_start', l),
									(r = cssSize(l, t)),
									m && u.is(':visible'))
								) {
									var s = $.layout.effects.size[l] || $.layout.effects.size.all,
										p = d.fxSettings_size.easing || s.easing,
										g = options.zIndexes,
										f = {}
									;(f[h] = r + 'px'),
										(c.isMoving = !0),
										u
											.css({ zIndex: g.pane_animate })
											.show()
											.animate(f, d.fxSpeed_size, p, function () {
												u.css({ zIndex: c.isSliding ? g.pane_sliding : g.pane_normal }),
													(c.isMoving = !1),
													delete c.newSize,
													o(),
													e()
											})
								} else u.css(h, r), delete c.newSize, u.is(':visible') ? o() : (c.size = t), e()
							})
					}
				},
				sizeMidPanes = function (e, t, i) {
					;(e = (e ? e : 'east,west,center').split(',')),
						$.each(e, function (e, s) {
							if ($Ps[s]) {
								var n = options[s],
									o = state[s],
									a = $Ps[s],
									r = ($Rs[s], !0),
									l = {},
									d = $.layout.showInvisibly(a),
									c = calcNewCenterPaneDims()
								if (($.extend(o, elDims(a)), 'center' === s)) {
									if (!i && o.isVisible && c.width === o.outerWidth && c.height === o.outerHeight)
										return a.css(d), !0
									if (
										($.extend(o, cssMinDims(s), { maxWidth: c.width, maxHeight: c.height }),
										(l = c),
										(o.newWidth = l.width),
										(o.newHeight = l.height),
										(l.width = cssW(a, l.width)),
										(l.height = cssH(a, l.height)),
										(r = l.width >= 0 && l.height >= 0),
										!state.initialized && n.minWidth > c.width)
									) {
										var u = n.minWidth - o.outerWidth,
											p = options.east.minSize || 0,
											g = options.west.minSize || 0,
											h = state.east.size,
											f = state.west.size,
											m = h,
											b = f
										if (
											(u > 0 &&
												state.east.isVisible &&
												h > p &&
												((m = max(h - p, h - u)), (u -= h - m)),
											u > 0 &&
												state.west.isVisible &&
												f > g &&
												((b = max(f - g, f - u)), (u -= f - b)),
											0 === u)
										)
											return (
												h && h != p && sizePane('east', m, !0, !0, i),
												f && f != g && sizePane('west', b, !0, !0, i),
												sizeMidPanes('center', t, i),
												void a.css(d)
											)
									}
								} else {
									if (
										(o.isVisible && !o.noVerticalRoom && $.extend(o, elDims(a), cssMinDims(s)),
										!i && !o.noVerticalRoom && c.height === o.outerHeight)
									)
										return a.css(d), !0
									;(l.top = c.top),
										(l.bottom = c.bottom),
										(o.newSize = c.height),
										(l.height = cssH(a, c.height)),
										(o.maxHeight = l.height),
										(r = o.maxHeight >= 0),
										r || (o.noVerticalRoom = !0)
								}
								if (
									(r
										? (!t && state.initialized && _runCallbacks('onresize_start', s),
										  a.css(l),
										  'center' !== s && sizeHandles(s),
										  !o.noRoom || o.isClosed || o.isHidden || makePaneFit(s),
										  o.isVisible && ($.extend(o, elDims(a)), state.initialized && sizeContent(s)))
										: !o.noRoom && o.isVisible && makePaneFit(s),
									a.css(d),
									delete o.newSize,
									delete o.newWidth,
									delete o.newHeight,
									!o.isVisible)
								)
									return !0
								if ('center' === s) {
									var v = browser.isIE6 || !browser.boxModel
									$Ps.north &&
										(v || 'IFRAME' == state.north.tagName) &&
										$Ps.north.css('width', cssW($Ps.north, sC.innerWidth)),
										$Ps.south &&
											(v || 'IFRAME' == state.south.tagName) &&
											$Ps.south.css('width', cssW($Ps.south, sC.innerWidth))
								}
								!t && state.initialized && _runCallbacks('onresize_end', s)
							}
						})
				},
				resizeAll = function (e) {
					var t = sC.innerWidth,
						i = sC.innerHeight
					if ((evtPane(e), $N.is(':visible'))) {
						if (!state.initialized) return void _initLayoutElements()
						if (
							(e === !0 && $.isPlainObject(options.outset) && $N.css(options.outset),
							$.extend(sC, elDims($N, options.inset)),
							sC.outerHeight)
						) {
							if ((e === !0 && setPanePosition(), !1 === _runCallbacks('onresizeall_start')))
								return !1
							{
								var s, n, o
								sC.innerHeight < i, sC.innerWidth < t
							}
							$.each(['south', 'north', 'east', 'west'], function (e, t) {
								$Ps[t] &&
									((n = options[t]),
									(o = state[t]),
									o.autoResize && o.size != n.size
										? sizePane(t, n.size, !0, !0, !0)
										: (setSizeLimits(t), makePaneFit(t, !1, !0, !0)))
							}),
								sizeMidPanes('', !0, !0),
								sizeHandles(),
								$.each(_c.allPanes, function (e, t) {
									;(s = $Ps[t]), s && state[t].isVisible && _runCallbacks('onresize_end', t)
								}),
								_runCallbacks('onresizeall_end')
						}
					}
				},
				resizeChildren = function (e, t) {
					var i = evtPane.call(this, e)
					if (options[i].resizeChildren) {
						t || refreshChildren(i)
						var s = children[i]
						$.isPlainObject(s) &&
							$.each(s, function (e, t) {
								t.destroyed || t.resizeAll()
							})
					}
				},
				sizeContent = function (e, t) {
					if (isInitialized()) {
						var i = evtPane.call(this, e)
						;(i = i ? i.split(',') : _c.allPanes),
							$.each(i, function (e, i) {
								function s(e) {
									return max(l.css.paddingBottom, parseInt(e.css('marginBottom'), 10) || 0)
								}
								function n() {
									var e = options[i].contentIgnoreSelector,
										t = a
											.nextAll()
											.not('.ui-layout-mask')
											.not(e || ':lt(0)'),
										n = t.filter(':visible'),
										o = n.filter(':last')
									;(d = {
										top: a[0].offsetTop,
										height: a.outerHeight(),
										numFooters: t.length,
										hiddenFooters: t.length - n.length,
										spaceBelow: 0,
									}),
										(d.spaceAbove = d.top),
										(d.bottom = d.top + d.height),
										(d.spaceBelow = o.length
											? o[0].offsetTop + o.outerHeight() - d.bottom + s(o)
											: s(a))
								}
								var o = $Ps[i],
									a = $Cs[i],
									r = options[i],
									l = state[i],
									d = l.content
								if (!o || !a || !o.is(':visible')) return !0
								if (
									(a.length || (initContent(i, !1), a)) &&
									!1 !== _runCallbacks('onsizecontent_start', i)
								) {
									;((!l.isMoving && !l.isResizing) ||
										r.liveContentResizing ||
										t ||
										void 0 == d.top) &&
										(n(),
										d.hiddenFooters > 0 &&
											'hidden' === o.css('overflow') &&
											(o.css('overflow', 'visible'), n(), o.css('overflow', 'hidden')))
									var c =
										l.innerHeight -
										(d.spaceAbove - l.css.paddingTop) -
										(d.spaceBelow - l.css.paddingBottom)
									;(a.is(':visible') && d.height == c) ||
										(setOuterHeight(a, c, !0), (d.height = c)),
										state.initialized && _runCallbacks('onsizecontent_end', i)
								}
							})
					}
				},
				sizeHandles = function (e) {
					var t = evtPane.call(this, e)
					;(t = t ? t.split(',') : _c.borderPanes),
						$.each(t, function (e, t) {
							var i,
								s = options[t],
								n = state[t],
								o = $Ps[t],
								a = $Rs[t],
								r = $Ts[t]
							if (o && a) {
								var l,
									d,
									c,
									u = _c[t].dir,
									p = n.isClosed ? '_closed' : '_open',
									g = s['spacing' + p],
									h = s['togglerAlign' + p],
									f = s['togglerLength' + p]
								if (0 === g) return void a.hide()
								if (
									(n.noRoom || n.isHidden || a.show(),
									'horz' === u
										? ((l = sC.innerWidth),
										  (n.resizerLength = l),
										  (d = $.layout.cssNum(o, 'left')),
										  a.css({
												width: cssW(a, l),
												height: cssH(a, g),
												left: d > -9999 ? d : sC.inset.left,
										  }))
										: ((l = o.outerHeight()),
										  (n.resizerLength = l),
										  a.css({
												height: cssH(a, l),
												width: cssW(a, g),
												top: sC.inset.top + getPaneSize('north', !0),
										  })),
									removeHover(s, a),
									r)
								) {
									if (0 === f || (n.isSliding && s.hideTogglerOnSlide)) return void r.hide()
									if ((r.show(), !(f > 0) || '100%' === f || f > l)) (f = l), (c = 0)
									else if (isStr(h))
										switch (h) {
											case 'top':
											case 'left':
												c = 0
												break
											case 'bottom':
											case 'right':
												c = l - f
												break
											case 'middle':
											case 'center':
											default:
												c = round((l - f) / 2)
										}
									else {
										var m = parseInt(h, 10)
										c = h >= 0 ? m : l - f + m
									}
									if ('horz' === u) {
										var b = cssW(r, f)
										r.css({ width: b, height: cssH(r, g), left: c, top: 0 }),
											r.children('.content').each(function () {
												;(i = $(this)), i.css('marginLeft', round((b - i.outerWidth()) / 2))
											})
									} else {
										var v = cssH(r, f)
										r.css({ height: v, width: cssW(r, g), top: c, left: 0 }),
											r.children('.content').each(function () {
												;(i = $(this)), i.css('marginTop', round((v - i.outerHeight()) / 2))
											})
									}
									removeHover(0, r)
								}
								state.initialized || (!s.initHidden && !n.isHidden) || (a.hide(), r && r.hide())
							}
						})
				},
				enableClosable = function (e) {
					if (isInitialized()) {
						var t = evtPane.call(this, e),
							i = $Ts[t],
							s = options[t]
						i &&
							((s.closable = !0),
							i
								.bind('click.' + sID, function (e) {
									e.stopPropagation(), toggle(t)
								})
								.css('visibility', 'visible')
								.css('cursor', 'pointer')
								.attr('title', state[t].isClosed ? s.tips.Open : s.tips.Close)
								.show())
					}
				},
				disableClosable = function (e, t) {
					if (isInitialized()) {
						var i = evtPane.call(this, e),
							s = $Ts[i]
						s &&
							((options[i].closable = !1),
							state[i].isClosed && open(i, !1, !0),
							s
								.unbind('.' + sID)
								.css('visibility', t ? 'hidden' : 'visible')
								.css('cursor', 'default')
								.attr('title', ''))
					}
				},
				enableSlidable = function (e) {
					if (isInitialized()) {
						var t = evtPane.call(this, e),
							i = $Rs[t]
						i &&
							i.data('draggable') &&
							((options[t].slidable = !0), state[t].isClosed && bindStartSlidingEvents(t, !0))
					}
				},
				disableSlidable = function (e) {
					if (isInitialized()) {
						var t = evtPane.call(this, e),
							i = $Rs[t]
						i &&
							((options[t].slidable = !1),
							state[t].isSliding
								? close(t, !1, !0)
								: (bindStartSlidingEvents(t, !1),
								  i.css('cursor', 'default').attr('title', ''),
								  removeHover(null, i[0])))
					}
				},
				enableResizable = function (e) {
					if (isInitialized()) {
						var t = evtPane.call(this, e),
							i = $Rs[t],
							s = options[t]
						i &&
							i.data('draggable') &&
							((s.resizable = !0),
							i.draggable('enable'),
							state[t].isClosed || i.css('cursor', s.resizerCursor).attr('title', s.tips.Resize))
					}
				},
				disableResizable = function (e) {
					if (isInitialized()) {
						var t = evtPane.call(this, e),
							i = $Rs[t]
						i &&
							i.data('draggable') &&
							((options[t].resizable = !1),
							i.draggable('disable').css('cursor', 'default').attr('title', ''),
							removeHover(null, i[0]))
					}
				},
				swapPanes = function (e, t) {
					function i(e) {
						var t = $Ps[e],
							i = $Cs[e]
						return t
							? {
									pane: e,
									P: t ? t[0] : !1,
									C: i ? i[0] : !1,
									state: $.extend(!0, {}, state[e]),
									options: $.extend(!0, {}, options[e]),
							  }
							: !1
					}
					function s(e, t) {
						if (e) {
							var i,
								s,
								n = e.P,
								o = e.C,
								a = e.pane,
								l = _c[t],
								d = $.extend(!0, {}, state[t]),
								c = options[t],
								u = { resizerCursor: c.resizerCursor }
							$.each('fxName,fxSpeed,fxSettings'.split(','), function (e, t) {
								;(u[t + '_open'] = c[t + '_open']),
									(u[t + '_close'] = c[t + '_close']),
									(u[t + '_size'] = c[t + '_size'])
							}),
								($Ps[t] = $(n)
									.data({ layoutPane: Instance[t], layoutEdge: t })
									.css(_c.hidden)
									.css(l.cssReq)),
								($Cs[t] = o ? $(o) : !1),
								(options[t] = $.extend(!0, {}, e.options, u)),
								(state[t] = $.extend(!0, {}, e.state)),
								(i = new RegExp(c.paneClass + '-' + a, 'g')),
								(n.className = n.className.replace(i, c.paneClass + '-' + t)),
								initHandles(t),
								l.dir != _c[a].dir
									? ((s = r[t] || 0),
									  setSizeLimits(t),
									  (s = max(s, state[t].minSize)),
									  manualSizePane(t, s, !0, !0))
									: $Rs[t].css(
											l.side,
											sC.inset[l.side] + (state[t].isVisible ? getPaneSize(t) : 0)
									  ),
								e.state.isVisible && !d.isVisible
									? setAsOpen(t, !0)
									: (setAsClosed(t), bindStartSlidingEvents(t, !0)),
								(e = null)
						}
					}
					if (isInitialized()) {
						var n = evtPane.call(this, e)
						if (
							((state[n].edge = t),
							(state[t].edge = n),
							!1 === _runCallbacks('onswap_start', n) || !1 === _runCallbacks('onswap_start', t))
						)
							return (state[n].edge = n), void (state[t].edge = t)
						var o = i(n),
							a = i(t),
							r = {}
						;(r[n] = o ? o.state.size : 0),
							(r[t] = a ? a.state.size : 0),
							($Ps[n] = !1),
							($Ps[t] = !1),
							(state[n] = {}),
							(state[t] = {}),
							$Ts[n] && $Ts[n].remove(),
							$Ts[t] && $Ts[t].remove(),
							$Rs[n] && $Rs[n].remove(),
							$Rs[t] && $Rs[t].remove(),
							($Rs[n] = $Rs[t] = $Ts[n] = $Ts[t] = !1),
							s(o, t),
							s(a, n),
							(o = a = r = null),
							$Ps[n] && $Ps[n].css(_c.visible),
							$Ps[t] && $Ps[t].css(_c.visible),
							resizeAll(),
							_runCallbacks('onswap_end', n),
							_runCallbacks('onswap_end', t)
					}
				},
				syncPinBtns = function (e, t) {
					$.layout.plugins.buttons &&
						$.each(state[e].pins, function (i, s) {
							$.layout.buttons.setPinState(Instance, $(s), e, t)
						})
				},
				$N = $(this).eq(0)
			if (!$N.length) return _log(options.errors.containerMissing)
			if ($N.data('layoutContainer') && $N.data('layout')) return $N.data('layout')
			var $Ps = {},
				$Cs = {},
				$Rs = {},
				$Ts = {},
				$Ms = $([]),
				sC = state.container,
				sID = state.id,
				Instance = {
					options: options,
					state: state,
					container: $N,
					panes: $Ps,
					contents: $Cs,
					resizers: $Rs,
					togglers: $Ts,
					hide: hide,
					show: show,
					toggle: toggle,
					open: open,
					close: close,
					slideOpen: slideOpen,
					slideClose: slideClose,
					slideToggle: slideToggle,
					setSizeLimits: setSizeLimits,
					_sizePane: sizePane,
					sizePane: manualSizePane,
					sizeContent: sizeContent,
					swapPanes: swapPanes,
					showMasks: showMasks,
					hideMasks: hideMasks,
					initContent: initContent,
					addPane: addPane,
					removePane: removePane,
					createChildren: createChildren,
					refreshChildren: refreshChildren,
					enableClosable: enableClosable,
					disableClosable: disableClosable,
					enableSlidable: enableSlidable,
					disableSlidable: disableSlidable,
					enableResizable: enableResizable,
					disableResizable: disableResizable,
					allowOverflow: allowOverflow,
					resetOverflow: resetOverflow,
					destroy: destroy,
					initPanes: isInitialized,
					resizeAll: resizeAll,
					runCallbacks: _runCallbacks,
					hasParentLayout: !1,
					children: children,
					north: !1,
					south: !1,
					west: !1,
					east: !1,
					center: !1,
				}
			return 'cancel' === _create() ? null : Instance
		})
})(jQuery),
	(function (e) {
		e.layout &&
			(e.ui || (e.ui = {}),
			(e.ui.cookie = {
				acceptsCookies: !!navigator.cookieEnabled,
				read: function (t) {
					var i,
						s,
						n,
						o = document.cookie,
						a = o ? o.split(';') : []
					for (n = 0; (i = a[n]); n++)
						if (((s = e.trim(i).split('=')), s[0] == t)) return decodeURIComponent(s[1])
					return null
				},
				write: function (t, i, s) {
					var n = '',
						o = '',
						a = !1,
						r = s || {},
						l = r.expires || null,
						d = e.type(l)
					'date' === d
						? (o = l)
						: 'string' === d && l > 0 && ((l = parseInt(l, 10)), (d = 'number')),
						'number' === d &&
							((o = new Date()),
							l > 0 ? o.setDate(o.getDate() + l) : (o.setFullYear(1970), (a = !0))),
						o && (n += ';expires=' + o.toUTCString()),
						r.path && (n += ';path=' + r.path),
						r.domain && (n += ';domain=' + r.domain),
						r.secure && (n += ';secure'),
						(document.cookie = t + '=' + (a ? '' : encodeURIComponent(i)) + n)
				},
				clear: function (t) {
					e.ui.cookie.write(t, '', { expires: -1 })
				},
			}),
			e.cookie ||
				(e.cookie = function (t, i, s) {
					var n = e.ui.cookie
					if (null === i) n.clear(t)
					else {
						if (void 0 === i) return n.read(t)
						n.write(t, i, s)
					}
				}),
			(e.layout.plugins.stateManagement = !0),
			(e.layout.defaults.stateManagement = {
				enabled: !1,
				autoSave: !0,
				autoLoad: !0,
				animateLoad: !0,
				includeChildren: !0,
				stateKeys:
					'north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden',
				cookie: { name: '', domain: '', path: '', expires: '', secure: !1 },
			}),
			e.layout.optionsMap.layout.push('stateManagement'),
			e.layout.config.optionRootKeys.push('stateManagement'),
			(e.layout.state = {
				saveCookie: function (t, i, s) {
					var n = t.options,
						o = n.stateManagement,
						a = e.extend(!0, {}, o.cookie, s || null),
						r = (t.state.stateData = t.readState(i || o.stateKeys))
					return (
						e.ui.cookie.write(a.name || n.name || 'Layout', e.layout.state.encodeJSON(r), a),
						e.extend(!0, {}, r)
					)
				},
				deleteCookie: function (t) {
					var i = t.options
					e.ui.cookie.clear(i.stateManagement.cookie.name || i.name || 'Layout')
				},
				readCookie: function (t) {
					var i = t.options,
						s = e.ui.cookie.read(i.stateManagement.cookie.name || i.name || 'Layout')
					return s ? e.layout.state.decodeJSON(s) : {}
				},
				loadCookie: function (t) {
					var i = e.layout.state.readCookie(t)
					return (
						i && !e.isEmptyObject(i) && ((t.state.stateData = e.extend(!0, {}, i)), t.loadState(i)),
						i
					)
				},
				loadState: function (t, i, n) {
					if (e.isPlainObject(i) && !e.isEmptyObject(i)) {
						i = t.state.stateData = e.layout.transformData(i)
						var o = t.options.stateManagement
						if (
							((n = e.extend({ animateLoad: !1, includeChildren: o.includeChildren }, n)),
							t.state.initialized)
						) {
							var a,
								r,
								l,
								d,
								c,
								u = !n.animateLoad
							if (
								(e.each(e.layout.config.borderPanes, function (n, o) {
									;(a = i[o]),
										e.isPlainObject(a) &&
											((s = a.size),
											(r = a.initClosed),
											(l = a.initHidden),
											(ar = a.autoResize),
											(d = t.state[o]),
											(c = d.isVisible),
											ar && (d.autoResize = ar),
											c || t._sizePane(o, s, !1, !1, !1),
											l === !0
												? t.hide(o, u)
												: r === !0
												? t.close(o, !1, u)
												: r === !1
												? t.open(o, !1, u)
												: l === !1 && t.show(o, !1, u),
											c && t._sizePane(o, s, !1, !1, u))
								}),
								n.includeChildren)
							) {
								var p, g
								e.each(t.children, function (t, s) {
									;(p = i[t] ? i[t].children : 0),
										p &&
											s &&
											e.each(s, function (e, t) {
												;(g = p[e]), t && g && t.loadState(g)
											})
								})
							}
						} else {
							var a = e.extend(!0, {}, i)
							e.each(e.layout.config.allPanes, function (e, t) {
								a[t] && delete a[t].children
							}),
								e.extend(!0, t.options, a)
						}
					}
				},
				readState: function (t, i) {
					'string' === e.type(i) && (i = { keys: i }), i || (i = {})
					var s,
						n,
						o,
						a,
						r,
						l,
						d,
						c = t.options.stateManagement,
						u = i.includeChildren,
						p = void 0 !== u ? u : c.includeChildren,
						g = i.stateKeys || c.stateKeys,
						h = { isClosed: 'initClosed', isHidden: 'initHidden' },
						f = t.state,
						m = e.layout.config.allPanes,
						b = {}
					e.isArray(g) && (g = g.join(',')), (g = g.replace(/__/g, '.').split(','))
					for (var v = 0, y = g.length; y > v; v++)
						(s = g[v].split('.')),
							(n = s[0]),
							(o = s[1]),
							e.inArray(n, m) < 0 ||
								((a = f[n][o]),
								void 0 != a &&
									('isClosed' == o && f[n].isSliding && (a = !0),
									((b[n] || (b[n] = {}))[h[o] ? h[o] : o] = a)))
					return (
						p &&
							e.each(m, function (i, s) {
								;(l = t.children[s]),
									(r = f.stateData[s]),
									e.isPlainObject(l) &&
										!e.isEmptyObject(l) &&
										((d = b[s] || (b[s] = {})),
										d.children || (d.children = {}),
										e.each(l, function (t, i) {
											i.state.initialized
												? (d.children[t] = e.layout.state.readState(i))
												: r &&
												  r.children &&
												  r.children[t] &&
												  (d.children[t] = e.extend(!0, {}, r.children[t]))
										}))
							}),
						b
					)
				},
				encodeJSON: function (t) {
					function i(t) {
						var i,
							s,
							n,
							o = [],
							a = 0,
							r = e.isArray(t)
						for (i in t)
							(s = t[i]),
								(n = typeof s),
								'string' == n ? (s = '"' + s + '"') : 'object' == n && (s = parse(s)),
								(o[a++] = (r ? '' : '"' + i + '":') + s)
						return (r ? '[' : '{') + o.join(',') + (r ? ']' : '}')
					}
					var s = window.JSON || {}
					return (s.stringify || i)(t)
				},
				decodeJSON: function (t) {
					try {
						return e.parseJSON ? e.parseJSON(t) : window.eval('(' + t + ')') || {}
					} catch (i) {
						return {}
					}
				},
				_create: function (t) {
					var i = e.layout.state,
						s = t.options,
						n = s.stateManagement
					if (
						(e.extend(t, {
							readCookie: function () {
								return i.readCookie(t)
							},
							deleteCookie: function () {
								i.deleteCookie(t)
							},
							saveCookie: function (e, s) {
								return i.saveCookie(t, e, s)
							},
							loadCookie: function () {
								return i.loadCookie(t)
							},
							loadState: function (e, s) {
								i.loadState(t, e, s)
							},
							readState: function (e) {
								return i.readState(t, e)
							},
							encodeJSON: i.encodeJSON,
							decodeJSON: i.decodeJSON,
						}),
						(t.state.stateData = {}),
						n.autoLoad)
					)
						if (e.isPlainObject(n.autoLoad)) e.isEmptyObject(n.autoLoad) || t.loadState(n.autoLoad)
						else if (n.enabled)
							if (e.isFunction(n.autoLoad)) {
								var o = {}
								try {
									o = n.autoLoad(t, t.state, t.options, t.options.name || '')
								} catch (a) {}
								o && e.isPlainObject(o) && !e.isEmptyObject(o) && t.loadState(o)
							} else t.loadCookie()
				},
				_unload: function (t) {
					var i = t.options.stateManagement
					if (i.enabled && i.autoSave)
						if (e.isFunction(i.autoSave))
							try {
								i.autoSave(t, t.state, t.options, t.options.name || '')
							} catch (s) {}
						else t.saveCookie()
				},
			}),
			e.layout.onCreate.push(e.layout.state._create),
			e.layout.onUnload.push(e.layout.state._unload))
	})(jQuery),
	(function (e) {
		if (e.layout) {
			;(e.layout.plugins.buttons = !0),
				(e.layout.defaults.autoBindCustomButtons = !1),
				e.layout.optionsMap.layout.push('autoBindCustomButtons')
			var t = e.layout.language
			;(e.layout.buttons = {
				config: { borderPanes: 'north,south,west,east' },
				init: function (t) {
					var i,
						s = 'ui-layout-button-',
						n = t.options.name || ''
					e.each('toggle,open,close,pin,toggle-slide,open-slide'.split(','), function (o, a) {
						e.each(e.layout.buttons.config.borderPanes.split(','), function (o, r) {
							e('.' + s + a + '-' + r).each(function () {
								;(i = e(this).data('layoutName') || e(this).attr('layoutName')),
									(void 0 == i || i === n) && t.bindButton(this, a, r)
							})
						})
					})
				},
				get: function (i, s, n, o) {
					var a = e(s),
						r = i.options,
						l = r.showErrorMessages
					if (a.length)
						if (-1 === e.layout.buttons.config.borderPanes.indexOf(n))
							l && alert(t.errButton + t.pane + ': ' + n), (a = e(''))
						else {
							var d = r[n].buttonClass + '-' + o
							a.addClass(d + ' ' + d + '-' + n).data('layoutName', r.name)
						}
					else l && alert(t.errButton + t.selector + ': ' + s)
					return a
				},
				bind: function (t, i, s, n) {
					var o = e.layout.buttons
					switch (s.toLowerCase()) {
						case 'toggle':
							o.addToggle(t, i, n)
							break
						case 'open':
							o.addOpen(t, i, n)
							break
						case 'close':
							o.addClose(t, i, n)
							break
						case 'pin':
							o.addPin(t, i, n)
							break
						case 'toggle-slide':
							o.addToggle(t, i, n, !0)
							break
						case 'open-slide':
							o.addOpen(t, i, n, !0)
					}
					return t
				},
				addToggle: function (t, i, s, n) {
					return (
						e.layout.buttons.get(t, i, s, 'toggle').click(function (e) {
							t.toggle(s, !!n), e.stopPropagation()
						}),
						t
					)
				},
				addOpen: function (i, s, n, o) {
					return (
						e.layout.buttons
							.get(i, s, n, 'open')
							.attr('title', t.Open)
							.click(function (e) {
								i.open(n, !!o), e.stopPropagation()
							}),
						i
					)
				},
				addClose: function (i, s, n) {
					return (
						e.layout.buttons
							.get(i, s, n, 'close')
							.attr('title', t.Close)
							.click(function (e) {
								i.close(n), e.stopPropagation()
							}),
						i
					)
				},
				addPin: function (t, i, s) {
					var n = e.layout.buttons.get(t, i, s, 'pin')
					if (n.length) {
						var o = t.state[s]
						n.click(function (i) {
							e.layout.buttons.setPinState(t, e(this), s, o.isSliding || o.isClosed),
								o.isSliding || o.isClosed ? t.open(s) : t.close(s),
								i.stopPropagation()
						}),
							e.layout.buttons.setPinState(t, n, s, !o.isClosed && !o.isSliding),
							o.pins.push(i)
					}
					return t
				},
				setPinState: function (e, i, s, n) {
					var o = i.attr('pin')
					if (!o || n !== ('down' == o)) {
						var a = e.options[s].buttonClass + '-pin',
							r = a + '-' + s,
							l = a + '-up ' + r + '-up',
							d = a + '-down ' + r + '-down'
						i.attr('pin', n ? 'down' : 'up')
							.attr('title', n ? t.Unpin : t.Pin)
							.removeClass(n ? l : d)
							.addClass(n ? d : l)
					}
				},
				syncPinBtns: function (t, i, s) {
					e.each(state[i].pins, function (n, o) {
						e.layout.buttons.setPinState(t, e(o), i, s)
					})
				},
				_load: function (t) {
					e.extend(t, {
						bindButton: function (i, s, n) {
							return e.layout.buttons.bind(t, i, s, n)
						},
						addToggleBtn: function (i, s, n) {
							return e.layout.buttons.addToggle(t, i, s, n)
						},
						addOpenBtn: function (i, s, n) {
							return e.layout.buttons.addOpen(t, i, s, n)
						},
						addCloseBtn: function (i, s) {
							return e.layout.buttons.addClose(t, i, s)
						},
						addPinBtn: function (i, s) {
							return e.layout.buttons.addPin(t, i, s)
						},
					})
					for (var i = 0; 4 > i; i++) {
						var s = e.layout.buttons.config.borderPanes[i]
						t.state[s].pins = []
					}
					t.options.autoBindCustomButtons && e.layout.buttons.init(t)
				},
				_unload: function () {},
			}),
				e.layout.onLoad.push(e.layout.buttons._load)
		}
	})(jQuery),
	(function (e) {
		;(e.layout.plugins.browserZoom = !0),
			(e.layout.defaults.browserZoomCheckInterval = 1e3),
			e.layout.optionsMap.layout.push('browserZoomCheckInterval'),
			(e.layout.browserZoom = {
				_init: function (t) {
					e.layout.browserZoom.ratio() !== !1 && e.layout.browserZoom._setTimer(t)
				},
				_setTimer: function (t) {
					if (!t.destroyed) {
						var i = t.options,
							s = t.state,
							n = t.hasParentLayout ? 5e3 : Math.max(i.browserZoomCheckInterval, 100)
						setTimeout(function () {
							if (!t.destroyed && i.resizeWithWindow) {
								var n = e.layout.browserZoom.ratio()
								n !== s.browserZoom && ((s.browserZoom = n), t.resizeAll()),
									e.layout.browserZoom._setTimer(t)
							}
						}, n)
					}
				},
				ratio: function () {
					function t(e, t) {
						return ((parseInt(e, 10) / parseInt(t, 10)) * 100).toFixed()
					}
					var i,
						s,
						n,
						o = window,
						a = screen,
						r = document,
						l = r.documentElement || r.body,
						d = e.layout.browser,
						c = d.version
					return !d.msie || c > 8
						? !1
						: a.deviceXDPI && a.systemXDPI
						? t(a.deviceXDPI, a.systemXDPI)
						: d.webkit && (i = r.body.getBoundingClientRect)
						? t(i.left - i.right, r.body.offsetWidth)
						: d.webkit && (s = o.outerWidth)
						? t(s, o.innerWidth)
						: (s = a.width) && (n = l.clientWidth)
						? t(s, n)
						: !1
				},
			}),
			e.layout.onReady.push(e.layout.browserZoom._init)
	})(jQuery),
	(function (e) {
		e.effects &&
			((e.layout.defaults.panes.useOffscreenClose = !1),
			e.layout.plugins && (e.layout.plugins.effects.slideOffscreen = !0),
			(e.layout.effects.slideOffscreen = e.extend(!0, {}, e.layout.effects.slide)),
			(e.effects.slideOffscreen = function (t) {
				return this.queue(function () {
					var i = e.effects,
						s = t.options,
						n = e(this),
						o = n.data('layoutEdge'),
						a = n.data('parentLayout').state,
						r = a[o].size,
						l = this.style,
						d = i.setMode(n, s.mode || 'show'),
						c = 'show' == d,
						u = s.direction || 'left',
						p = 'up' == u || 'down' == u ? 'top' : 'left',
						g = 'up' == u || 'left' == u,
						h = e.layout.config.offscreenCSS || {},
						f = e.layout.config.offscreenReset,
						m = 'offscreenResetTop',
						b = {}
					;(b[p] = (c ? (g ? '+=' : '-=') : g ? '-=' : '+=') + r),
						c
							? (n.data(m, { top: l.top, bottom: l.bottom }),
							  g
									? n.css(p, isNaN(r) ? '-' + r : -r)
									: n.css(
											'right' === u
												? { left: a.container.layoutWidth, right: 'auto' }
												: { top: a.container.layoutHeight, bottom: 'auto' }
									  ),
							  'top' === p && n.css(n.data(f) || {}))
							: (n.data(m, { top: l.top, bottom: l.bottom }),
							  n.data(f, { left: l.left, right: l.right })),
						n.show().animate(b, {
							queue: !1,
							duration: t.duration,
							easing: s.easing,
							complete: function () {
								n.data(m) && n.css(n.data(m)).removeData(m),
									c ? n.css(n.data(f) || {}).removeData(f) : n.css(h),
									t.callback && t.callback.apply(this, arguments),
									n.dequeue()
							},
						})
				})
			}))
	})(jQuery)
