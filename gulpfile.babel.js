import Collector from './includes/Collector';

var roots = {
	src:  'src',
	dest: 'build',
};

var collector = new Collector({

	parts: [
		{
			name: 'mydefend',
			tasks: [
				{
					type: 'imgStatic',
					src: `${roots.src}/mydefend/img/static/**/*.*`,
					dest: `${roots.dest}/mydefend/img`,
					watch: `${roots.src}/mydefend/img/static/**/*.*`,
				},
				{
					type: 'imgSprite',
					src: `${roots.src}/mydefend/img/sprite/**/*.*`,
					spriteDest: `${roots.dest}/mydefend/img`,
					cssDest: `${roots.src}/mydefend/temp/sass`,
					imgPath: '../img/sprite.png', // Путь спрайта для вставки в css
					cssName: 'sprite.sass',
					watch: `${roots.src}/mydefend/img/sprite/**/*.*`,
				},
				{
					type: 'svgSprite',
					src: `${roots.src}/mydefend/img/svg/**/*.*`,
					rawDest: `${roots.dest}/mydefend/img/svg`,
					spriteDest: [
						`${roots.dest}/mydefend/svg`,
						`${roots.src}/mydefend/temp/svg`,
					],
					watch: `${roots.src}/mydefend/img/svg/**/*.*`,
					templates: [`${roots.src}/mydefend/config/svg-symbols.svg`],
				},
				{
					type: 'copy',
					src: `${roots.src}/mydefend/fonts/**/*.*`,
					dest: `${roots.dest}/mydefend/fonts`,
					watch: `${roots.src}/mydefend/fonts/**/*.*`,
				},
				{
					type: 'copy',
					src: `${roots.src}/mydefend/vendor/**/*.*`,
					dest: `${roots.dest}/mydefend/vendor`,
					watch: `${roots.src}/mydefend/vendor/**/*.*`,
				},
				{
					type: 'sass',
					src: `${roots.src}/mydefend/sass/main.sass`,
					dest: `${roots.dest}/mydefend/css/`,
					watch: [
						`${roots.src}/mydefend/components/**/*.sass`,
						`${roots.src}/krasota/sass/**/*.*`,
						`${roots.src}/mydefend/temp/sass/**/*.*`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/mydefend/js/main.js`,
					dest: `${roots.dest}/mydefend/js/`,
					watch: `${roots.src}/mydefend/components/**/*.js`,
				},
				{
					type: 'html',
					src: `${roots.src}/mydefend/components/page/**/*.html`,
					dest: `${roots.dest}/mydefend/`,
					watch: [
						`${roots.src}/mydefend/components/**/*.html`,
						`${roots.src}/mydefend/temp/svg/svg-symbols.svg`,
					],
				},
			],
		},
	],

});

collector.run();