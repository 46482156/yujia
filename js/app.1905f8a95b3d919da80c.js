webpackJsonp([26], {
	"+pS5": function(e, a, t) {
		e.exports = t.p + "static/img/user5.f214702.jpg"
	},
	"/l/s": function(e, a) {},
	0 : function(e, a, t) {
		t("amBI"),
		t("briU"),
		e.exports = t("NHnr")
	},
	1 : function(e, a) {},
	"2Uyi": function(e, a, t) {
		"use strict";
		var i = {
			baseUrl: "//ow.dailyyoga.com.cn/api/",
			web_product_activity_id: 70,
			payVip: "http://o2o.dailyyoga.com.cn/front_end_all/o2/coursePay/index.html",
			vipUrl: "http://o2o.dailyyoga.com.cn/front_end_all/o2/coursePay/vipContent.html",
			o2Url: "https://o2o.dailyyoga.com.cn/o2_detail/",
			isMobile: function() {
				try {
					return document.createEvent("TouchEvent"),
					!0
				} catch(e) {
					return ! 1
				}
			} (),
			downloadUrl: ""
		};
		a.a = i
	},
	"2g0f": function(e, a, t) {
		e.exports = t.p + "static/img/user1.caa1e44.jpg"
	},
	"51dY": function(e, a, t) {
		"use strict"; (function(e) {
			var i = t("LqYc"),
			s = (t.n(i), t("twtq")),
			r = t.n(s),
			n = t("2Uyi"),
			o = t("HGqn"),
			l = t("KjI9");
			t.n(l);
			a.a = {
				name: "index",
				beforeCreate: function() {
					var a = this;
					document.title = "标题",
					e("meta[name='keywords']").attr("content", "文本内容"),
					e("meta[name='description']").attr("content", "描述"),
					this.$axios.get(n.a.baseUrl + "common/banner_conf?item=home").then(function(e) {
						0 == e.data.error_code && (a.banner = e.data.result)
					}).
					catch(function(e) {
						console.log(e)
					}),
					this.$axios.get(n.a.baseUrl + "common/news").then(function(e) {
						0 == e.data.error_code && (a.listIndex = e.data.result.news[0].id)
					})
				},
				data: function() {
					return {
						banner: {},
						downIos: 0,
						downAnd: 0,
						listIndex: "",
						isMobileImg: e("body").width() < 1024,
						mobileImgQ: "?imageMogr2/thumbnail/!50p"
					}
				},
				methods: {
					qrCode: function(e) {
						n.a.isMobile && window.open(n.a.downloadUrl)
					},
					playVideo: function(a, t, i) {
						var s = e("#" + a)[0];
						if (e("#" + t).hide(), s.paused) return e(".video").addClass("active"),
						Object(o.a)({
							click_id: 269,
							page_id: 206
						}),
						s.play(),
						void e("#" + i).hide();
						e(".video").removeClass("active"),
						e("#" + i).show(),
						s.pause()
					},
					goRYT: function() {
//						window.open("")
					},
					download: function(e) {
						n.a.isMobile && window.open(n.a.downloadUrl)
					}
				},
				mounted: function() {
					Object(o.b)({
						page_id: 206,
						pageinfo: location.href
					}),
					new r.a(".swiper-container", {
						autoplay: 5e3,
						pagination: ".swiper-pagination",
						paginationClickable: !0,
						loop: !0
					}),
					n.a.isMobile || e("#banner-home").height(e(window).height() + "px")
				}
			}
		}).call(a, t("zREj"))
	},
	"7zXz": function(e, a, t) {
		e.exports = t.p + "static/img/user2.fb2befc.jpg"
	},
	"8PcR": function(e, a) {},
	"8nzD": function(e, a, t) {
		e.exports = t.p + "static/img/user6.a61928e.jpg"
	},
	"8xbl": function(e, a) {
		e.exports = ""
	},
	"9Jfg": function(e, a) {},
	ACy6: function(e, a, t) {
		e.exports = t.p + "static/img/user8.851e5d7.jpg"
	},
	BfsD: function(e, a, t) {
		e.exports = t.p + "static/img/user7.fca44f6.jpg"
	},
	Df3N: function(e, a, t) {
		e.exports = t.p + "static/img/user4.bff1caa.jpg"
	},
	FNcY: function(e, a, t) {
		e.exports = t.p + "static/img/user10.cd79096.jpg"
	},
	FdIc: function(e, a, t) {
		e.exports = t.p + "static/img/user3.45f5ff6.jpg"
	},
	GMLi: function(e, a) {},
	HGqn: function(e, a, t) {
		"use strict";
		a.b = function(e) {
			s.a.track(r, e)
		},
		a.a = function(e) {
			s.a.track(n, e)
		};
		var i = t("74YX"),
		s = t.n(i),
		r = "pageview_general",
		n = "click_general";
		s.a.init({
			server_url: /www.dailyyoga.com.cn/.test(window.location.hostname) ? "//sc.dailyyoga.com.cn/sa?project=production": "//114.55.73.129:8106/sa?project=default"
		})
	},
	N5wS: function(e, a) {},
	NHnr: function(e, a, t) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var i = t("+RKF"),
		s = t("2Uyi"),
		r = {
			name: "index",
			data: function() {
				return {
					isMobile: s.a.isMobile
				}
			},
			components: {
				navPart: function(e) {
					Promise.all([t.e(0), t.e(1)]).then(function() {
						var a = [t("34jS")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				},
				footerPart: function(e) {
					t.e(16).then(function() {
						var a = [t("mzkE")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			}
		},
		n = {
			render: function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					attrs: {
						id: "app"
					}
				},
				[a("nav-part"), this._v(" "), a("div", {
					staticClass: "toast"
				},
				[this._v("注册成功")]), this._v(" "), a("div", {
					class: {
						mt50: this.isMobile
					}
				},
				[a("router-view")], 1), this._v(" "), a("footer-part")], 1)
			},
			staticRenderFns: []
		};
		var o = t("C7Lr")(r, n, !1,
		function(e) {
			t("GMLi")
		},
		null, null).exports,
		l = t("IhWa"),
		p = t("51dY"),
		d = {
			render: function() {
				var e = this,
				a = e.$createElement,
				t = e._self._c || a;
				return t("div", {
					staticClass: "container"
				},
				[t("section", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.banner.banner_img,
						expression: "banner.banner_img"
					}],
					staticClass: "banner relative",
					style: {
						backgroundImage: "url(" + (e.isMobileImg ? e.banner.banner_img + e.mobileImgQ: e.banner.banner_img) + ")"
					},
					attrs: {
						id: "banner-home"
					}
				},
				[t("div", {
					staticClass: "banner-text"
				},
				[t("h1", {
					staticClass: "title"
				},
				[e._v(e._s(e.banner.title))]), e._v(" "), t("p", {
					staticClass: "description description-letter"
				},
				[e._v(e._s(e.banner.subtitle))])]), e._v(" "), t("ul", {
					staticClass: "download"
				},
				[t("li", {
					staticClass: "download-hover"
				},
				[e._m(0), e._v(" "), t("a", {
					staticClass: "pull-left download-new ios-download",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(a) {
							return e.qrCode("iOS")
						}
					}
				})]), e._v(" "), t("li", {
					staticClass: "download-hover"
				},
				[e._m(1), e._v(" "), t("a", {
					staticClass: "pull-left download-new ad-download",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(a) {
							return e.qrCode("And")
						}
					}
				})]), e._v(" "), e._m(2)])]), e._v(" "), t("section", {
					staticClass: "section part-center"
				},
				[e._m(3), e._v(" "), t("div", {
					staticClass: "section-video relative"
				},
				[t("div", {
					staticClass: "video",
					on: {
						click: function(a) {
							return e.playVideo("videoHome", "videoHomeCover", "videoHomeBtnPlay", "videoHomeBtnPause")
						}
					}
				},
				[t("video", {
					attrs: {
						id: "videoHome",
						src: "视频地址"
					}
				}), e._v(" "), t("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.isMobileImg ? "http://qiniucdn.dailyyoga.com.cn/26/19/261928e67f8506bfdfb8755309b36cb7.jpeg" + e.mobileImgQ: "http://qiniucdn.dailyyoga.com.cn/26/19/261928e67f8506bfdfb8755309b36cb7.jpeg",
						expression: "isMobileImg ? 'http://qiniucdn.dailyyoga.com.cn/26/19/261928e67f8506bfdfb8755309b36cb7.jpeg' + mobileImgQ : 'http://qiniucdn.dailyyoga.com.cn/26/19/261928e67f8506bfdfb8755309b36cb7.jpeg'"
					}],
					attrs: {
						id: "videoHomeCover",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), t("a", {
					staticClass: "pause",
					attrs: {
						href: "javascript:;"
					}
				}), e._v(" "), t("a", {
					attrs: {
						id: "videoHomeBtnPlay",
						href: "javascript:;"
					}
				})]), e._v(" "), t("div", {
					staticClass: "box-bg hide-m"
				})])]), e._v(" "), t("section", {
					staticClass: "section home-part3"
				},
				[t("div", {
					staticClass: "content clearfix cursor",
					on: {
						click: function(a) {
							return e.goRYT()
						}
					}
				},
				[e._m(4), e._v(" "), t("div", {
					staticClass: "part pull-left"
				},
				[t("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.isMobileImg ? "http://qiniucdn.dailyyoga.com.cn/79/20/79207774d7c3d5807fb70dd02ceec4f9.jpeg" + e.mobileImgQ: "http://qiniucdn.dailyyoga.com.cn/79/20/79207774d7c3d5807fb70dd02ceec4f9.jpeg",
						expression: "isMobileImg ? 'http://qiniucdn.dailyyoga.com.cn/79/20/79207774d7c3d5807fb70dd02ceec4f9.jpeg' + mobileImgQ : 'http://qiniucdn.dailyyoga.com.cn/79/20/79207774d7c3d5807fb70dd02ceec4f9.jpeg' "
					}],
					attrs: {
						src: "",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])])]), e._v(" "), t("section", {
					staticClass: "section home-part4",
					style: {
						backgroundImage: "url(" + (e.isMobileImg ? "http://qiniucdn.dailyyoga.com.cn/21/82/21826f7782cfc4d4f0c09f410a9bae7f.jpeg" + e.mobileImgQ: "http://qiniucdn.dailyyoga.com.cn/21/82/21826f7782cfc4d4f0c09f410a9bae7f.jpeg") + ")"
					}
				},
				[t("div", {
					staticClass: "content clearfix"
				},
				[e._m(5), e._v(" "), t("div", {
					staticClass: "part pull-left"
				},
				[t("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.isMobileImg ? "http://qiniucdn.dailyyoga.com.cn/41/46/4146cea2e5927909feb1ce551ae7a569.png" + e.mobileImgQ: "http://qiniucdn.dailyyoga.com.cn/41/46/4146cea2e5927909feb1ce551ae7a569.png",
						expression: "isMobileImg ? 'http://qiniucdn.dailyyoga.com.cn/41/46/4146cea2e5927909feb1ce551ae7a569.png' + mobileImgQ : 'http://qiniucdn.dailyyoga.com.cn/41/46/4146cea2e5927909feb1ce551ae7a569.png' "
					}],
					attrs: {
						src: "",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])])]), e._v(" "), t("section", {
					staticClass: "section home-part5"
				},
				[t("div", {
					staticClass: "content clearfix"
				},
				[e._m(6), e._v(" "), t("div", {
					staticClass: "part pull-left"
				},
				[t("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.isMobileImg ? "http://qiniucdn.dailyyoga.com.cn/4b/6b/4b6b9ca305b62aab9f0fcc77e6c43e84.png" + e.mobileImgQ: "http://qiniucdn.dailyyoga.com.cn/4b/6b/4b6b9ca305b62aab9f0fcc77e6c43e84.png",
						expression: "isMobileImg ? 'http://qiniucdn.dailyyoga.com.cn/4b/6b/4b6b9ca305b62aab9f0fcc77e6c43e84.png' + mobileImgQ : 'http://qiniucdn.dailyyoga.com.cn/4b/6b/4b6b9ca305b62aab9f0fcc77e6c43e84.png' "
					}],
					attrs: {
						src: "",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])])]), e._v(" "), e._m(7), e._v(" "), t("section", {
					staticClass: "section part-center home-part7 relative"
				},
				[e._m(8), e._v(" "), t("ul", {
					staticClass: "download clearfix"
				},
				[t("li", {
					staticClass: "download-hover",
					staticStyle: {
						"margin-right": "100px"
					}
				},
				[e._m(9), e._v(" "), t("a", {
					staticClass: "pull-left download-new ios-download",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(a) {
							return e.qrCode("iOS")
						}
					}
				})]), e._v(" "), t("li", {
					staticClass: "download-hover"
				},
				[e._m(10), e._v(" "), t("a", {
					staticClass: "pull-left download-new ad-download-white",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(a) {
							return e.qrCode("And")
						}
					}
				})])])])])
			},
			staticRenderFns: [function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "erweima ios hide-m"
				},
				[a("img", {
					attrs: {
						src: "//qiniucdn.dailyyoga.com.cn/d6/2b/d62bbb7a3c2db86f29b469a20ff49b5e.png",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "erweima and hide-m"
				},
				[a("img", {
					attrs: {
						src: "//qiniucdn.dailyyoga.com.cn/d6/2b/d62bbb7a3c2db86f29b469a20ff49b5e.png",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("li", [a("a", {
					staticClass: "pull-left download-new tv-download hide-m",
					staticStyle: {
						width: "150px",
						"box-sizing": "border-box"
					},
					attrs: {
						href: "//qiniuapk.dailyyoga.com.cn/Yoga_TV_300000.apk"
					}
				})])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "section-text"
				},
				[a("div", {
					staticClass: "line"
				}), this._v(" "), a("h1", {
					staticClass: "title"
				},
				[this._v("精编课程内容")]), this._v(" "), a("p", {
					staticClass: "description"
				},
				[this._v("每日基础练习，全球名师精编计划，线下培训私教指导")])])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "section-text part pull-left"
				},
				[a("div", {
					staticClass: "line"
				}), this._v(" "), a("h1", {
					staticClass: "title title-60"
				},
				[this._v("0基础教练培训班")]), this._v(" "), a("p", {
					staticClass: "description"
				},
				[this._v("28天领取证书  高薪推荐就业")])])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "section-text part pull-right"
				},
				[a("div", {
					staticClass: "line"
				}), this._v(" "), a("h1", {
					staticClass: "title"
				},
				[this._v("活跃瑜伽社区")]), this._v(" "), a("p", {
					staticClass: "description"
				},
				[this._v("达人伽友聚集 分享练习心得")])])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "section-text part pull-right"
				},
				[a("div", {
					staticClass: "line"
				}), this._v(" "), a("h1", {
					staticClass: "title"
				},
				[this._v("精选瑜伽装备")]), this._v(" "), a("p", {
					staticClass: "description"
				},
				[this._v("线上精选商品 致力给你最好的瑜伽装备")])])
			},
			function() {
				var e = this,
				a = e.$createElement,
				i = e._self._c || a;
				return i("section", {
					staticClass: "section section-swiper"
				},
				[i("div", {
					staticClass: "content clearfix relative"
				},
				[i("div", {
					staticClass: "swiper-container"
				},
				[i("div", {
					staticClass: "swiper-wrapper"
				},
				[i("div", {
					staticClass: "swiper-slide"
				},
				[i("ul", {
					staticClass: "swiper clearfix"
				},
				[i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("2g0f"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("虫子yogi")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("我属于微胖族，但是下班吃完晚饭懒得去健身房，自己在家瞎练也没有什么太大的效果，所以下载了这款软件。每日瑜伽里不仅有科学体系的减肥课程，每日提醒功能还能督促我每天练习。它是我手机里的健身减肥教练，大爱啊！")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("7zXz"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("静秋子（珍珠）")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("在应用市场里搜索瑜伽时看到「每日瑜伽」排在第一位，就下载使用了。在APP里大致看了一下，内容还挺丰富得，对于有减肥、塑形、瘦腿需求的人来说很实用。最重要的是里面有适合新人的入门瑜伽课程，对我这种没有任何瑜伽基础的人来说，还是相当不错的！希望我能持之以恒，坚持用「每日瑜伽」练习瑜伽。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("FdIc"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("诗雨流星")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("其实早就下载这个软件用了，自己在家练瑜伽也很方便，APP里的课程成体系很全面。刚开始用的免费课程，有一次发现VIP课程限免，果断下载使用后发现非常棒，之后就成了每日瑜伽所有课程的忠实粉丝，必须给每日瑜伽好评，大赞！")])])])]), e._v(" "), i("div", {
					staticClass: "swiper-slide"
				},
				[i("ul", {
					staticClass: "swiper clearfix"
				},
				[i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("Df3N"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("兔子爱瑜伽")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("我给自己定了固定的每日瑜伽学习时间，每天跟着软件里的课程练习，缓解了不少关节上的不适。我会努力坚持下去的，先给这样的软件32个赞！希望后面上线更多有用的课程。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("+pS5"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("小安的拉萨瑜伽时光")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("从来不写评论，这是第一次，最大的原因是真心喜欢这个软件，因为它很方便也很实用。每次发微信介绍它时就发现朋友圈很多人也在用，说明确实好。希望能多点时间更长，更重基础的课程。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("8nzD"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("小马驹溜溜")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("我是做互联网的，每天的工作压力特别大，所以我经常选择通过运动来减轻压力。【每日瑜伽】里的课程非常适合我，每次练习里边的课程后，能感到确实起到了减压作用，非常棒！")])])])]), e._v(" "), i("div", {
					staticClass: "swiper-slide"
				},
				[i("ul", {
					staticClass: "swiper clearfix"
				},
				[i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("BfsD"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("行走的小语")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("由浅入深、由简入繁，这样的讲解易使初学者逐步坚持下来，也是我唯一坚持练习下来的瑜伽课程。非常感谢【每日瑜伽】的全体人员，希望以后多设计不同类别的计划用以循序渐进地进行练习，这样更容易坚持下来。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("ACy6"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("幸福的葛葛")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("我个人还是很喜欢这款软件的，有很多不错的课程。我平时上班老坐着，一整天下来就浑身不舒服。自从用了每日瑜伽，下班后回家就可以练习。瑜伽也缓解了久坐带来的不适，超级赞！")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("qWaB"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("优雅心灵_1")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("健康生活从自律开始，自从坚持做瑜伽以来，觉得自己无论是身体状态还是意志力都提升了不少。我很喜欢这个软件，课程动作讲解到位，而且配合呼吸法也很适合我。")])])])]), e._v(" "), i("div", {
					staticClass: "swiper-slide"
				},
				[i("ul", {
					staticClass: "swiper clearfix"
				},
				[i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("FNcY"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("瑜时光xue")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("很好用，已经坚持练习一个月了，头痛减少了、肩背也轻松了。很喜欢新增加的“全身燃脂计划”，正在练习中，希望有更多更好的计划上线。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("pCes"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("玥呢")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("真的特别棒！因为我经常坐在电脑跟前，还经常低头玩手机，所以时常感觉肩颈特别不舒服。在【每日瑜伽】里练习瑜伽后感觉很好，尤其练习了“肩颈腰背修复”课程之后就更喜欢这里的课程了。")])]), e._v(" "), i("li", [i("div", {
					staticClass: "person clearfix"
				},
				[i("img", {
					staticClass: "pull-left",
					attrs: {
						src: t("ve1W"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), e._v(" "), i("div", {
					staticClass: "pull-left"
				},
				[i("p", {
					staticClass: "name"
				},
				[e._v("halfmylove")]), e._v(" "), i("div", {
					staticClass: "star"
				},
				[i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i"), e._v(" "), i("i")])])]), e._v(" "), i("p", {
					staticClass: "word"
				},
				[e._v("如果有人和我一样天天坐着导致腰背的肌肉十分僵硬，那么一定要试试“舒展背部”这个课程！我练了一段时间感觉好多了，腰背肌肉舒松了许多，以后我一定会坚持练习！")])])])])]), e._v(" "), i("div", {
					staticClass: "swiper-pagination"
				})])])])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "section-text"
				},
				[a("img", {
					staticClass: "logo",
					attrs: {
						src: t("8xbl"),
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				}), this._v(" "), a("p", {
					staticClass: "description"
				},
				[this._v("编辑\n          "), a("br"), this._v("编辑2\n        ")])])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "erweima ios hide-m"
				},
				[a("img", {
					attrs: {
						src: "//qiniucdn.dailyyoga.com.cn/d6/2b/d62bbb7a3c2db86f29b469a20ff49b5e.png",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])
			},
			function() {
				var e = this.$createElement,
				a = this._self._c || e;
				return a("div", {
					staticClass: "erweima and hide-m"
				},
				[a("img", {
					attrs: {
						src: "//qiniucdn.dailyyoga.com.cn/d6/2b/d62bbb7a3c2db86f29b469a20ff49b5e.png",
						alt: "每日瑜伽专业瑜伽教学平台"
					}
				})])
			}]
		};
		var c = function(e) {
			t("9Jfg")
		},
		u = t("C7Lr")(p.a, d, !1, c, null, null).exports;
		i.a.use(l.a);
		var m = /127.0.0.1|localhost|dailyyoga.com.cn|mirror.dailyyoga.com.cn/.test(window.location.hostname) ? "": "/front_end_all/website_h2_v2",
		h = new l.a({
			mode: "history",
			routes: [{
				path: m + "/",
				name: "index",
				component: u
			},
			{
				path: m + "/yogaPractice",
				name: "yogaPractice",
				component: function(e) {
					return Promise.all([t.e(0), t.e(19)]).then(function() {
						var a = [t("ZgI3")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/yogaPractice/:id",
				name: "yogaPracticeClassify",
				component: function(e) {
					return t.e(21).then(function() {
						var a = [t("Av+q")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/yogaPracticePlan/:title",
				name: "yogaPracticePlan",
				component: function(e) {
					return t.e(20).then(function() {
						var a = [t("Ae0k")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/yogaUniversity",
				name: "yogaUniversity",
				component: function(e) {
					return t.e(4).then(function() {
						var a = [t("cSmz")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				},
				children: [{
					path: "",
					name: "yogaUniversityRyt",
					component: function(e) {
						return t.e(18).then(function() {
							var a = [t("m6re")];
							e.apply(null, a)
						}.bind(this)).
						catch(t.oe)
					}
				},
				{
					path: "workshop",
					name: "yogaUniversityWorkshop",
					component: function(e) {
						return Promise.all([t.e(0), t.e(22)]).then(function() {
							var a = [t("qZ5y")];
							e.apply(null, a)
						}.bind(this)).
						catch(t.oe)
					}
				},
				{
					path: "learnto",
					name: "yogaUniversityLearnto",
					component: function(e) {
						return Promise.all([t.e(0), t.e(23)]).then(function() {
							var a = [t("+gST")];
							e.apply(null, a)
						}.bind(this)).
						catch(t.oe)
					}
				},
				{
					path: "train",
					name: "yogaUniversityTrain",
					component: function(e) {
						return Promise.all([t.e(0), t.e(15)]).then(function() {
							var a = [t("ZCsx")];
							e.apply(null, a)
						}.bind(this)).
						catch(t.oe)
					}
				},
				{
					path: "credential",
					name: "yogaUniversityCredential",
					component: function(e) {
						return t.e(24).then(function() {
							var a = [t("1mtn")];
							e.apply(null, a)
						}.bind(this)).
						catch(t.oe)
					}
				}]
			},
			{
				path: m + "/yogaUniversityDetail/:type/:id",
				name: "yogaUniversityDetail",
				component: function(e) {
					return t.e(13).then(function() {
						var a = [t("CHWY")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/teacherCooperation",
				name: "teacherCooperation",
				component: function(e) {
					return Promise.all([t.e(0), t.e(7)]).then(function() {
						var a = [t("jvaA")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/teacherCooperationDetail/:title",
				name: "teacherCooperationDetail",
				component: function(e) {
					return t.e(14).then(function() {
						var a = [t("x2EL")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/mall",
				name: "mall",
				component: function(e) {
					return t.e(3).then(function() {
						var a = [t("hex8")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/aboutUs",
				name: "aboutUs",
				component: function(e) {
					return t.e(2).then(function() {
						var a = [t("xdld")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/honor",
				name: "honor",
				component: function(e) {
					return t.e(8).then(function() {
						var a = [t("pSiH")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/contactUs",
				name: "contactUs",
				component: function(e) {
					return t.e(10).then(function() {
						var a = [t("z5+l")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/joinUs",
				name: "joinUs",
				component: function(e) {
					return t.e(9).then(function() {
						var a = [t("5LTe")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/serviceTerms",
				name: "serviceTerms",
				component: function(e) {
					return t.e(11).then(function() {
						var a = [t("0cWR")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/statement",
				name: "statement",
				component: function(e) {
					return t.e(12).then(function() {
						var a = [t("Nws/")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/theMedias",
				name: "theMedias",
				component: function(e) {
					return t.e(6).then(function() {
						var a = [t("TDUm")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/theMediasDetail/:id/:indexId",
				name: "theMediasDetail",
				component: function(e) {
					return t.e(5).then(function() {
						var a = [t("6Xxc")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: m + "/qrcode",
				name: "linkOther",
				component: function(e) {
					return t.e(17).then(function() {
						var a = [t("timg")];
						e.apply(null, a)
					}.bind(this)).
					catch(t.oe)
				}
			},
			{
				path: "*",
				name: "index",
				component: u
			}]
		});
		h.beforeEach(function(e, a, t) {
			a.query.channels && !e.query.channels && t({
				path: e.path,
				params: e.params,
				query: a.query
			}),
			t()
		}),
		h.afterEach(function(e) {
			document.documentElement.scrollTop = document.body.scrollTop = 0
		});
		var g = h,
		v = t("84iU"),
		f = t.n(v),
		w = t("hs12"),
		y = {
			install: function(e, a) {
				e.filter("date",
				function(e) {
					function a(e) {
						return e >= 10 ? e: "0" + e
					}
					var t = new Date(1e3 * e),
					i = t.getFullYear(),
					s = a(t.getMonth() + 1),
					r = a(t.getDate());
					a(t.getHours()),
					a(t.getMinutes()),
					a(t.getSeconds());
					return e ? i + "/" + s + "/" + r: ""
				})
			}
		},
		b = t("YiQF"),
		x = t.n(b);
		t("zREj"),
		t("/l/s"),
		t("N5wS"),
		t("8PcR");
		i.a.use(w.a),
		i.a.use(x.a),
		i.a.use(y),
		i.a.config.productionTip = !1,
		i.a.prototype.$axios = f.a.create({
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}),
		f.a.defaults.withCredentials = !0,
		new i.a({
			el: "#app",
			router: g,
			template: "<App/>",
			components: {
				App: o
			}
		})
	},
	YxKY: function(e, a) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAAAXNSR0IArs4c6QAAAFJJREFUOBFjYCAN8ACVgzBNAMjgw1BMdUtghv8HWgDCIIuoZgm64VS1BJfhVLGEkOEUWUKs4WRZQqrhJFlCruFEWUKp4XgtoZbhWC2htuEolgAAGjJ/daUapsYAAAAASUVORK5CYII="
	},
	pCes: function(e, a, t) {
		e.exports = t.p + "static/img/user11.e8e8571.jpg"
	},
	qWaB: function(e, a, t) {
		e.exports = t.p + "static/img/user9.6f9b824.jpg"
	},
	twtq: function(e, a, t) { (function(a, t) {
			var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			}: function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
			}; !
			function() {
				"use strict";
				var e, s, r = function s(r, o) {
					function l(e) {
						return Math.floor(e)
					}
					function p() {
						var e = T.params.autoplay,
						a = T.slides.eq(T.activeIndex);
						a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay),
						T.autoplayTimeoutId = setTimeout(function() {
							T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? o.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
						},
						e)
					}
					function d(a, t) {
						var i = e(a.target);
						if (!i.is(t)) if ("string" == typeof t) i = i.parents(t);
						else if (t.nodeType) {
							var s;
							return i.parents().each(function(e, a) {
								a === t && (s = t)
							}),
							s ? t: void 0
						}
						if (0 !== i.length) return i[0]
					}
					function c(e, a) {
						a = a || {};
						var t = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
							e.forEach(function(e) {
								T.onResize(!0),
								T.emit("onObserverUpdate", T, e)
							})
						});
						t.observe(e, {
							attributes: void 0 === a.attributes || a.attributes,
							childList: void 0 === a.childList || a.childList,
							characterData: void 0 === a.characterData || a.characterData
						}),
						T.observers.push(t)
					}
					function u(e) {
						e.originalEvent && (e = e.originalEvent);
						var a = e.keyCode || e.charCode;
						if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a)) return ! 1;
						if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a)) return ! 1;
						if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
							if (37 === a || 39 === a || 38 === a || 40 === a) {
								var t = !1;
								if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;
								var i = {
									left: window.pageXOffset,
									top: window.pageYOffset
								},
								s = window.innerWidth,
								r = window.innerHeight,
								n = T.container.offset();
								T.rtl && (n.left = n.left - T.container[0].scrollLeft);
								for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
									var p = o[l];
									p[0] >= i.left && p[0] <= i.left + s && p[1] >= i.top && p[1] <= i.top + r && (t = !0)
								}
								if (!t) return
							}
							T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(), (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && T.slideNext(), 38 === a && T.slidePrev()),
							T.emit("onKeyPress", T, a)
						}
					}
					function m(e) {
						e.originalEvent && (e = e.originalEvent);
						var a = 0,
						t = T.rtl ? -1 : 1,
						i = function(e) {
							var a = 0,
							t = 0,
							i = 0,
							s = 0;
							return "detail" in e && (t = e.detail),
							"wheelDelta" in e && (t = -e.wheelDelta / 120),
							"wheelDeltaY" in e && (t = -e.wheelDeltaY / 120),
							"wheelDeltaX" in e && (a = -e.wheelDeltaX / 120),
							"axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0),
							i = 10 * a,
							s = 10 * t,
							"deltaY" in e && (s = e.deltaY),
							"deltaX" in e && (i = e.deltaX),
							(i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)),
							i && !a && (a = i < 1 ? -1 : 1),
							s && !t && (t = s < 1 ? -1 : 1),
							{
								spinX: a,
								spinY: t,
								pixelX: i,
								pixelY: s
							}
						} (e);
						if (T.params.mousewheelForceToAxis) if (T.isHorizontal()) {
							if (! (Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;
							a = i.pixelX * t
						} else {
							if (! (Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;
							a = i.pixelY
						} else a = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * t: -i.pixelY;
						if (0 !== a) {
							if (T.params.mousewheelInvert && (a = -a), T.params.freeMode) {
								var s = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity,
								r = T.isBeginning,
								n = T.isEnd;
								if (s >= T.minTranslate() && (s = T.minTranslate()), s <= T.maxTranslate() && (s = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(s), T.updateProgress(), T.updateActiveIndex(), (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function() {
									T.slideReset()
								},
								300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === s || s === T.maxTranslate()) return
							} else {
								if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60) if (a < 0) if (T.isEnd && !T.params.loop || T.animating) {
									if (T.params.mousewheelReleaseOnEdges) return ! 0
								} else T.slideNext(),
								T.emit("onScroll", T, e);
								else if (T.isBeginning && !T.params.loop || T.animating) {
									if (T.params.mousewheelReleaseOnEdges) return ! 0
								} else T.slidePrev(),
								T.emit("onScroll", T, e);
								T.mousewheel.lastScrollTime = (new window.Date).getTime()
							}
							return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
							!1
						}
					}
					function h(a, t) {
						a = e(a);
						var i, s, r, n = T.rtl ? -1 : 1;
						i = a.attr("data-swiper-parallax") || "0",
						s = a.attr("data-swiper-parallax-x"),
						r = a.attr("data-swiper-parallax-y"),
						s || r ? (s = s || "0", r = r || "0") : T.isHorizontal() ? (s = i, r = "0") : (r = i, s = "0"),
						s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * n + "%": s * t * n + "px",
						r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%": r * t + "px",
						a.transform("translate3d(" + s + ", " + r + ",0px)")
					}
					function g(e) {
						return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
						e
					}
					if (! (this instanceof s)) return new s(r, o);
					var v = {
						direction: "horizontal",
						touchEventsTarget: "container",
						initialSlide: 0,
						speed: 300,
						autoplay: !1,
						autoplayDisableOnInteraction: !0,
						autoplayStopOnLast: !1,
						iOSEdgeSwipeDetection: !1,
						iOSEdgeSwipeThreshold: 20,
						freeMode: !1,
						freeModeMomentum: !0,
						freeModeMomentumRatio: 1,
						freeModeMomentumBounce: !0,
						freeModeMomentumBounceRatio: 1,
						freeModeMomentumVelocityRatio: 1,
						freeModeSticky: !1,
						freeModeMinimumVelocity: .02,
						autoHeight: !1,
						setWrapperSize: !1,
						virtualTranslate: !1,
						effect: "slide",
						coverflow: {
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: !0
						},
						flip: {
							slideShadows: !0,
							limitRotation: !0
						},
						cube: {
							slideShadows: !0,
							shadow: !0,
							shadowOffset: 20,
							shadowScale: .94
						},
						fade: {
							crossFade: !1
						},
						parallax: !1,
						zoom: !1,
						zoomMax: 3,
						zoomMin: 1,
						zoomToggle: !0,
						scrollbar: null,
						scrollbarHide: !0,
						scrollbarDraggable: !1,
						scrollbarSnapOnRelease: !1,
						keyboardControl: !1,
						mousewheelControl: !1,
						mousewheelReleaseOnEdges: !1,
						mousewheelInvert: !1,
						mousewheelForceToAxis: !1,
						mousewheelSensitivity: 1,
						mousewheelEventsTarged: "container",
						hashnav: !1,
						hashnavWatchState: !1,
						history: !1,
						replaceState: !1,
						breakpoints: void 0,
						spaceBetween: 0,
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerColumnFill: "column",
						slidesPerGroup: 1,
						centeredSlides: !1,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						roundLengths: !1,
						touchRatio: 1,
						touchAngle: 45,
						simulateTouch: !0,
						shortSwipes: !0,
						longSwipes: !0,
						longSwipesRatio: .5,
						longSwipesMs: 300,
						followFinger: !0,
						onlyExternal: !1,
						threshold: 0,
						touchMoveStopPropagation: !0,
						touchReleaseOnEdges: !1,
						uniqueNavElements: !0,
						pagination: null,
						paginationElement: "span",
						paginationClickable: !1,
						paginationHide: !1,
						paginationBulletRender: null,
						paginationProgressRender: null,
						paginationFractionRender: null,
						paginationCustomRender: null,
						paginationType: "bullets",
						resistance: !0,
						resistanceRatio: .85,
						nextButton: null,
						prevButton: null,
						watchSlidesProgress: !1,
						watchSlidesVisibility: !1,
						grabCursor: !1,
						preventClicks: !0,
						preventClicksPropagation: !0,
						slideToClickedSlide: !1,
						lazyLoading: !1,
						lazyLoadingInPrevNext: !1,
						lazyLoadingInPrevNextAmount: 1,
						lazyLoadingOnTransitionStart: !1,
						preloadImages: !0,
						updateOnImagesReady: !0,
						loop: !1,
						loopAdditionalSlides: 0,
						loopedSlides: null,
						control: void 0,
						controlInverse: !1,
						controlBy: "slide",
						normalizeSlideIndex: !0,
						allowSwipeToPrev: !0,
						allowSwipeToNext: !0,
						swipeHandler: null,
						noSwiping: !0,
						noSwipingClass: "swiper-no-swiping",
						passiveListeners: !0,
						containerModifierClass: "swiper-container-",
						slideClass: "swiper-slide",
						slideActiveClass: "swiper-slide-active",
						slideDuplicateActiveClass: "swiper-slide-duplicate-active",
						slideVisibleClass: "swiper-slide-visible",
						slideDuplicateClass: "swiper-slide-duplicate",
						slideNextClass: "swiper-slide-next",
						slideDuplicateNextClass: "swiper-slide-duplicate-next",
						slidePrevClass: "swiper-slide-prev",
						slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
						wrapperClass: "swiper-wrapper",
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						buttonDisabledClass: "swiper-button-disabled",
						paginationCurrentClass: "swiper-pagination-current",
						paginationTotalClass: "swiper-pagination-total",
						paginationHiddenClass: "swiper-pagination-hidden",
						paginationProgressbarClass: "swiper-pagination-progressbar",
						paginationClickableClass: "swiper-pagination-clickable",
						paginationModifierClass: "swiper-pagination-",
						lazyLoadingClass: "swiper-lazy",
						lazyStatusLoadingClass: "swiper-lazy-loading",
						lazyStatusLoadedClass: "swiper-lazy-loaded",
						lazyPreloaderClass: "swiper-lazy-preloader",
						notificationClass: "swiper-notification",
						preloaderClass: "preloader",
						zoomContainerClass: "swiper-zoom-container",
						observer: !1,
						observeParents: !1,
						a11y: !1,
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}",
						runCallbacksOnInit: !0
					},
					f = o && o.virtualTranslate;
					o = o || {};
					var w = {};
					for (var y in o) if ("object" != i(o[y]) || null === o[y] || o[y].nodeType || o[y] === window || o[y] === document || void 0 !== n && o[y] instanceof n || void 0 !== a && o[y] instanceof a) w[y] = o[y];
					else for (var b in w[y] = {},
					o[y]) w[y][b] = o[y][b];
					for (var x in v) if (void 0 === o[x]) o[x] = v[x];
					else if ("object" == i(o[x])) for (var C in v[x]) void 0 === o[x][C] && (o[x][C] = v[x][C]);
					var T = this;
					if (T.params = o, T.originalParams = w, T.classNames = [], void 0 !== e && void 0 !== n && (e = n), (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || t: n)) && (T.$ = e, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function() {
						if (!T.params.breakpoints) return ! 1;
						var e, a = !1,
						t = [];
						for (e in T.params.breakpoints) T.params.breakpoints.hasOwnProperty(e) && t.push(e);
						t.sort(function(e, a) {
							return parseInt(e, 10) > parseInt(a, 10)
						});
						for (var i = 0; i < t.length; i++)(e = t[i]) >= window.innerWidth && !a && (a = e);
						return a || "max"
					},
					T.setBreakpoint = function() {
						var e = T.getActiveBreakpoint();
						if (e && T.currentBreakpoint !== e) {
							var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
							t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
							for (var i in a) T.params[i] = a[i];
							T.currentBreakpoint = e,
							t && T.destroyLoop && T.reLoop(!0)
						}
					},
					T.params.breakpoints && T.setBreakpoint(), T.container = e(r), 0 !== T.container.length)) {
						if (T.container.length > 1) {
							var S = [];
							return T.container.each(function() {
								S.push(new s(this, o))
							}),
							S
						}
						T.container[0].swiper = T,
						T.container.data("swiper", T),
						T.classNames.push(T.params.containerModifierClass + T.params.direction),
						T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
						T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1),
						T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
						(T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
						T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
						["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
						"slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
						"cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0),
						"fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, void 0 === f && (T.params.virtualTranslate = !0)),
						T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
						T.wrapper = T.container.children("." + T.params.wrapperClass),
						T.params.pagination && (T.paginationContainer = e(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
						(T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = e(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
						T.isHorizontal = function() {
							return "horizontal" === T.params.direction
						},
						T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
						T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
						T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
						T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
						T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
						T.container.addClass(T.classNames.join(" ")),
						T.translate = 0,
						T.progress = 0,
						T.velocity = 0,
						T.lockSwipeToNext = function() {
							T.params.allowSwipeToNext = !1,
							!1 === T.params.allowSwipeToPrev && T.params.grabCursor && T.unsetGrabCursor()
						},
						T.lockSwipeToPrev = function() {
							T.params.allowSwipeToPrev = !1,
							!1 === T.params.allowSwipeToNext && T.params.grabCursor && T.unsetGrabCursor()
						},
						T.lockSwipes = function() {
							T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
							T.params.grabCursor && T.unsetGrabCursor()
						},
						T.unlockSwipeToNext = function() {
							T.params.allowSwipeToNext = !0,
							!0 === T.params.allowSwipeToPrev && T.params.grabCursor && T.setGrabCursor()
						},
						T.unlockSwipeToPrev = function() {
							T.params.allowSwipeToPrev = !0,
							!0 === T.params.allowSwipeToNext && T.params.grabCursor && T.setGrabCursor()
						},
						T.unlockSwipes = function() {
							T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
							T.params.grabCursor && T.setGrabCursor()
						},
						T.setGrabCursor = function(e) {
							T.container[0].style.cursor = "move",
							T.container[0].style.cursor = e ? "-webkit-grabbing": "-webkit-grab",
							T.container[0].style.cursor = e ? "-moz-grabbin": "-moz-grab",
							T.container[0].style.cursor = e ? "grabbing": "grab"
						},
						T.unsetGrabCursor = function() {
							T.container[0].style.cursor = ""
						},
						T.params.grabCursor && T.setGrabCursor(),
						T.imagesToLoad = [],
						T.imagesLoaded = 0,
						T.loadImage = function(e, a, t, i, s, r) {
							function n() {
								r && r()
							}
							var o;
							e.complete && s ? n() : a ? ((o = new window.Image).onload = n, o.onerror = n, i && (o.sizes = i), t && (o.srcset = t), a && (o.src = a)) : n()
						},
						T.preloadImages = function() {
							function e() {
								void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
							}
							T.imagesToLoad = T.container.find("img");
							for (var a = 0; a < T.imagesToLoad.length; a++) T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
						},
						T.autoplayTimeoutId = void 0,
						T.autoplaying = !1,
						T.autoplayPaused = !1,
						T.startAutoplay = function() {
							return void 0 === T.autoplayTimeoutId && !!T.params.autoplay && !T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void p())
						},
						T.stopAutoplay = function(e) {
							T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
						},
						T.pauseAutoplay = function(e) {
							T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, p()) : T.wrapper.transitionEnd(function() {
								T && (T.autoplayPaused = !1, T.autoplaying ? p() : T.stopAutoplay())
							}))
						},
						T.minTranslate = function() {
							return - T.snapGrid[0]
						},
						T.maxTranslate = function() {
							return - T.snapGrid[T.snapGrid.length - 1]
						},
						T.updateAutoHeight = function() {
							var e, a = [],
							t = 0;
							if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1) for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
								var i = T.activeIndex + e;
								if (i > T.slides.length) break;
								a.push(T.slides.eq(i)[0])
							} else a.push(T.slides.eq(T.activeIndex)[0]);
							for (e = 0; e < a.length; e++) if (void 0 !== a[e]) {
								var s = a[e].offsetHeight;
								t = s > t ? s: t
							}
							t && T.wrapper.css("height", t + "px")
						},
						T.updateContainerSize = function() {
							var e, a;
							e = void 0 !== T.params.width ? T.params.width: T.container[0].clientWidth,
							a = void 0 !== T.params.height ? T.params.height: T.container[0].clientHeight,
							0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = a, T.size = T.isHorizontal() ? T.width: T.height)
						},
						T.updateSlidesSize = function() {
							T.slides = T.wrapper.children("." + T.params.slideClass),
							T.snapGrid = [],
							T.slidesGrid = [],
							T.slidesSizesGrid = [];
							var e, a = T.params.spaceBetween,
							t = -T.params.slidesOffsetBefore,
							i = 0,
							s = 0;
							if (void 0 !== T.size) {
								var r;
								"string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size),
								T.virtualSize = -a,
								T.rtl ? T.slides.css({
									marginLeft: "",
									marginTop: ""
								}) : T.slides.css({
									marginRight: "",
									marginBottom: ""
								}),
								T.params.slidesPerColumn > 1 && (r = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length: Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (r = Math.max(r, T.params.slidesPerView * T.params.slidesPerColumn)));
								var n, o, p = T.params.slidesPerColumn,
								d = r / p,
								c = d - (T.params.slidesPerColumn * d - T.slides.length);
								for (e = 0; e < T.slides.length; e++) {
									n = 0;
									var u, m, h, g = T.slides.eq(e);
									if (T.params.slidesPerColumn > 1)"column" === T.params.slidesPerColumnFill ? (h = e - (m = Math.floor(e / p)) * p, (m > c || m === c && h === p - 1) && ++h >= p && (h = 0, m++), u = m + h * r / p, g.css({
										"-webkit-box-ordinal-group": u,
										"-moz-box-ordinal-group": u,
										"-ms-flex-order": u,
										"-webkit-order": u,
										order: u
									})) : m = e - (h = Math.floor(e / d)) * d,
									g.css("margin-" + (T.isHorizontal() ? "top": "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
									"none" !== g.css("display") && ("auto" === T.params.slidesPerView ? (n = T.isHorizontal() ? g.outerWidth(!0) : g.outerHeight(!0), T.params.roundLengths && (n = l(n))) : (n = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView, T.params.roundLengths && (n = l(n)), T.isHorizontal() ? T.slides[e].style.width = n + "px": T.slides[e].style.height = n + "px"), T.slides[e].swiperSlideSize = n, T.slidesSizesGrid.push(n), T.params.centeredSlides ? (t = t + n / 2 + i / 2 + a, 0 === i && 0 !== e && (t = t - T.size / 2 - a), 0 === e && (t = t - T.size / 2 - a), Math.abs(t) < .001 && (t = 0), s % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t)) : (s % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t), t = t + n + a), T.virtualSize += n + a, i = n, s++)
								}
								if (T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter, T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
									width: T.virtualSize + T.params.spaceBetween + "px"
								}), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
									width: T.virtualSize + T.params.spaceBetween + "px"
								}) : T.wrapper.css({
									height: T.virtualSize + T.params.spaceBetween + "px"
								})), T.params.slidesPerColumn > 1 && (T.virtualSize = (n + T.params.spaceBetween) * r, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({
									width: T.virtualSize + T.params.spaceBetween + "px"
								}) : T.wrapper.css({
									height: T.virtualSize + T.params.spaceBetween + "px"
								}), T.params.centeredSlides)) {
									for (o = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && o.push(T.snapGrid[e]);
									T.snapGrid = o
								}
								if (!T.params.centeredSlides) {
									for (o = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] <= T.virtualSize - T.size && o.push(T.snapGrid[e]);
									T.snapGrid = o,
									Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
								}
								0 === T.snapGrid.length && (T.snapGrid = [0]),
								0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
									marginLeft: a + "px"
								}) : T.slides.css({
									marginRight: a + "px"
								}) : T.slides.css({
									marginBottom: a + "px"
								})),
								T.params.watchSlidesProgress && T.updateSlidesOffset()
							}
						},
						T.updateSlidesOffset = function() {
							for (var e = 0; e < T.slides.length; e++) T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft: T.slides[e].offsetTop
						},
						T.currentSlidesPerView = function() {
							var e, a, t = 1;
							if (T.params.centeredSlides) {
								var i, s = T.slides[T.activeIndex].swiperSlideSize;
								for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slides[e] && !i && (t++, (s += T.slides[e].swiperSlideSize) > T.size && (i = !0));
								for (a = T.activeIndex - 1; a >= 0; a--) T.slides[a] && !i && (t++, (s += T.slides[a].swiperSlideSize) > T.size && (i = !0))
							} else for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
							return t
						},
						T.updateSlidesProgress = function(e) {
							if (void 0 === e && (e = T.translate || 0), 0 !== T.slides.length) {
								void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
								var a = -e;
								T.rtl && (a = e),
								T.slides.removeClass(T.params.slideVisibleClass);
								for (var t = 0; t < T.slides.length; t++) {
									var i = T.slides[t],
									s = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + T.params.spaceBetween);
									if (T.params.watchSlidesVisibility) {
										var r = -(a - i.swiperSlideOffset),
										n = r + T.slidesSizesGrid[t]; (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
									}
									i.progress = T.rtl ? -s: s
								}
							}
						},
						T.updateProgress = function(e) {
							void 0 === e && (e = T.translate || 0);
							var a = T.maxTranslate() - T.minTranslate(),
							t = T.isBeginning,
							i = T.isEnd;
							0 === a ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1),
							T.isBeginning && !t && T.emit("onReachBeginning", T),
							T.isEnd && !i && T.emit("onReachEnd", T),
							T.params.watchSlidesProgress && T.updateSlidesProgress(e),
							T.emit("onProgress", T, T.progress)
						},
						T.updateActiveIndex = function() {
							var e, a, t, i = T.rtl ? T.translate: -T.translate;
							for (a = 0; a < T.slidesGrid.length; a++) void 0 !== T.slidesGrid[a + 1] ? i >= T.slidesGrid[a] && i < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a: i >= T.slidesGrid[a] && i < T.slidesGrid[a + 1] && (e = a + 1) : i >= T.slidesGrid[a] && (e = a);
							T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
							(t = Math.floor(e / T.params.slidesPerGroup)) >= T.snapGrid.length && (t = T.snapGrid.length - 1),
							e !== T.activeIndex && (T.snapIndex = t, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex())
						},
						T.updateRealIndex = function() {
							T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
						},
						T.updateClasses = function() {
							T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
							var a = T.slides.eq(T.activeIndex);
							a.addClass(T.params.slideActiveClass),
							o.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
							var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
							T.params.loop && 0 === t.length && (t = T.slides.eq(0)).addClass(T.params.slideNextClass);
							var i = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
							if (T.params.loop && 0 === i.length && (i = T.slides.eq( - 1)).addClass(T.params.slidePrevClass), o.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), i.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
								var s, r = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
								if (T.params.loop ? ((s = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup)) > T.slides.length - 1 - 2 * T.loopedSlides && (s -= T.slides.length - 2 * T.loopedSlides), s > r - 1 && (s -= r), s < 0 && "bullets" !== T.params.paginationType && (s = r + s)) : s = void 0 !== T.snapIndex ? T.snapIndex: T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function() {
									e(this).index() === s && e(this).addClass(T.params.bulletActiveClass)
								}) : T.bullets.eq(s).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(s + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(r)), "progress" === T.params.paginationType) {
									var n = (s + 1) / r,
									l = n,
									p = 1;
									T.isHorizontal() || (p = n, l = 1),
									T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
								}
								"custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, s + 1, r)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
							}
							T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
						},
						T.updatePagination = function() {
							if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
								var e = "";
								if ("bullets" === T.params.paginationType) {
									for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++) e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
									T.paginationContainer.html(e),
									T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
									T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
								}
								"fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)),
								"progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)),
								"custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
							}
						},
						T.update = function(e) {
							function a() {
								T.rtl,
								T.translate,
								t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
								T.setWrapperTranslate(t),
								T.updateActiveIndex(),
								T.updateClasses()
							}
							var t;
							T && (T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), e ? (T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (a(), T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()) : T.params.autoHeight && T.updateAutoHeight())
						},
						T.onResize = function(e) {
							T.params.onBeforeResize && T.params.onBeforeResize(T),
							T.params.breakpoints && T.setBreakpoint();
							var a = T.params.allowSwipeToPrev,
							t = T.params.allowSwipeToNext;
							T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
							T.updateContainerSize(),
							T.updateSlidesSize(),
							("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
							T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
							T.controller && T.controller.spline && (T.controller.spline = void 0);
							var i = !1;
							if (T.params.freeMode) {
								var s = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
								T.setWrapperTranslate(s),
								T.updateActiveIndex(),
								T.updateClasses(),
								T.params.autoHeight && T.updateAutoHeight()
							} else T.updateClasses(),
							i = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
							T.params.lazyLoading && !i && T.lazy && T.lazy.load(),
							T.params.allowSwipeToPrev = a,
							T.params.allowSwipeToNext = t,
							T.params.onAfterResize && T.params.onAfterResize(T)
						},
						T.touchEventsDesktop = {
							start: "mousedown",
							move: "mousemove",
							end: "mouseup"
						},
						window.navigator.pointerEnabled ? T.touchEventsDesktop = {
							start: "pointerdown",
							move: "pointermove",
							end: "pointerup"
						}: window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
							start: "MSPointerDown",
							move: "MSPointerMove",
							end: "MSPointerUp"
						}),
						T.touchEvents = {
							start: T.support.touch || !T.params.simulateTouch ? "touchstart": T.touchEventsDesktop.start,
							move: T.support.touch || !T.params.simulateTouch ? "touchmove": T.touchEventsDesktop.move,
							end: T.support.touch || !T.params.simulateTouch ? "touchend": T.touchEventsDesktop.end
						},
						(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container: T.wrapper).addClass("swiper-wp8-" + T.params.direction),
						T.initEvents = function(e) {
							var a = e ? "off": "on",
							t = e ? "removeEventListener": "addEventListener",
							i = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
							s = T.support.touch ? i: document,
							r = !!T.params.nested;
							if (T.browser.ie) i[t](T.touchEvents.start, T.onTouchStart, !1),
							s[t](T.touchEvents.move, T.onTouchMove, r),
							s[t](T.touchEvents.end, T.onTouchEnd, !1);
							else {
								if (T.support.touch) {
									var n = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
										passive: !0,
										capture: !1
									};
									i[t](T.touchEvents.start, T.onTouchStart, n),
									i[t](T.touchEvents.move, T.onTouchMove, r),
									i[t](T.touchEvents.end, T.onTouchEnd, n)
								} (o.simulateTouch && !T.device.ios && !T.device.android || o.simulateTouch && !T.support.touch && T.device.ios) && (i[t]("mousedown", T.onTouchStart, !1), document[t]("mousemove", T.onTouchMove, r), document[t]("mouseup", T.onTouchEnd, !1))
							}
							window[t]("resize", T.onResize),
							T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)),
							T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)),
							T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
							(T.params.preventClicks || T.params.preventClicksPropagation) && i[t]("click", T.preventClicks, !0)
						},
						T.attachEvents = function() {
							T.initEvents()
						},
						T.detachEvents = function() {
							T.initEvents(!0)
						},
						T.allowClick = !0,
						T.preventClicks = function(e) {
							T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
						},
						T.onClickNext = function(e) {
							e.preventDefault(),
							T.isEnd && !T.params.loop || T.slideNext()
						},
						T.onClickPrev = function(e) {
							e.preventDefault(),
							T.isBeginning && !T.params.loop || T.slidePrev()
						},
						T.onClickIndex = function(a) {
							a.preventDefault();
							var t = e(this).index() * T.params.slidesPerGroup;
							T.params.loop && (t += T.loopedSlides),
							T.slideTo(t)
						},
						T.updateClickedSlide = function(a) {
							var t = d(a, "." + T.params.slideClass),
							i = !1;
							if (t) for (var s = 0; s < T.slides.length; s++) T.slides[s] === t && (i = !0);
							if (!t || !i) return T.clickedSlide = void 0,
							void(T.clickedIndex = void 0);
							if (T.clickedSlide = t, T.clickedIndex = e(t).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
								var r, n = T.clickedIndex,
								o = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
								if (T.params.loop) {
									if (T.animating) return;
									r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10),
									T.params.centeredSlides ? n < T.loopedSlides - o / 2 || n > T.slides.length - T.loopedSlides + o / 2 ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
										T.slideTo(n)
									},
									0)) : T.slideTo(n) : n > T.slides.length - o ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
										T.slideTo(n)
									},
									0)) : T.slideTo(n)
								} else T.slideTo(n)
							}
						};
						var z, M, E, P, I, _, k, A, L, D, B, H, Y = "input, select, textarea, button, video",
						X = Date.now(),
						N = [];
						for (var G in T.animating = !1,
						T.touches = {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						T.onTouchStart = function(a) {
							if (a.originalEvent && (a = a.originalEvent), (B = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
								if (T.params.noSwiping && d(a, "." + T.params.noSwipingClass)) return void(T.allowClick = !0);
								if (!T.params.swipeHandler || d(a, T.params.swipeHandler)) {
									var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX: a.pageX,
									i = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY: a.pageY;
									if (! (T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
										if (z = !0, M = !1, E = !0, I = void 0, H = void 0, T.touches.startX = t, T.touches.startY = i, P = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (A = !1), "touchstart" !== a.type) {
											var s = !0;
											e(a.target).is(Y) && (s = !1),
											document.activeElement && e(document.activeElement).is(Y) && document.activeElement.blur(),
											s && a.preventDefault()
										}
										T.emit("onTouchStart", T, a)
									}
								}
							}
						},
						T.onTouchMove = function(a) {
							if (a.originalEvent && (a = a.originalEvent), !B || "mousemove" !== a.type) {
								if (a.preventedByNestedSwiper) return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX: a.pageX,
								void(T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY: a.pageY);
								if (T.params.onlyExternal) return T.allowClick = !1,
								void(z && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX: a.pageX, T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY: a.pageY, P = Date.now()));
								if (B && T.params.touchReleaseOnEdges && !T.params.loop) if (T.isHorizontal()) {
									if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return
								} else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;
								if (B && document.activeElement && a.target === document.activeElement && e(a.target).is(Y)) return M = !0,
								void(T.allowClick = !1);
								if (E && T.emit("onTouchMove", T, a), !(a.targetTouches && a.targetTouches.length > 1)) {
									var t;
									if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX: a.pageX, T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY: a.pageY, void 0 === I) T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? I = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, I = T.isHorizontal() ? t > T.params.touchAngle: 90 - t > T.params.touchAngle);
									if (I && T.emit("onTouchMoveOpposite", T, a), void 0 === H && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (H = !0)), z) {
										if (I) return void(z = !1);
										if (H) {
											T.allowClick = !1,
											T.emit("onSliderMove", T, a),
											a.preventDefault(),
											T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(),
											M || (o.loop && T.fixLoop(), k = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), D = !1, !T.params.grabCursor || !0 !== T.params.allowSwipeToNext && !0 !== T.params.allowSwipeToPrev || T.setGrabCursor(!0)),
											M = !0;
											var i = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX: T.touches.currentY - T.touches.startY;
											i *= T.params.touchRatio,
											T.rtl && (i = -i),
											T.swipeDirection = i > 0 ? "prev": "next",
											_ = i + k;
											var s = !0;
											if (i > 0 && _ > T.minTranslate() ? (s = !1, T.params.resistance && (_ = T.minTranslate() - 1 + Math.pow( - T.minTranslate() + k + i, T.params.resistanceRatio))) : i < 0 && _ < T.maxTranslate() && (s = !1, T.params.resistance && (_ = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - k - i, T.params.resistanceRatio))), s && (a.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && _ < k && (_ = k), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && _ > k && (_ = k), T.params.threshold > 0) {
												if (! (Math.abs(i) > T.params.threshold || A)) return void(_ = k);
												if (!A) return A = !0,
												T.touches.startX = T.touches.currentX,
												T.touches.startY = T.touches.currentY,
												_ = k,
												void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX: T.touches.currentY - T.touches.startY)
											}
											T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === N.length && N.push({
												position: T.touches[T.isHorizontal() ? "startX": "startY"],
												time: P
											}), N.push({
												position: T.touches[T.isHorizontal() ? "currentX": "currentY"],
												time: (new window.Date).getTime()
											})), T.updateProgress(_), T.setWrapperTranslate(_))
										}
									}
								}
							}
						},
						T.onTouchEnd = function(a) {
							if (a.originalEvent && (a = a.originalEvent), E && T.emit("onTouchEnd", T, a), E = !1, z) {
								T.params.grabCursor && M && z && (!0 === T.params.allowSwipeToNext || !0 === T.params.allowSwipeToPrev) && T.setGrabCursor(!1);
								var t, i = Date.now(),
								s = i - P;
								if (T.allowClick && (T.updateClickedSlide(a), T.emit("onTap", T, a), s < 300 && i - X > 300 && (L && clearTimeout(L), L = setTimeout(function() {
									T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, a))
								},
								300)), s < 300 && i - X < 300 && (L && clearTimeout(L), T.emit("onDoubleTap", T, a))), X = Date.now(), setTimeout(function() {
									T && (T.allowClick = !0)
								},
								0), !z || !M || !T.swipeDirection || 0 === T.touches.diff || _ === k) return void(z = M = !1);
								if (z = M = !1, t = T.params.followFinger ? T.rtl ? T.translate: -T.translate: -_, T.params.freeMode) {
									if (t < -T.minTranslate()) return void T.slideTo(T.activeIndex);
									if (t > -T.maxTranslate()) return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
									if (T.params.freeModeMomentum) {
										if (N.length > 1) {
											var r = N.pop(),
											n = N.pop(),
											o = r.position - n.position,
											l = r.time - n.time;
											T.velocity = o / l,
											T.velocity = T.velocity / 2,
											Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
											(l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
										} else T.velocity = 0;
										T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
										N.length = 0;
										var p = 1e3 * T.params.freeModeMomentumRatio,
										d = T.velocity * p,
										c = T.translate + d;
										T.rtl && (c = -c);
										var u, m = !1,
										h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
										if (c < T.maxTranslate()) T.params.freeModeMomentumBounce ? (c + T.maxTranslate() < -h && (c = T.maxTranslate() - h), u = T.maxTranslate(), m = !0, D = !0) : c = T.maxTranslate();
										else if (c > T.minTranslate()) T.params.freeModeMomentumBounce ? (c - T.minTranslate() > h && (c = T.minTranslate() + h), u = T.minTranslate(), m = !0, D = !0) : c = T.minTranslate();
										else if (T.params.freeModeSticky) {
											var g, v = 0;
											for (v = 0; v < T.snapGrid.length; v += 1) if (T.snapGrid[v] > -c) {
												g = v;
												break
											}
											c = Math.abs(T.snapGrid[g] - c) < Math.abs(T.snapGrid[g - 1] - c) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1],
											T.rtl || (c = -c)
										}
										if (0 !== T.velocity) p = T.rtl ? Math.abs(( - c - T.translate) / T.velocity) : Math.abs((c - T.translate) / T.velocity);
										else if (T.params.freeModeSticky) return void T.slideReset();
										T.params.freeModeMomentumBounce && m ? (T.updateProgress(u), T.setWrapperTransition(p), T.setWrapperTranslate(c), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function() {
											T && D && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(u), T.wrapper.transitionEnd(function() {
												T && T.onTransitionEnd()
											}))
										})) : T.velocity ? (T.updateProgress(c), T.setWrapperTransition(p), T.setWrapperTranslate(c), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
											T && T.onTransitionEnd()
										}))) : T.updateProgress(c),
										T.updateActiveIndex()
									}
									return void((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
								}
								var f, w = 0,
								y = T.slidesSizesGrid[0];
								for (f = 0; f < T.slidesGrid.length; f += T.params.slidesPerGroup) void 0 !== T.slidesGrid[f + T.params.slidesPerGroup] ? t >= T.slidesGrid[f] && t < T.slidesGrid[f + T.params.slidesPerGroup] && (w = f, y = T.slidesGrid[f + T.params.slidesPerGroup] - T.slidesGrid[f]) : t >= T.slidesGrid[f] && (w = f, y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
								var b = (t - T.slidesGrid[w]) / y;
								if (s > T.params.longSwipesMs) {
									if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);
									"next" === T.swipeDirection && (b >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)),
									"prev" === T.swipeDirection && (b > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
								} else {
									if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);
									"next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup),
									"prev" === T.swipeDirection && T.slideTo(w)
								}
							}
						},
						T._slideTo = function(e, a) {
							return T.slideTo(e, a, !0, !0)
						},
						T.slideTo = function(e, a, t, i) {
							void 0 === t && (t = !0),
							void 0 === e && (e = 0),
							e < 0 && (e = 0),
							T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
							T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
							var s = -T.snapGrid[T.snapIndex];
							if (T.params.autoplay && T.autoplaying && (i || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()), T.updateProgress(s), T.params.normalizeSlideIndex) for (var r = 0; r < T.slidesGrid.length; r++) - Math.floor(100 * s) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
							return ! (!T.params.allowSwipeToNext && s < T.translate && s < T.minTranslate() || !T.params.allowSwipeToPrev && s > T.translate && s > T.maxTranslate() && (T.activeIndex || 0) !== e || (void 0 === a && (a = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -s === T.translate || !T.rtl && s === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(s), 1) : (T.updateClasses(), T.onTransitionStart(t), 0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(s), T.setWrapperTransition(0), T.onTransitionEnd(t)) : (T.setWrapperTranslate(s), T.setWrapperTransition(a), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
								T && T.onTransitionEnd(t)
							}))), 0)))
						},
						T.onTransitionStart = function(e) {
							void 0 === e && (e = !0),
							T.params.autoHeight && T.updateAutoHeight(),
							T.lazy && T.lazy.onTransitionStart(),
							e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
						},
						T.onTransitionEnd = function(e) {
							T.animating = !1,
							T.setWrapperTransition(0),
							void 0 === e && (e = !0),
							T.lazy && T.lazy.onTransitionEnd(),
							e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
							T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
							T.params.hashnav && T.hashnav && T.hashnav.setHash()
						},
						T.slideNext = function(e, a, t) {
							return T.params.loop ? !T.animating && (T.fixLoop(), T.container[0].clientLeft, T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)) : T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
						},
						T._slideNext = function(e) {
							return T.slideNext(!0, e, !0)
						},
						T.slidePrev = function(e, a, t) {
							return T.params.loop ? !T.animating && (T.fixLoop(), T.container[0].clientLeft, T.slideTo(T.activeIndex - 1, a, e, t)) : T.slideTo(T.activeIndex - 1, a, e, t)
						},
						T._slidePrev = function(e) {
							return T.slidePrev(!0, e, !0)
						},
						T.slideReset = function(e, a, t) {
							return T.slideTo(T.activeIndex, a, e)
						},
						T.disableTouchControl = function() {
							return T.params.onlyExternal = !0,
							!0
						},
						T.enableTouchControl = function() {
							return T.params.onlyExternal = !1,
							!0
						},
						T.setWrapperTransition = function(e, a) {
							T.wrapper.transition(e),
							"slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
							T.params.parallax && T.parallax && T.parallax.setTransition(e),
							T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
							T.params.control && T.controller && T.controller.setTransition(e, a),
							T.emit("onSetTransition", T, e)
						},
						T.setWrapperTranslate = function(e, a, t) {
							var i = 0,
							s = 0;
							T.isHorizontal() ? i = T.rtl ? -e: e: s = e,
							T.params.roundLengths && (i = l(i), s = l(s)),
							T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + i + "px, " + s + "px, 0px)") : T.wrapper.transform("translate(" + i + "px, " + s + "px)")),
							T.translate = T.isHorizontal() ? i: s;
							var r = T.maxTranslate() - T.minTranslate(); (0 === r ? 0 : (e - T.minTranslate()) / r) !== T.progress && T.updateProgress(e),
							a && T.updateActiveIndex(),
							"slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
							T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
							T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
							T.params.control && T.controller && T.controller.setTranslate(T.translate, t),
							T.emit("onSetTranslate", T, T.translate)
						},
						T.getTranslate = function(e, a) {
							var t, i, s, r;
							return void 0 === a && (a = "x"),
							T.params.virtualTranslate ? T.rtl ? -T.translate: T.translate: (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((i = s.transform || s.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
								return e.replace(",", ".")
							}).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "": i)) : t = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (i = window.WebKitCSSMatrix ? r.m41: 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (i = window.WebKitCSSMatrix ? r.m42: 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), T.rtl && i && (i = -i), i || 0)
						},
						T.getWrapperTranslate = function(e) {
							return void 0 === e && (e = T.isHorizontal() ? "x": "y"),
							T.getTranslate(T.wrapper[0], e)
						},
						T.observers = [], T.initObservers = function() {
							if (T.params.observeParents) for (var e = T.container.parents(), a = 0; a < e.length; a++) c(e[a]);
							c(T.container[0], {
								childList: !1
							}),
							c(T.wrapper[0], {
								attributes: !1
							})
						},
						T.disconnectObservers = function() {
							for (var e = 0; e < T.observers.length; e++) T.observers[e].disconnect();
							T.observers = []
						},
						T.createLoop = function() {
							T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
							var a = T.wrapper.children("." + T.params.slideClass);
							"auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length),
							T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
							T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
							T.loopedSlides > a.length && (T.loopedSlides = a.length);
							var t, i = [],
							s = [];
							for (a.each(function(t, r) {
								var n = e(this);
								t < T.loopedSlides && s.push(r),
								t < a.length && t >= a.length - T.loopedSlides && i.push(r),
								n.attr("data-swiper-slide-index", t)
							}), t = 0; t < s.length; t++) T.wrapper.append(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
							for (t = i.length - 1; t >= 0; t--) T.wrapper.prepend(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
						},
						T.destroyLoop = function() {
							T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
							T.slides.removeAttr("data-swiper-slide-index")
						},
						T.reLoop = function(e) {
							var a = T.activeIndex - T.loopedSlides;
							T.destroyLoop(),
							T.createLoop(),
							T.updateSlidesSize(),
							e && T.slideTo(a + T.loopedSlides, 0, !1)
						},
						T.fixLoop = function() {
							var e;
							T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0))
						},
						T.appendSlide = function(e) {
							if (T.params.loop && T.destroyLoop(), "object" == (void 0 === e ? "undefined": i(e)) && e.length) for (var a = 0; a < e.length; a++) e[a] && T.wrapper.append(e[a]);
							else T.wrapper.append(e);
							T.params.loop && T.createLoop(),
							T.params.observer && T.support.observer || T.update(!0)
						},
						T.prependSlide = function(e) {
							T.params.loop && T.destroyLoop();
							var a = T.activeIndex + 1;
							if ("object" == (void 0 === e ? "undefined": i(e)) && e.length) {
								for (var t = 0; t < e.length; t++) e[t] && T.wrapper.prepend(e[t]);
								a = T.activeIndex + e.length
							} else T.wrapper.prepend(e);
							T.params.loop && T.createLoop(),
							T.params.observer && T.support.observer || T.update(!0),
							T.slideTo(a, 0, !1)
						},
						T.removeSlide = function(e) {
							T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
							var a, t = T.activeIndex;
							if ("object" == (void 0 === e ? "undefined": i(e)) && e.length) {
								for (var s = 0; s < e.length; s++) a = e[s],
								T.slides[a] && T.slides.eq(a).remove(),
								a < t && t--;
								t = Math.max(t, 0)
							} else a = e,
							T.slides[a] && T.slides.eq(a).remove(),
							a < t && t--,
							t = Math.max(t, 0);
							T.params.loop && T.createLoop(),
							T.params.observer && T.support.observer || T.update(!0),
							T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
						},
						T.removeAllSlides = function() {
							for (var e = [], a = 0; a < T.slides.length; a++) e.push(a);
							T.removeSlide(e)
						},
						T.effects = {
							fade: {
								setTranslate: function() {
									for (var e = 0; e < T.slides.length; e++) {
										var a = T.slides.eq(e),
										t = -a[0].swiperSlideOffset;
										T.params.virtualTranslate || (t -= T.translate);
										var i = 0;
										T.isHorizontal() || (i = t, t = 0);
										var s = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
										a.css({
											opacity: s
										}).transform("translate3d(" + t + "px, " + i + "px, 0px)")
									}
								},
								setTransition: function(e) {
									if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
										var a = !1;
										T.slides.transitionEnd(function() {
											if (!a && T) {
												a = !0,
												T.animating = !1;
												for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) T.wrapper.trigger(e[t])
											}
										})
									}
								}
							},
							flip: {
								setTranslate: function() {
									for (var a = 0; a < T.slides.length; a++) {
										var t = T.slides.eq(a),
										i = t[0].progress;
										T.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
										var s = -180 * i,
										r = 0,
										n = -t[0].swiperSlideOffset,
										o = 0;
										if (T.isHorizontal() ? T.rtl && (s = -s) : (o = n, n = 0, r = -s, s = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + T.slides.length, T.params.flip.slideShadows) {
											var l = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
											p = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
											0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), t.append(l)),
											0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), t.append(p)),
											l.length && (l[0].style.opacity = Math.max( - i, 0)),
											p.length && (p[0].style.opacity = Math.max(i, 0))
										}
										t.transform("translate3d(" + n + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + s + "deg)")
									}
								},
								setTransition: function(a) {
									if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), T.params.virtualTranslate && 0 !== a) {
										var t = !1;
										T.slides.eq(T.activeIndex).transitionEnd(function() {
											if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
												t = !0,
												T.animating = !1;
												for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < a.length; i++) T.wrapper.trigger(a[i])
											}
										})
									}
								}
							},
							cube: {
								setTranslate: function() {
									var a, t = 0;
									T.params.cube.shadow && (T.isHorizontal() ? (0 === (a = T.wrapper.find(".swiper-cube-shadow")).length && (a = e('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(a)), a.css({
										height: T.width + "px"
									})) : 0 === (a = T.container.find(".swiper-cube-shadow")).length && (a = e('<div class="swiper-cube-shadow"></div>'), T.container.append(a)));
									for (var i = 0; i < T.slides.length; i++) {
										var s = T.slides.eq(i),
										r = 90 * i,
										n = Math.floor(r / 360);
										T.rtl && (r = -r, n = Math.floor( - r / 360));
										var o = Math.max(Math.min(s[0].progress, 1), -1),
										l = 0,
										p = 0,
										d = 0;
										i % 4 == 0 ? (l = 4 * -n * T.size, d = 0) : (i - 1) % 4 == 0 ? (l = 0, d = 4 * -n * T.size) : (i - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size, d = T.size) : (i - 3) % 4 == 0 && (l = -T.size, d = 3 * T.size + 4 * T.size * n),
										T.rtl && (l = -l),
										T.isHorizontal() || (p = l, l = 0);
										var c = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r: 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
										if (o <= 1 && o > -1 && (t = 90 * i + 90 * o, T.rtl && (t = 90 * -i - 90 * o)), s.transform(c), T.params.cube.slideShadows) {
											var u = T.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
											m = T.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
											0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), s.append(u)),
											0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), s.append(m)),
											u.length && (u[0].style.opacity = Math.max( - o, 0)),
											m.length && (m[0].style.opacity = Math.max(o, 0))
										}
									}
									if (T.wrapper.css({
										"-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
										"-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
										"-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
										"transform-origin": "50% 50% -" + T.size / 2 + "px"
									}), T.params.cube.shadow) if (T.isHorizontal()) a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
									else {
										var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
										g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
										v = T.params.cube.shadowScale,
										f = T.params.cube.shadowScale / g,
										w = T.params.cube.shadowOffset;
										a.transform("scale3d(" + v + ", 1, " + f + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / f + "px) rotateX(-90deg)")
									}
									var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
									T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t: 0) + "deg)")
								},
								setTransition: function(e) {
									T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
									T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
								}
							},
							coverflow: {
								setTranslate: function() {
									for (var a = T.translate,
									t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, i = T.isHorizontal() ? T.params.coverflow.rotate: -T.params.coverflow.rotate, s = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
										var o = T.slides.eq(r),
										l = T.slidesSizesGrid[r],
										p = (t - o[0].swiperSlideOffset - l / 2) / l * T.params.coverflow.modifier,
										d = T.isHorizontal() ? i * p: 0,
										c = T.isHorizontal() ? 0 : i * p,
										u = -s * Math.abs(p),
										m = T.isHorizontal() ? 0 : T.params.coverflow.stretch * p,
										h = T.isHorizontal() ? T.params.coverflow.stretch * p: 0;
										Math.abs(h) < .001 && (h = 0),
										Math.abs(m) < .001 && (m = 0),
										Math.abs(u) < .001 && (u = 0),
										Math.abs(d) < .001 && (d = 0),
										Math.abs(c) < .001 && (c = 0);
										var g = "translate3d(" + h + "px," + m + "px," + u + "px)  rotateX(" + c + "deg) rotateY(" + d + "deg)";
										if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(p)), T.params.coverflow.slideShadows) {
											var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
											f = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
											0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left": "top") + '"></div>'), o.append(v)),
											0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right": "bottom") + '"></div>'), o.append(f)),
											v.length && (v[0].style.opacity = p > 0 ? p: 0),
											f.length && (f[0].style.opacity = -p > 0 ? -p: 0)
										}
									}
									T.browser.ie && (T.wrapper[0].style.perspectiveOrigin = t + "px 50%")
								},
								setTransition: function(e) {
									T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
								}
							}
						},
						T.lazy = {
							initialImageLoaded: !1,
							loadImageInSlide: function(a, t) {
								if (void 0 !== a && (void 0 === t && (t = !0), 0 !== T.slides.length)) {
									var i = T.slides.eq(a),
									s = i.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")"); ! i.hasClass(T.params.lazyLoadingClass) || i.hasClass(T.params.lazyStatusLoadedClass) || i.hasClass(T.params.lazyStatusLoadingClass) || (s = s.add(i[0])),
									0 !== s.length && s.each(function() {
										var a = e(this);
										a.addClass(T.params.lazyStatusLoadingClass);
										var s = a.attr("data-background"),
										r = a.attr("data-src"),
										n = a.attr("data-srcset"),
										o = a.attr("data-sizes");
										T.loadImage(a[0], r || s, n, o, !1,
										function() {
											if (void 0 !== T && null !== T && T) {
												if (s ? (a.css("background-image", 'url("' + s + '")'), a.removeAttr("data-background")) : (n && (a.attr("srcset", n), a.removeAttr("data-srcset")), o && (a.attr("sizes", o), a.removeAttr("data-sizes")), r && (a.attr("src", r), a.removeAttr("data-src"))), a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), i.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && t) {
													var e = i.attr("data-swiper-slide-index");
													if (i.hasClass(T.params.slideDuplicateClass)) {
														var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
														T.lazy.loadImageInSlide(l.index(), !1)
													} else {
														var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
														T.lazy.loadImageInSlide(p.index(), !1)
													}
												}
												T.emit("onLazyImageReady", T, i[0], a[0])
											}
										}),
										T.emit("onLazyImageLoad", T, i[0], a[0])
									})
								}
							},
							load: function() {
								var a, t = T.params.slidesPerView;
								if ("auto" === t && (t = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
									T.lazy.loadImageInSlide(e(this).index())
								});
								else if (t > 1) for (a = T.activeIndex; a < T.activeIndex + t; a++) T.slides[a] && T.lazy.loadImageInSlide(a);
								else T.lazy.loadImageInSlide(T.activeIndex);
								if (T.params.lazyLoadingInPrevNext) if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
									var i = T.params.lazyLoadingInPrevNextAmount,
									s = t,
									r = Math.min(T.activeIndex + s + Math.max(i, s), T.slides.length),
									n = Math.max(T.activeIndex - Math.max(s, i), 0);
									for (a = T.activeIndex + t; a < r; a++) T.slides[a] && T.lazy.loadImageInSlide(a);
									for (a = n; a < T.activeIndex; a++) T.slides[a] && T.lazy.loadImageInSlide(a)
								} else {
									var o = T.wrapper.children("." + T.params.slideNextClass);
									o.length > 0 && T.lazy.loadImageInSlide(o.index());
									var l = T.wrapper.children("." + T.params.slidePrevClass);
									l.length > 0 && T.lazy.loadImageInSlide(l.index())
								}
							},
							onTransitionStart: function() {
								T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
							},
							onTransitionEnd: function() {
								T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
							}
						},
						T.scrollbar = {
							isTouched: !1,
							setDragPosition: function(e) {
								var a = T.scrollbar,
								t = (T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY) - a.track.offset()[T.isHorizontal() ? "left": "top"] - a.dragSize / 2,
								i = -T.minTranslate() * a.moveDivider,
								s = -T.maxTranslate() * a.moveDivider;
								t < i ? t = i: t > s && (t = s),
								t = -t / a.moveDivider,
								T.updateProgress(t),
								T.setWrapperTranslate(t, !0)
							},
							dragStart: function(e) {
								var a = T.scrollbar;
								a.isTouched = !0,
								e.preventDefault(),
								e.stopPropagation(),
								a.setDragPosition(e),
								clearTimeout(a.dragTimeout),
								a.track.transition(0),
								T.params.scrollbarHide && a.track.css("opacity", 1),
								T.wrapper.transition(100),
								a.drag.transition(100),
								T.emit("onScrollbarDragStart", T)
							},
							dragMove: function(e) {
								var a = T.scrollbar;
								a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), T.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), T.emit("onScrollbarDragMove", T))
							},
							dragEnd: function(e) {
								var a = T.scrollbar;
								a.isTouched && (a.isTouched = !1, T.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
									a.track.css("opacity", 0),
									a.track.transition(400)
								},
								1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
							},
							draggableEvents: !1 !== T.params.simulateTouch || T.support.touch ? T.touchEvents: T.touchEventsDesktop,
							enableDraggable: function() {
								var a = T.scrollbar,
								t = T.support.touch ? a.track: document;
								e(a.track).on(a.draggableEvents.start, a.dragStart),
								e(t).on(a.draggableEvents.move, a.dragMove),
								e(t).on(a.draggableEvents.end, a.dragEnd)
							},
							disableDraggable: function() {
								var a = T.scrollbar,
								t = T.support.touch ? a.track: document;
								e(a.track).off(a.draggableEvents.start, a.dragStart),
								e(t).off(a.draggableEvents.move, a.dragMove),
								e(t).off(a.draggableEvents.end, a.dragEnd)
							},
							set: function() {
								if (T.params.scrollbar) {
									var a = T.scrollbar;
									a.track = e(T.params.scrollbar),
									T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)),
									a.drag = a.track.find(".swiper-scrollbar-drag"),
									0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)),
									a.drag[0].style.width = "",
									a.drag[0].style.height = "",
									a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth: a.track[0].offsetHeight,
									a.divider = T.size / T.virtualSize,
									a.moveDivider = a.divider * (a.trackSize / T.size),
									a.dragSize = a.trackSize * a.divider,
									T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px": a.drag[0].style.height = a.dragSize + "px",
									a.divider >= 1 ? a.track[0].style.display = "none": a.track[0].style.display = "",
									T.params.scrollbarHide && (a.track[0].style.opacity = 0)
								}
							},
							setTranslate: function() {
								if (T.params.scrollbar) {
									var e, a = T.scrollbar,
									t = (T.translate, a.dragSize);
									e = (a.trackSize - a.dragSize) * T.progress,
									T.rtl && T.isHorizontal() ? (e = -e) > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
									T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"),
									T.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
										a.track[0].style.opacity = 0,
										a.track.transition(400)
									},
									1e3))
								}
							},
							setTransition: function(e) {
								T.params.scrollbar && T.scrollbar.drag.transition(e)
							}
						},
						T.controller = {
							LinearSpline: function(e, a) {
								var t, i, s = function() {
									var e, a, t;
									return function(i, s) {
										for (a = -1, e = i.length; e - a > 1;) i[t = e + a >> 1] <= s ? a = t: e = t;
										return e
									}
								} ();
								this.x = e,
								this.y = a,
								this.lastIndex = e.length - 1,
								this.x.length,
								this.interpolate = function(e) {
									return e ? (i = s(this.x, e), t = i - 1, (e - this.x[t]) * (this.y[i] - this.y[t]) / (this.x[i] - this.x[t]) + this.y[t]) : 0
								}
							},
							getInterpolateFunction: function(e) {
								T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
							},
							setTranslate: function(e, a) {
								function t(a) {
									e = a.rtl && "horizontal" === a.params.direction ? -T.translate: T.translate,
									"slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a), r = -T.controller.spline.interpolate( - e)),
									r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()), r = (e - T.minTranslate()) * i + a.minTranslate()),
									T.params.controlInverse && (r = a.maxTranslate() - r),
									a.updateProgress(r),
									a.setWrapperTranslate(r, !1, T),
									a.updateActiveIndex()
								}
								var i, r, n = T.params.control;
								if (Array.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof s && t(n[o]);
								else n instanceof s && a !== n && t(n)
							},
							setTransition: function(e, a) {
								function t(a) {
									a.setWrapperTransition(e, T),
									0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
										r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(), a.onTransitionEnd())
									}))
								}
								var i, r = T.params.control;
								if (Array.isArray(r)) for (i = 0; i < r.length; i++) r[i] !== a && r[i] instanceof s && t(r[i]);
								else r instanceof s && a !== r && t(r)
							}
						},
						T.hashnav = {
							onHashCange: function(e, a) {
								var t = document.location.hash.replace("#", "");
								t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
							},
							attachEvents: function(a) {
								var t = a ? "off": "on";
								e(window)[t]("hashchange", T.hashnav.onHashCange)
							},
							setHash: function() {
								if (T.hashnav.initialized && T.params.hashnav) if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
								else {
									var e = T.slides.eq(T.activeIndex),
									a = e.attr("data-hash") || e.attr("data-history");
									document.location.hash = a || ""
								}
							},
							init: function() {
								if (T.params.hashnav && !T.params.history) {
									T.hashnav.initialized = !0;
									var e = document.location.hash.replace("#", "");
									if (e) for (var a = 0,
									t = T.slides.length; a < t; a++) {
										var i = T.slides.eq(a);
										if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(T.params.slideDuplicateClass)) {
											var s = i.index();
											T.slideTo(s, 0, T.params.runCallbacksOnInit, !0)
										}
									}
									T.params.hashnavWatchState && T.hashnav.attachEvents()
								}
							},
							destroy: function() {
								T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
							}
						},
						T.history = {
							init: function() {
								if (T.params.history) {
									if (!window.history || !window.history.pushState) return T.params.history = !1,
									void(T.params.hashnav = !0);
									T.history.initialized = !0,
									this.paths = this.getPathValues(),
									(this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
								}
							},
							setHistoryPopState: function() {
								T.history.paths = T.history.getPathValues(),
								T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
							},
							getPathValues: function() {
								var e = window.location.pathname.slice(1).split("/"),
								a = e.length;
								return {
									key: e[a - 2],
									value: e[a - 1]
								}
							},
							setHistory: function(e, a) {
								if (T.history.initialized && T.params.history) {
									var t = T.slides.eq(a),
									i = this.slugify(t.attr("data-history"));
									window.location.pathname.includes(e) || (i = e + "/" + i),
									T.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
								}
							},
							slugify: function(e) {
								return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
							},
							scrollToSlide: function(e, a, t) {
								if (a) for (var i = 0,
								s = T.slides.length; i < s; i++) {
									var r = T.slides.eq(i);
									if (this.slugify(r.attr("data-history")) === a && !r.hasClass(T.params.slideDuplicateClass)) {
										var n = r.index();
										T.slideTo(n, e, t)
									}
								} else T.slideTo(0, e, t)
							}
						},
						T.disableKeyboardControl = function() {
							T.params.keyboardControl = !1,
							e(document).off("keydown", u)
						},
						T.enableKeyboardControl = function() {
							T.params.keyboardControl = !0,
							e(document).on("keydown", u)
						},
						T.mousewheel = {
							event: !1,
							lastScrollTime: (new window.Date).getTime()
						},
						T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll": function() {
							var e = "onwheel" in document;
							if (!e) {
								var a = document.createElement("div");
								a.setAttribute("onwheel", "return;"),
								e = "function" == typeof a.onwheel
							}
							return ! e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
							e
						} () ? "wheel": "mousewheel"), T.disableMousewheelControl = function() {
							if (!T.mousewheel.event) return ! 1;
							var a = T.container;
							return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
							a.off(T.mousewheel.event, m),
							T.params.mousewheelControl = !1,
							!0
						},
						T.enableMousewheelControl = function() {
							if (!T.mousewheel.event) return ! 1;
							var a = T.container;
							return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
							a.on(T.mousewheel.event, m),
							T.params.mousewheelControl = !0,
							!0
						},
						T.parallax = {
							setTranslate: function() {
								T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
									h(this, T.progress)
								}),
								T.slides.each(function() {
									var a = e(this);
									a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
										h(this, Math.min(Math.max(a[0].progress, -1), 1))
									})
								})
							},
							setTransition: function(a) {
								void 0 === a && (a = T.params.speed),
								T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
									var t = e(this),
									i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
									0 === a && (i = 0),
									t.transition(i)
								})
							}
						},
						T.zoom = {
							scale: 1,
							currentScale: 1,
							isScaling: !1,
							gesture: {
								slide: void 0,
								slideWidth: void 0,
								slideHeight: void 0,
								image: void 0,
								imageWrap: void 0,
								zoomMax: T.params.zoomMax
							},
							image: {
								isTouched: void 0,
								isMoved: void 0,
								currentX: void 0,
								currentY: void 0,
								minX: void 0,
								minY: void 0,
								maxX: void 0,
								maxY: void 0,
								width: void 0,
								height: void 0,
								startX: void 0,
								startY: void 0,
								touchesStart: {},
								touchesCurrent: {}
							},
							velocity: {
								x: void 0,
								y: void 0,
								prevPositionX: void 0,
								prevPositionY: void 0,
								prevTime: void 0
							},
							getDistanceBetweenTouches: function(e) {
								if (e.targetTouches.length < 2) return 1;
								var a = e.targetTouches[0].pageX,
								t = e.targetTouches[0].pageY,
								i = e.targetTouches[1].pageX,
								s = e.targetTouches[1].pageY;
								return Math.sqrt(Math.pow(i - a, 2) + Math.pow(s - t, 2))
							},
							onGestureStart: function(a) {
								var t = T.zoom;
								if (!T.support.gestures) {
									if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2) return;
									t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
								}
								t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0) : t.gesture.image = void 0
							},
							onGestureChange: function(e) {
								var a = T.zoom;
								if (!T.support.gestures) {
									if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
									a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
								}
								a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale: a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
							},
							onGestureEnd: function(e) {
								var a = T.zoom; ! T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin), a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
							},
							onTouchStart: function(e, a) {
								var t = e.zoom;
								t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX: a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY: a.pageY))
							},
							onTouchMove: function(e) {
								var a = T.zoom;
								if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
									a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), T.rtl && (a.image.startX = -a.image.startX), T.rtl && (a.image.startY = -a.image.startY));
									var t = a.image.width * a.scale,
									i = a.image.height * a.scale;
									if (! (t < a.gesture.slideWidth && i < a.gesture.slideHeight)) {
										if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - i / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, !a.image.isMoved && !a.isScaling) {
											if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
											if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
										}
										e.preventDefault(),
										e.stopPropagation(),
										a.image.isMoved = !0,
										a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
										a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
										a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)),
										a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)),
										a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)),
										a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
										a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
										a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
										a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
										a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
										a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
										Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
										Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
										a.velocity.prevPositionX = a.image.touchesCurrent.x,
										a.velocity.prevPositionY = a.image.touchesCurrent.y,
										a.velocity.prevTime = Date.now(),
										a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
									}
								}
							},
							onTouchEnd: function(e, a) {
								var t = e.zoom;
								if (t.gesture.image && 0 !== t.gesture.image.length) {
									if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1,
									void(t.image.isMoved = !1);
									t.image.isTouched = !1,
									t.image.isMoved = !1;
									var i = 300,
									s = 300,
									r = t.velocity.x * i,
									n = t.image.currentX + r,
									o = t.velocity.y * s,
									l = t.image.currentY + o;
									0 !== t.velocity.x && (i = Math.abs((n - t.image.currentX) / t.velocity.x)),
									0 !== t.velocity.y && (s = Math.abs((l - t.image.currentY) / t.velocity.y));
									var p = Math.max(i, s);
									t.image.currentX = n,
									t.image.currentY = l;
									var d = t.image.width * t.scale,
									c = t.image.height * t.scale;
									t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
									t.image.maxX = -t.image.minX,
									t.image.minY = Math.min(t.gesture.slideHeight / 2 - c / 2, 0),
									t.image.maxY = -t.image.minY,
									t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
									t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
									t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
								}
							},
							onTransitionEnd: function(e) {
								var a = e.zoom;
								a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
							},
							toggleZoom: function(a, t) {
								var i, s, r, n, o, l, p, d, c, u, m, h, g, v, f, w, y = a.zoom; (y.gesture.slide || (y.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + a.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX: t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY: t.pageY) : (i = y.image.touchesStart.x, s = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, t ? (f = y.gesture.slide[0].offsetWidth, w = y.gesture.slide[0].offsetHeight, r = y.gesture.slide.offset().left + f / 2 - i, n = y.gesture.slide.offset().top + w / 2 - s, p = y.gesture.image[0].offsetWidth, d = y.gesture.image[0].offsetHeight, c = p * y.scale, u = d * y.scale, g = -(m = Math.min(f / 2 - c / 2, 0)), v = -(h = Math.min(w / 2 - u / 2, 0)), o = r * y.scale, l = n * y.scale, o < m && (o = m), o > g && (o = g), l < h && (l = h), l > v && (l = v)) : (o = 0, l = 0), y.gesture.imageWrap.transition(300).transform("translate3d(" + o + "px, " + l + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
							},
							attachEvents: function(a) {
								var t = a ? "off": "on";
								if (T.params.zoom) {
									var i = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
										passive: !0,
										capture: !1
									});
									T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, i), T.slides[t]("gesturechange", T.zoom.onGestureChange, i), T.slides[t]("gestureend", T.zoom.onGestureEnd, i)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, i), T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, i), T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, i)),
									T[t]("touchStart", T.zoom.onTouchStart),
									T.slides.each(function(a, i) {
										e(i).find("." + T.params.zoomContainerClass).length > 0 && e(i)[t](T.touchEvents.move, T.zoom.onTouchMove)
									}),
									T[t]("touchEnd", T.zoom.onTouchEnd),
									T[t]("transitionEnd", T.zoom.onTransitionEnd),
									T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
								}
							},
							init: function() {
								T.zoom.attachEvents()
							},
							destroy: function() {
								T.zoom.attachEvents(!0)
							}
						},
						T._plugins = [], T.plugins) {
							var O = T.plugins[G](T, T.params[G]);
							O && T._plugins.push(O)
						}
						return T.callPlugins = function(e) {
							for (var a = 0; a < T._plugins.length; a++) e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
						},
						T.emitterEventListeners = {},
						T.emit = function(e) {
							var a;
							if (T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), T.emitterEventListeners[e]) for (a = 0; a < T.emitterEventListeners[e].length; a++) T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
							T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
						},
						T.on = function(e, a) {
							return e = g(e),
							T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
							T.emitterEventListeners[e].push(a),
							T
						},
						T.off = function(e, a) {
							var t;
							if (e = g(e), void 0 === a) return T.emitterEventListeners[e] = [],
							T;
							if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
								for (t = 0; t < T.emitterEventListeners[e].length; t++) T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
								return T
							}
						},
						T.once = function(e, a) {
							e = g(e);
							return T.on(e,
							function t() {
								a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
								T.off(e, t)
							}),
							T
						},
						T.a11y = {
							makeFocusable: function(e) {
								return e.attr("tabIndex", "0"),
								e
							},
							addRole: function(e, a) {
								return e.attr("role", a),
								e
							},
							addLabel: function(e, a) {
								return e.attr("aria-label", a),
								e
							},
							disable: function(e) {
								return e.attr("aria-disabled", !0),
								e
							},
							enable: function(e) {
								return e.attr("aria-disabled", !1),
								e
							},
							onEnterKey: function(a) {
								13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
							},
							liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
							notify: function(e) {
								var a = T.a11y.liveRegion;
								0 !== a.length && (a.html(""), a.html(e))
							},
							init: function() {
								T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
								T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
								e(T.container).append(T.a11y.liveRegion)
							},
							initPagination: function() {
								T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
									var a = e(this);
									T.a11y.makeFocusable(a),
									T.a11y.addRole(a, "button"),
									T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
								})
							},
							destroy: function() {
								T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
							}
						},
						T.init = function() {
							T.params.loop && T.createLoop(),
							T.updateContainerSize(),
							T.updateSlidesSize(),
							T.updatePagination(),
							T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
							"slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()),
							T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))),
							T.attachEvents(),
							T.params.observer && T.support.observer && T.initObservers(),
							T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
							T.params.zoom && T.zoom && T.zoom.init(),
							T.params.autoplay && T.startAutoplay(),
							T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
							T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
							T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
							T.params.history && T.history && T.history.init(),
							T.params.hashnav && T.hashnav && T.hashnav.init(),
							T.params.a11y && T.a11y && T.a11y.init(),
							T.emit("onInit", T)
						},
						T.cleanupStyles = function() {
							T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
							T.wrapper.removeAttr("style"),
							T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
							T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
							T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
							T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
							T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
							T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
						},
						T.destroy = function(e, a) {
							T.detachEvents(),
							T.stopAutoplay(),
							T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
							T.params.loop && T.destroyLoop(),
							a && T.cleanupStyles(),
							T.disconnectObservers(),
							T.params.zoom && T.zoom && T.zoom.destroy(),
							T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
							T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
							T.params.a11y && T.a11y && T.a11y.destroy(),
							T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
							T.params.hashnav && T.hashnav && T.hashnav.destroy(),
							T.emit("onDestroy"),
							!1 !== e && (T = null)
						},
						T.init(),
						T
					}
				};
				r.prototype = {
					isSafari: function() {
						var e = window.navigator.userAgent.toLowerCase();
						return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
					} (),
					isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
					isArray: function(e) {
						return "[object Array]" === Object.prototype.toString.apply(e)
					},
					browser: {
						ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
						ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
						lteIE9: function() {
							var e = document.createElement("div");
							return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
							1 === e.getElementsByTagName("i").length
						} ()
					},
					device: function() {
						var e = window.navigator.userAgent,
						a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
						t = e.match(/(iPad).*OS\s([\d_]+)/),
						i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
						s = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
						return {
							ios: t || s || i,
							android: a
						}
					} (),
					support: {
						touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
						transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d ||
						function() {
							var e = document.createElement("div").style;
							return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
						} (),
						flexbox: function() {
							for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return ! 0
						} (),
						observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
						passiveListener: function() {
							var e = !1;
							try {
								var a = Object.defineProperty({},
								"passive", {
									get: function() {
										e = !0
									}
								});
								window.addEventListener("testPassiveListener", null, a)
							} catch(e) {}
							return e
						} (),
						gestures: "ongesturestart" in window
					},
					plugins: {}
				};
				for (var n = function() {
					var e = function(e) {
						var a = 0;
						for (a = 0; a < e.length; a++) this[a] = e[a];
						return this.length = e.length,
						this
					},
					a = function(a, t) {
						var i = [],
						s = 0;
						if (a && !t && a instanceof e) return a;
						if (a) if ("string" == typeof a) {
							var r, n, o = a.trim();
							if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
								var l = "div";
								for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = a, s = 0; s < n.childNodes.length; s++) i.push(n.childNodes[s])
							} else for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], s = 0; s < r.length; s++) r[s] && i.push(r[s])
						} else if (a.nodeType || a === window || a === document) i.push(a);
						else if (a.length > 0 && a[0].nodeType) for (s = 0; s < a.length; s++) i.push(a[s]);
						return new e(i)
					};
					return e.prototype = {
						addClass: function(e) {
							if (void 0 === e) return this;
							for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.add(a[t]);
							return this
						},
						removeClass: function(e) {
							for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.remove(a[t]);
							return this
						},
						hasClass: function(e) {
							return !! this[0] && this[0].classList.contains(e)
						},
						toggleClass: function(e) {
							for (var a = e.split(" "), t = 0; t < a.length; t++) for (var i = 0; i < this.length; i++) this[i].classList.toggle(a[t]);
							return this
						},
						attr: function(e, a) {
							if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
							for (var t = 0; t < this.length; t++) if (2 === arguments.length) this[t].setAttribute(e, a);
							else for (var i in e) this[t][i] = e[i],
							this[t].setAttribute(i, e[i]);
							return this
						},
						removeAttr: function(e) {
							for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
							return this
						},
						data: function(e, a) {
							if (void 0 !== a) {
								for (var t = 0; t < this.length; t++) {
									var i = this[t];
									i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
									i.dom7ElementDataStorage[e] = a
								}
								return this
							}
							if (this[0]) {
								var s = this[0].getAttribute("data-" + e);
								return s || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
							}
						},
						transform: function(e) {
							for (var a = 0; a < this.length; a++) {
								var t = this[a].style;
								t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
							}
							return this
						},
						transition: function(e) {
							"string" != typeof e && (e += "ms");
							for (var a = 0; a < this.length; a++) {
								var t = this[a].style;
								t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
							}
							return this
						},
						on: function(e, t, i, s) {
							function r(e) {
								var s = e.target;
								if (a(s).is(t)) i.call(s, e);
								else for (var r = a(s).parents(), n = 0; n < r.length; n++) a(r[n]).is(t) && i.call(r[n], e)
							}
							var n, o, l = e.split(" ");
							for (n = 0; n < this.length; n++) if ("function" == typeof t || !1 === t) for ("function" == typeof t && (i = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], i, s);
							else for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
							this[n].dom7LiveListeners.push({
								listener: i,
								liveListener: r
							}),
							this[n].addEventListener(l[o], r, s);
							return this
						},
						off: function(e, a, t, i) {
							for (var s = e.split(" "), r = 0; r < s.length; r++) for (var n = 0; n < this.length; n++) if ("function" == typeof a || !1 === a)"function" == typeof a && (t = arguments[1], i = arguments[2] || !1),
							this[n].removeEventListener(s[r], t, i);
							else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(s[r], this[n].dom7LiveListeners[o].liveListener, i);
							return this
						},
						once: function(e, a, t, i) {
							var s = this;
							"function" == typeof a && (a = !1, t = arguments[1], i = arguments[2]),
							s.on(e, a,
							function r(n) {
								t(n),
								s.off(e, a, r, i)
							},
							i)
						},
						trigger: function(e, a) {
							for (var t = 0; t < this.length; t++) {
								var i;
								try {
									i = new window.CustomEvent(e, {
										detail: a,
										bubbles: !0,
										cancelable: !0
									})
								} catch(t) { (i = document.createEvent("Event")).initEvent(e, !0, !0),
									i.detail = a
								}
								this[t].dispatchEvent(i)
							}
							return this
						},
						transitionEnd: function(e) {
							function a(r) {
								if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t++) s.off(i[t], a)
							}
							var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
							s = this;
							if (e) for (t = 0; t < i.length; t++) s.on(i[t], a);
							return this
						},
						width: function() {
							return this[0] === window ? window.innerWidth: this.length > 0 ? parseFloat(this.css("width")) : null
						},
						outerWidth: function(e) {
							return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
						},
						height: function() {
							return this[0] === window ? window.innerHeight: this.length > 0 ? parseFloat(this.css("height")) : null
						},
						outerHeight: function(e) {
							return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight: null
						},
						offset: function() {
							if (this.length > 0) {
								var e = this[0],
								a = e.getBoundingClientRect(),
								t = document.body,
								i = e.clientTop || t.clientTop || 0,
								s = e.clientLeft || t.clientLeft || 0,
								r = window.pageYOffset || e.scrollTop,
								n = window.pageXOffset || e.scrollLeft;
								return {
									top: a.top + r - i,
									left: a.left + n - s
								}
							}
							return null
						},
						css: function(e, a) {
							var t;
							if (1 === arguments.length) {
								if ("string" != typeof e) {
									for (t = 0; t < this.length; t++) for (var i in e) this[t].style[i] = e[i];
									return this
								}
								if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
							}
							if (2 === arguments.length && "string" == typeof e) {
								for (t = 0; t < this.length; t++) this[t].style[e] = a;
								return this
							}
							return this
						},
						each: function(e) {
							for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
							return this
						},
						html: function(e) {
							if (void 0 === e) return this[0] ? this[0].innerHTML: void 0;
							for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
							return this
						},
						text: function(e) {
							if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
							for (var a = 0; a < this.length; a++) this[a].textContent = e;
							return this
						},
						is: function(t) {
							if (!this[0]) return ! 1;
							var i, s;
							if ("string" == typeof t) {
								var r = this[0];
								if (r === document) return t === document;
								if (r === window) return t === window;
								if (r.matches) return r.matches(t);
								if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
								if (r.mozMatchesSelector) return r.mozMatchesSelector(t);
								if (r.msMatchesSelector) return r.msMatchesSelector(t);
								for (i = a(t), s = 0; s < i.length; s++) if (i[s] === this[0]) return ! 0;
								return ! 1
							}
							if (t === document) return this[0] === document;
							if (t === window) return this[0] === window;
							if (t.nodeType || t instanceof e) {
								for (i = t.nodeType ? [t] : t, s = 0; s < i.length; s++) if (i[s] === this[0]) return ! 0;
								return ! 1
							}
							return ! 1
						},
						index: function() {
							if (this[0]) {
								for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
								return a
							}
						},
						eq: function(a) {
							if (void 0 === a) return this;
							var t, i = this.length;
							return a > i - 1 ? new e([]) : a < 0 ? new e((t = i + a) < 0 ? [] : [this[t]]) : new e([this[a]])
						},
						append: function(a) {
							var t, i;
							for (t = 0; t < this.length; t++) if ("string" == typeof a) {
								var s = document.createElement("div");
								for (s.innerHTML = a; s.firstChild;) this[t].appendChild(s.firstChild)
							} else if (a instanceof e) for (i = 0; i < a.length; i++) this[t].appendChild(a[i]);
							else this[t].appendChild(a);
							return this
						},
						prepend: function(a) {
							var t, i;
							for (t = 0; t < this.length; t++) if ("string" == typeof a) {
								var s = document.createElement("div");
								for (s.innerHTML = a, i = s.childNodes.length - 1; i >= 0; i--) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
							} else if (a instanceof e) for (i = 0; i < a.length; i++) this[t].insertBefore(a[i], this[t].childNodes[0]);
							else this[t].insertBefore(a, this[t].childNodes[0]);
							return this
						},
						insertBefore: function(e) {
							for (var t = a(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);
							else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[i].cloneNode(!0), t[s])
						},
						insertAfter: function(e) {
							for (var t = a(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);
							else if (t.length > 1) for (var s = 0; s < t.length; s++) t[s].parentNode.insertBefore(this[i].cloneNode(!0), t[s].nextSibling)
						},
						next: function(t) {
							return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
						},
						nextAll: function(t) {
							var i = [],
							s = this[0];
							if (!s) return new e([]);
							for (; s.nextElementSibling;) {
								var r = s.nextElementSibling;
								t ? a(r).is(t) && i.push(r) : i.push(r),
								s = r
							}
							return new e(i)
						},
						prev: function(t) {
							return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
						},
						prevAll: function(t) {
							var i = [],
							s = this[0];
							if (!s) return new e([]);
							for (; s.previousElementSibling;) {
								var r = s.previousElementSibling;
								t ? a(r).is(t) && i.push(r) : i.push(r),
								s = r
							}
							return new e(i)
						},
						parent: function(e) {
							for (var t = [], i = 0; i < this.length; i++) e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);
							return a(a.unique(t))
						},
						parents: function(e) {
							for (var t = [], i = 0; i < this.length; i++) for (var s = this[i].parentNode; s;) e ? a(s).is(e) && t.push(s) : t.push(s),
							s = s.parentNode;
							return a(a.unique(t))
						},
						find: function(a) {
							for (var t = [], i = 0; i < this.length; i++) for (var s = this[i].querySelectorAll(a), r = 0; r < s.length; r++) t.push(s[r]);
							return new e(t)
						},
						children: function(t) {
							for (var i = [], s = 0; s < this.length; s++) for (var r = this[s].childNodes, n = 0; n < r.length; n++) t ? 1 === r[n].nodeType && a(r[n]).is(t) && i.push(r[n]) : 1 === r[n].nodeType && i.push(r[n]);
							return new e(a.unique(i))
						},
						remove: function() {
							for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
							return this
						},
						add: function() {
							var e, t, i = this;
							for (e = 0; e < arguments.length; e++) {
								var s = a(arguments[e]);
								for (t = 0; t < s.length; t++) i[i.length] = s[t],
								i.length++
							}
							return i
						}
					},
					a.fn = e.prototype,
					a.unique = function(e) {
						for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
						return a
					},
					a
				} (), o = ["jQuery", "Zepto", "Dom7"], l = 0; l < o.length; l++) window[o[l]] &&
				function(e) {
					e.fn.swiper = function(a) {
						var t;
						return e(this).each(function() {
							var e = new r(this, a);
							t || (t = e)
						}),
						t
					}
				} (window[o[l]]); (s = void 0 === n ? window.Dom7 || window.Zepto || t: n) && ("transitionEnd" in s.fn || (s.fn.transitionEnd = function(e) {
					function a(r) {
						if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t++) s.off(i[t], a)
					}
					var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
					s = this;
					if (e) for (t = 0; t < i.length; t++) s.on(i[t], a);
					return this
				}), "transform" in s.fn || (s.fn.transform = function(e) {
					for (var a = 0; a < this.length; a++) {
						var t = this[a].style;
						t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
					}
					return this
				}), "transition" in s.fn || (s.fn.transition = function(e) {
					"string" != typeof e && (e += "ms");
					for (var a = 0; a < this.length; a++) {
						var t = this[a].style;
						t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
					}
					return this
				}), "outerWidth" in s.fn || (s.fn.outerWidth = function(e) {
					return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
				})),
				window.Swiper = r
			} (),
			e.exports = window.Swiper
		}).call(a, t("zREj"), t("zREj"))
	},
	ve1W: function(e, a, t) {
		e.exports = t.p + "static/img/user12.f5b9eb9.jpg"
	}
},
[0]);
//# sourceMappingURL=app.1905f8a95b3d919da80c.js.map
